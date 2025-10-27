import { AppHeader } from '@/components/layouts/app/header';
import { AppFooter } from './footer';

interface AppLayoutProps {
    children: React.ReactNode;
}

function AppLayout({ children, ...props }: AppLayoutProps) {
    return (
        <div className="relative">
            <div className="bg-background">
                <div {...props}>
                    <div className="bg-background/80 border-border sticky top-0 z-99 backdrop-blur-md">
                        <AppHeader />
                        <div className="via-border absolute right-0 bottom-0 left-0 h-px bg-linear-to-r from-transparent to-transparent"></div>
                    </div>
                    <div className="relative mx-auto flex max-w-7xl gap-8">
                        <div className="flex-1">
                            <div className="max-w-full">{children}</div>
                        </div>
                    </div>
                    <div className="bg-background/80 relative backdrop-blur-md">
                        <div className="via-border absolute top-0 right-0 left-0 h-px bg-linear-to-r from-transparent to-transparent"></div>
                        <AppFooter />
                    </div>
                </div>
            </div>
        </div>
    );
}

export { AppLayout };
