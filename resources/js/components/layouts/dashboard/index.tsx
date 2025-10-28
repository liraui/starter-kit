import React from 'react';
import { AppHeader } from './header';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

function DashboardLayout({ children, ...props }: DashboardLayoutProps) {
    return (
        <div className="relative">
            <div className="bg-background">
                <div {...props}>
                    <div className="w-full border-b">
                        <AppHeader />
                    </div>
                    <div>{children}</div>
                </div>
            </div>
        </div>
    );
}

export { DashboardLayout };
