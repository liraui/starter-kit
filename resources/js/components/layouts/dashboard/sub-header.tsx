import { Link } from '@inertiajs/react';
import React from 'react';

interface SubHeaderProps {
    title: string;
    children: React.ReactNode;
}

function SubHeader({ title, children }: SubHeaderProps) {
    return (
        <nav className="via-primary/5 z-[99] mx-auto w-full max-w-7xl bg-gradient-to-r from-transparent to-transparent px-8 pb-[2px]">
            <div className="bg-background/90 backdrop-blur-2xl">
                <div className="mx-auto flex h-12 max-w-7xl items-center">
                    <div className="flex items-center gap-16">
                        <div className="flex items-center gap-2">
                            <Link href="/" className="flex items-center gap-x-3">
                                <span className="hidden font-semibold capitalize lg:inline-block">{title}</span>
                            </Link>
                        </div>
                        <div className="flex items-center gap-8">{children}</div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export { SubHeader };
