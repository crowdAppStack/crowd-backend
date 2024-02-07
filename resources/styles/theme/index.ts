import { extendTheme } from "@mui/joy/styles"
import type { PaletteRange } from "@mui/joy/styles"

declare module "@mui/joy/styles" {
  interface Palette {
    primary: PaletteRange & {
      main: string;
    };
  }
}

export default extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: 'black',
        }
      }
    },
  },
})