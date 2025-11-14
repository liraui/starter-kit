import { DashboardFooter } from '@/layouts/dashboard-footer';
import { DashboardHeader } from '@/layouts/dashboard-header';
import type { DashboardLayoutProps } from '@/types/layouts';

function DashboardLayout({ children, ...props }: DashboardLayoutProps) {
    return (
        <div className="relative">
            <div className="bg-background">
                <div {...props}>
                    <div>
                        <DashboardHeader />
                    </div>
                    <div className="bg-muted dark:bg-muted/10 m-2 rounded-md border">
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
