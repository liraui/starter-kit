import { SidebarLayout } from '@/layouts/sidebar-layout';

export default function Dashboard() {
    return <div>{/*  */}</div>;
}

Dashboard.layout = (page: React.ReactNode) => <SidebarLayout breadcrumbs={[{ label: 'Dashboard', href: '#' }]}>{page}</SidebarLayout>;
