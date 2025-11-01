import { showProfile } from '@/actions/LiraUi/Auth/Http/Controllers/ProfileController';
import { SubHeader } from '@/components/layouts/dashboard/sub-header';
import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';

function ProfileNavigation() {
    const page = usePage();

    return (
        <SubHeader title="Profile">
            <Link
                href={showProfile.url()}
                className={cn(
                    page.url === showProfile.url() ? 'bg-background text-primary border-border rounded-md border p-1 px-2 font-medium' : '',
                )}
            >
                Settings
            </Link>
        </SubHeader>
    );
}

export { ProfileNavigation };
