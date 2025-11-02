import { showDashboard } from '@/actions/App/Http/Controllers/DashboardController';
import { showHome } from '@/actions/App/Http/Controllers/HomeController';
import { logout } from '@/actions/LiraUi/Auth/Http/Controllers/AuthController';
import { showProfile } from '@/actions/LiraUi/Auth/Http/Controllers/ProfileController';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Logo } from '@/components/ui/logo';
import { cn } from '@/lib/utils';
import type { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';

function DashboardHeader() {
    const page = usePage<SharedData>();
    const { auth } = usePage<SharedData>().props;

    return (
        <header className="mx-auto w-full max-w-7xl">
            <div className="bg-background/90 backdrop-blur-2xl">
                <div className="mx-auto flex h-12 items-center">
                    <div className="flex items-center gap-16">
                        <Link href={showHome.url()} className="flex items-center">
                            <Logo variant="primary" />
                        </Link>
                        <div className="flex items-center gap-8">
                            <Link
                                href={showDashboard.url()}
                                className={cn('text-primary', {
                                    'text-primary font-medium': page.url === showDashboard.url(),
                                })}
                            >
                                Dashboard
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1" />
                    <nav className="flex items-center gap-8">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-10 w-10 rounded-full p-1">
                                    <img src={auth.user.avatar} className="h-8 w-8 rounded-full" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="z-999">
                                <DropdownMenuLabel className="bg-muted/50 rounded">My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem asChild>
                                        <Link href={showProfile.url()} className="w-full cursor-pointer">
                                            Settings
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href={logout.url()} method="post" className="w-full cursor-pointer">
                                            Log out
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export { DashboardHeader };
