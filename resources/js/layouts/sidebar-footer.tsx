import { AppearanceToggle } from '@/components/appearance-toggle';
import { cn } from '@/lib/utils';

function SidebarFooter() {
    return (
        <footer className="bg-sidebar relative flex h-12 w-full items-center px-4">
            <div className="grow">
                <div className="mx-auto flex h-12 items-center">
                    <div className="flex-1" />
                    <nav className="flex items-center gap-8">
                        <a href="https://github.com/liraui/starter-kit" target="_blank" className={cn('hover:text-foreground/80 transition-colors')}>
                            Github
                        </a>
                        <AppearanceToggle />
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export { SidebarFooter };
