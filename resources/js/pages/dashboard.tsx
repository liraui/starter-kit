import { DashboardLayout } from '@/components/layouts/dashboard';

export default function Dashboard() {
    return <div></div>;
}

Dashboard.layout = (page: React.ReactNode) => <DashboardLayout>{page}</DashboardLayout>;
