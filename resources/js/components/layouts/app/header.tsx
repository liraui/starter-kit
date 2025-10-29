import { showDashboard } from '@/actions/App/Http/Controllers/DashboardController';
import { showLogin, showRegister } from '@/actions/LiraUi/Auth/Http/Controllers/AuthController';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Logo } from '@/components/ui/logo';
import { cn } from '@/lib/utils';
import { logout } from '@/routes/auth';
import { settings as showProfileSettings } from '@/routes/namespaced/liraui-auth/profile';
import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';

function AppHeader() {
    const page = usePage<SharedData>();

    const { auth } = page.props;

    return (
        <header className="flex h-12 items-center">
            <div className="grow">
                <div className="mx-auto flex h-12 max-w-7xl items-center">
                    <div className="flex items-center gap-16">
                        <Link href="/" className="flex items-center">
                            <Logo variant="primary" withText />
                        </Link>
                        <div className="flex items-center gap-6">
                            <Link href="/" className={cn(page.url === '/' ? 'text-primary font-semibold' : 'text-muted-foreground')}>
                                Home
                            </Link>
                        </div>
                    </div>
                    <div className="grow" />
                    <nav className="flex items-center gap-6">
                        {page.props.auth.user && (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="h-10 w-10 rounded-full p-1">
                                        <img src={auth.user.avatar} className="h-8 w-8 rounded-full" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="z-999">
                                    <DropdownMenuItem asChild>
                                        <Link href={showDashboard()} className='cursor-pointer'>Dashboard</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem asChild>
                                            <Link href={showProfileSettings()} className="w-full cursor-pointer">
                                                Settings
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link href={logout()} method="post" className="w-full cursor-pointer">
                                                Log out
                                            </Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        )}
                        {!page.props.auth.user && (
                            <div className="flex gap-4">
                                <Button className="font-semibold" variant={'ghost'} size={'sm'}>
                                    <Link href={showLogin()}>Log in</Link>
                                </Button>
                                <Button className="font-semibold" size={'sm'}>
                                    <Link href={showRegister()}>Register</Link>
                                </Button>
                            </div>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
}

export { AppHeader };
