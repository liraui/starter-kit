import { DashboardFooter } from '@/components/layouts/dashboard/footer';
import { AppHeader } from '@/components/layouts/dashboard/header';
import React from 'react';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

function DashboardLayout({ children, ...props }: DashboardLayoutProps) {
    return (
        <div className="relative">
            <div className="bg-background">
                <div {...props}>
                    <div>
                        <AppHeader />
                    </div>
                    <div className="bg-muted/35 dark:bg-muted/10 m-2 rounded-md border">
                        <main className="mx-auto min-h-[calc(100svh-8rem)] max-w-7xl flex-col gap-8">{children}</main>
                    </div>
                    <div>
                        <DashboardFooter />
                    </div>
                </div>
            </div>
        </div>
    );
}

export { DashboardLayout };
