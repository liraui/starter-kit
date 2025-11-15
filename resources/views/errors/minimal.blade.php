<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <title>@yield('title')</title>

        <script src="https://cdn.tailwindcss.com"></script>
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
