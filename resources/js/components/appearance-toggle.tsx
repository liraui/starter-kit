import { useAppearance } from '@/hooks/use-appearance';
import { MoonIcon, SunIcon, SunMoonIcon } from 'lucide-react';

function AppearanceToggle() {
    const { appearance, updateAppearance } = useAppearance();
    return (
        <button
            onClick={() => {
                if (appearance === 'light') updateAppearance('dark');
                else if (appearance === 'dark') updateAppearance('system');
                else updateAppearance('light');
            }}
            className="bg-muted flex items-center gap-2 rounded-md px-3 py-1.5"
            aria-label={`Toggle appearance, current mode: ${appearance}`}
        >
            {appearance === 'light' && <SunIcon className="h-4 w-4" />}
            {appearance === 'dark' && <MoonIcon className="h-4 w-4" />}
            {appearance === 'system' && <SunMoonIcon className="h-4 w-4" />}
        </button>
    );
}

export { AppearanceToggle };
