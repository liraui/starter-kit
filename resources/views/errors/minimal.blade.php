<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <title>@yield('title')</title>

        <script>
            (function() {
                const appearance = document.cookie.split('; ').find(row => row.startsWith('appearance='))?.split('=')[1] ?? 'system';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                } else {
                    document.documentElement.classList.toggle('dark', appearance === 'dark');
                }
            })();
        </script>

        @vite(['resources/css/app.css'])
    </head>
    <body class="antialiased">
        <div class="relative flex items-top justify-center min-h-screen bg-white dark:bg-[#0a0a0a] sm:items-center sm:pt-0" role="main">
            <div class="max-w-xl mx-auto sm:px-6 lg:px-8">
                <div class="flex items-center pt-8 sm:justify-start sm:pt-0">
                    <h1 class="px-4 text-lg dark:text-white text-black border-r border-black dark:border-white tracking-wider">
                        @yield('code')
                    </h1>
                    <div class="ml-4 text-lg dark:text-white text-black uppercase tracking-wider">
                        @yield('message')
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
