import { showHome } from '@/actions/App/Http/Controllers/HomeController';
import type { SubHeaderProps } from '@/types/layouts';
import { Link } from '@inertiajs/react';

function SubHeader({ title, children }: SubHeaderProps) {
    return (
        <nav className="border-border/25 border-b px-8">
            <div className="mx-auto flex h-12 max-w-7xl items-center bg-transparent">
                <div className="flex items-center gap-8">
                    <span className="font-semibold">{title}</span>
                    <div className="flex items-center gap-4">{children}</div>
                </div>
            </div>
        </nav>
    );
}

export { SubHeader };
