<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response as InertiaResponse;
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
    public function showHome(): InertiaResponse
    {
        return Inertia::render('welcome');
    }
}
