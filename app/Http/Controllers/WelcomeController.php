<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Spatie\RouteAttributes\Attributes\Get;

class WelcomeController extends Controller
{
    #[Get(
        uri: '/',
        name: 'welcome',
        middleware: [
            'web',
        ]
    )]
    public function showWelcome()
    {
        return Inertia::render('welcome');
    }
}
