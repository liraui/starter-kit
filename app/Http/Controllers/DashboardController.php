<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response as InertiaResponse;
use Spatie\RouteAttributes\Attributes\Get;

class DashboardController extends Controller
{
    #[Get(
        uri: '/dashboard',
        name: 'dashboard',
        middleware: [
            'web',
            'auth',
        ]
    )]
    public function showDashboard(): InertiaResponse
    {
        return Inertia::render('dashboard');
    }
}
