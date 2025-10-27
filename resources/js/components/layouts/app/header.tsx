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
import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';

function AppHeader() {
    const page = usePage<SharedData>();
    
    const { auth } = page.props;

    return (
        <header className="flex h-12 items-center">
            <div className="grow">
                <div className="mx-auto flex h-12 max-w-7xl items-center px-5">
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
                </div>
            </div>
        </header>
    );
}

export { AppHeader };
