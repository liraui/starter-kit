import { SubHeader } from '@/components/layouts/dashboard/sub-header';
import { cn } from '@/lib/utils';
import { settings } from '@/routes/namespaced/liraui-auth/profile';
import { Link, usePage } from '@inertiajs/react';

function ProfileNavigation() {
    const page = usePage();

    return (
        <SubHeader title="Profile">
            <Link
                href={settings()}
                className={cn(page.url === settings().url ? 'bg-muted text-primary border-border rounded-md border p-1 px-2 font-medium' : '')}
            >
                Settings
            </Link>
        </SubHeader>
    );
}

export { ProfileNavigation };
