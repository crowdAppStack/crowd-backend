<!DOCTYPE html>
<html>

<head>
    <title>@yield('title')</title>
    @viteReactRefresh
    @vite([
        'resources/css/app.css',
        'resources/js/app.jsx'
    ])
</head>

<body>
    @yield('content')
</body>

@stack('scripts')

</html>
