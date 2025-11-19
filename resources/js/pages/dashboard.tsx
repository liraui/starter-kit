import { Button } from '@/components/ui/button';
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty';
import { Logo } from '@/components/ui/logo';
import { DashboardShell } from '@/layouts/dashboard-shell';
import { ArrowUpRightIcon } from 'lucide-react';

export default function Dashboard() {
    return (
        <div className="flex w-full flex-col gap-8 px-8 py-8">
            <Empty className="bg-background/50 relative mx-auto flex h-full w-full items-center justify-center">
                <EmptyHeader>
                    <EmptyMedia variant="icon">
                        <Logo />
                    </EmptyMedia>
                    <EmptyTitle>You're all caught up</EmptyTitle>
                    <EmptyDescription>Need help getting started? Check out our documentation to learn more about Lira.</EmptyDescription>
                </EmptyHeader>
                <span className="text-sm">
                    Go to
                    <Button variant="link" asChild className="text-muted-foreground" size="sm">
                        <span>
                            <a href="https://liraui.com" className="text-primary">
                                liraui.com
                            </a>
                            <ArrowUpRightIcon />
                        </span>
                    </Button>
                </span>
            </Empty>
        </div>
    );
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
