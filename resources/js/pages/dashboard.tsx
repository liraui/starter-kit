import { DashboardLayout } from '@/components/layouts/dashboard';

export default function Dashboard() {
    return (
        <main className="mx-auto my-8 max-w-7xl flex-col gap-8">
            {/*  */}
        </main>
    );
}

Dashboard.layout = (page: React.ReactNode) => <DashboardLayout>{page}</DashboardLayout>;
