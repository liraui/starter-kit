import { showHome } from '@/actions/App/Http/Controllers/HomeController';
import { Link } from '@inertiajs/react';
import React from 'react';

interface SubHeaderProps {
    title: string;
    children: React.ReactNode;
}

function SubHeader({ title, children }: SubHeaderProps) {
    return (
        <nav>
            <div className="mx-auto flex h-12 max-w-7xl items-center border-b bg-transparent">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Link href={showHome.url()} className="flex items-center gap-x-3">
                            <span className="hidden font-semibold lg:inline-block">{title}</span>
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">{children}</div>
                </div>
            </div>
        </nav>
    );
}

export { SubHeader };
