import { SubHeader } from '@/components/layouts/dashboard/sub-header';
import { cn } from '@/lib/utils';
import { settings as showProfileSettings } from '@/routes/namespaced/liraui-auth/profile';
import { Link, usePage } from '@inertiajs/react';

function ProfileNavigation() {
    const page = usePage();

    return (
        <SubHeader title="Profile">
            <Link
                href={showProfileSettings()}
                className={cn(
                    page.url === showProfileSettings().url ? 'bg-background text-primary border-border rounded-md border p-1 px-2 font-medium' : '',
                )}
            >
                Settings
            </Link>
        </SubHeader>
    );
}

export { ProfileNavigation };
