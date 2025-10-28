<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
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
    public function showDashboard()
    {
        return Inertia::render('dashboard');
    }
}
