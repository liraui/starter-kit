import { showDashboard } from '@/actions/App/Http/Controllers/DashboardController';
import { AppearanceToggle } from '@/components/appeareance-toggle';
import { Logo } from '@/components/ui/logo';
import { Link } from '@inertiajs/react';

function DashboardFooter() {
    return (
        <footer className="flex h-12 items-center">
            <div className="grow">
                <div className="mx-auto flex h-12 max-w-7xl items-center">
                    <div className="flex gap-8">
                        <Link href="/" className="flex items-center">
                            <Logo variant="primary" />
                        </Link>
                    </div>
                    <div className="flex-1" />
                    <nav className="flex items-center gap-8">
                        <Link href="/">Home</Link>
                        <Link href={showDashboard()}>Dashboard</Link>
                        <AppearanceToggle />
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export { DashboardFooter };
