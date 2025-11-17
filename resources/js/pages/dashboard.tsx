import { DashboardShell } from '@/layouts/dashboard-shell';

export default function Dashboard() {
    return <div>{/*  */}</div>;
}

Dashboard.layout = (page: React.ReactNode) => (
    <DashboardShell
        breadcrumbs={[
            { label: 'Platform', href: '#' },
            { label: 'Dashboard', href: '#' },
        ]}
    >
        {page}
    </DashboardShell>
);
