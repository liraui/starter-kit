<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Spatie\RouteAttributes\Attributes\Get;

class HomeController extends Controller
{
    #[Get(
        uri: '/',
        name: 'home',
        middleware: [
            'web',
        ]
    )]
    public function showHome()
    {
        return Inertia::render('welcome');
    }
}
