<!DOCTYPE html>
<html>

<head>
    <title>@yield('title')</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
    />
    @viteReactRefresh
    @vite([
        'resources/styles/app.css',
        'resources/js/app.tsx'
    ])
</head>

<body>
    @yield('content')
</body>

@stack('scripts')

</html>
