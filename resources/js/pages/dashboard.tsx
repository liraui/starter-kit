import { DashboardShell } from '@/layouts/dashboard-shell';

export default function Dashboard() {
    return <div className="px-8">{/*  */}</div>;
}

Dashboard.layout = (page: React.ReactNode) => <DashboardShell breadcrumbs={[{ label: 'Dashboard', href: '#' }]}>{page}</DashboardShell>;
