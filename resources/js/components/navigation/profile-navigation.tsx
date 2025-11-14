import { showProfile } from '@/actions/LiraUi/Auth/Http/Controllers/ProfileController';
import { SubHeader } from '@/layouts/sub-header';
import { cn, isSameUrl } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';
import { SettingsIcon } from 'lucide-react';

function ProfileNavigation() {
    const page = usePage();

    return (
        <SubHeader title="Profile">
            <Link
                href={showProfile.url()}
                className={cn({
                    'bg-background text-primary border-border flex items-center gap-2 rounded-md border p-1 px-2 font-medium': isSameUrl(
                        page.url,
                        showProfile.url(),
                    ),
                })}
            >
                <SettingsIcon size={14} /> Settings
            </Link>
        </SubHeader>
    );
}

export { ProfileNavigation };
