import { showHome } from '@/actions/App/Http/Controllers/HomeController';
import { logout } from '@/actions/LiraUi/Auth/Http/Controllers/AuthController';
import { showProfile } from '@/actions/LiraUi/Auth/Http/Controllers/ProfileController';
import { AppearanceToggle } from '@/components/appearance-toggle';
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
import type { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';

function SidebarFooter() {
    const { auth } = usePage<SharedData>().props;

    return (
        <footer className="bg-sidebar relative flex h-12 w-full items-center px-4">
            <div className="grow">
                <div className="mx-auto flex h-12 items-center">
                    <div className="flex-1" />
                    <nav className="flex items-center gap-8">
                        <Link href={showHome.url()}>Home</Link>
                        <AppearanceToggle />
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export { SidebarFooter };
