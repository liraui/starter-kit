import { DashboardLayout } from '@/layouts/dashboard-layout';
import { SidebarLayout } from '@/layouts/sidebar-layout';
import { SharedData } from '@/types';
import type { DashboardShellProps } from '@/types/layouts';
import { usePage } from '@inertiajs/react';

export function DashboardShell({ children, breadcrumbs }: DashboardShellProps) {
    const variant = usePage<SharedData>().props.dashboard.shell || 'default';

    switch (variant) {
        case 'sidebar':
            return <SidebarLayout breadcrumbs={breadcrumbs ?? []}>{children}</SidebarLayout>;
        default:
            return <DashboardLayout breadcrumbs={breadcrumbs ?? []}>{children}</DashboardLayout>;
    }
}
