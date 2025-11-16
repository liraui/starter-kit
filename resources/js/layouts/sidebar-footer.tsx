import { showHome } from '@/actions/App/Http/Controllers/HomeController';
import { AppearanceToggle } from '@/components/appearance-toggle';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';

function SidebarFooter() {
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
