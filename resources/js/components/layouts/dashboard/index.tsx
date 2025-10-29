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
                    <div className="bg-muted/25 m-2 rounded-md border">{children}</div>
                    <div>
                        <DashboardFooter />
                    </div>
                </div>
            </div>
        </div>
    );
}

export { DashboardLayout };
