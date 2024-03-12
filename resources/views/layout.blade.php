<!DOCTYPE html>
<html>

<head>
    <title>@yield('title')</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    @viteReactRefresh
    @vite([
        'resources/styles/app.css',
        'resources/js/app.tsx'
    ])
</head>

<body class="bg-primary-light">
    @yield('content')
</body>

@stack('scripts')

</html>
