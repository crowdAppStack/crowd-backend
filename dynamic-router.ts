import fs from "fs"
import path from "path"
import { ESLint } from "eslint"
import chokidar from "chokidar"

import { type Plugin } from "vite"

export type Config = {
  excludeFiles?: string[]
  customRoutes?: Routes[]
  laravelRouteStart?: string
  laravelRouteEnd?: string
  output?: string
}

export type MergedConfig = {
  excludeFiles: string[]
  customRoutes: Routes[]
  laravelRouteStart: string
  laravelRouteEnd: string
  output: string
}

export type Routes = {
  name: string
  path: string
  component: string
  importPath: string
}

const EXCLUDED_FILES = []
const CUSTOM_ROUTES = []
const LARAVEL_ROUTE_START = "// ### DYNAMIC ROUTES START ###"
const LARAVEL_ROUTE_END = "// ### DYNAMIC ROUTES END ###"
const OUTPUT = "resources/js/d-router.tsx"

const baseConfig = {
  excludeFiles: EXCLUDED_FILES,
  customRoutes: CUSTOM_ROUTES,
  laravelRouteStart: LARAVEL_ROUTE_START,
  laravelRouteEnd: LARAVEL_ROUTE_END,
  output: OUTPUT,
}

const syncPageRouter = async (config?: Config) => {
  const mergedConfig: MergedConfig = config ? { ...baseConfig, ...config } : baseConfig

  const pages = path.join('resources/js/components/pages')
  const eslint = new ESLint({ fix: true })
  const files = fs.readdirSync(pages)

  const routes = files.filter(file => !mergedConfig.excludeFiles.includes(file)).map((file) => {
    const name = file.split('.')[0]

    // Check if file is empty or not
    if (fs.statSync(path.join(pages, file)).size === 0) {
      fs.writeFileSync(path.join(pages, file), `export default function ${name}() {
        return (
          <div>
            <h1>${name}</h1>
          </div>
        )
      }`)

      eslint.lintFiles(path.join(pages, file)).then((results) => {
        ESLint.outputFixes(results)
      })
    }

    return {
      name: name.toLowerCase(),
      path: `/${name.toLowerCase()}`,
      component: `${name}`,
      importPath: `@/components/pages/${name}`,
    }
  })

  // First create the router.tsx file
  fs.writeFileSync(
    path.join(mergedConfig.output),
    `${mergedConfig.customRoutes.map(route => `import ${route.component} from "${route.importPath}"`).join('\n')}
    ${routes.map(route => `import ${route.component} from "${route.importPath}"`).join('\n')}
    
    const dynamicRoutes = [
      ${mergedConfig.customRoutes.map(route => `{
        path: "${route.path}",
        element: <${route.component} />
      },`).join('\n')}
      ${routes.map(route => `{
        path: "${route.path}",
        element: <${route.component} />
      }`).join(',\n')}
    ]
    
    export { dynamicRoutes }`
  )

  // Then update the web.php file
  const web = fs.readFileSync(path.join('routes/web.php'), 'utf-8')
  const startFilePosition = web.indexOf(mergedConfig.laravelRouteStart) + mergedConfig.laravelRouteStart.length
  const endFilePosition = web.indexOf(mergedConfig.laravelRouteEnd)

  const newWeb = web.slice(0, startFilePosition) + '\n' + routes.map(route => `'${route.name}'`).join(',\n') + '\n' + web.slice(endFilePosition)

  fs.writeFileSync(path.join('routes/web.php'), newWeb)

  // Then fix lint errors
  const results = await eslint.lintFiles(path.join(mergedConfig.output))
  await ESLint.outputFixes(results)
}

// Here we will create a dynamic router that will take all files into resources/js/components/pages and create a route for them
// This will allow us to create a SPA with Laravel and React
export default function dynamicRouter(config?: Config): Plugin {
  return {
    name: 'dynamic-router',
    buildStart: () => syncPageRouter(config),
    // Add a watcher to update the router.tsx file when a new page is added
    configureServer: ({ ws }) => {
      const pages = path.join('resources/js/components/pages')
      const watcher = chokidar.watch(pages, { ignoreInitial: true })

      watcher.on('add', () => {
        syncPageRouter(config)
        ws.send({ type: 'full-reload' })
      })

      watcher.on('unlink', () => {
        syncPageRouter(config)
        ws.send({ type: 'full-reload' })
      })
    },
  }
}