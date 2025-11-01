import { showHome } from '@/actions/App/Http/Controllers/HomeController';
import { AppearanceToggle } from '@/components/appeareance-toggle';
import { Logo } from '@/components/ui/logo';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';

function AppFooter() {
    return (
        <footer className="flex h-12 items-center">
            <div className="grow">
                <div className="mx-auto flex h-12 max-w-7xl items-center">
                    <div className="flex gap-8">
                        <Link href={showHome.url()} className="flex items-center">
                            <Logo variant="primary" />
                        </Link>
                    </div>
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

export { AppFooter };
