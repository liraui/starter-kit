import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { DashboardFooter } from '@/layouts/dashboard-footer';
import { DashboardHeader } from '@/layouts/dashboard-header';
import type { DashboardLayoutProps } from '@/types/layouts';

function DashboardLayout({ children, breadcrumbs }: DashboardLayoutProps) {
    console.log(breadcrumbs);

    return (
        <div className="relative">
            <div className="bg-background">
                <div>
                    <div className="bg-background sticky top-0 z-9">
                        <DashboardHeader />
                    </div>
                    <div className="bg-muted border-border/50 sticky top-12 z-99 mx-2 rounded-t-xl border-b dark:bg-[#0d0d0d]">
                        <div className="mx-auto flex h-12 w-full max-w-7xl shrink-0 items-center gap-2 px-8">
                            <div className="mx-auto flex h-16 w-full max-w-7xl shrink-0 items-center gap-2">
                                {breadcrumbs && breadcrumbs.length > 0 && (
                                    <Breadcrumb>
                                        <BreadcrumbList>
                                            {breadcrumbs.map((breadcrumb, index) => (
                                                <div key={index} className="flex items-center gap-2">
                                                    <BreadcrumbItem>
                                                        {index === breadcrumbs.length - 1 ? (
                                                            <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
                                                        ) : (
                                                            <BreadcrumbLink
                                                                href={breadcrumb.href}
                                                                className={breadcrumb.href === '#' ? 'pointer-events-none hover:no-underline' : ''}
                                                            >
                                                                {breadcrumb.label}
                                                            </BreadcrumbLink>
                                                        )}
                                                    </BreadcrumbItem>
                                                    {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                                                </div>
                                            ))}
                                        </BreadcrumbList>
                                    </Breadcrumb>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="bg-muted dark:bg-muted/10 mx-2 rounded-xl rounded-t-none">
                        <main className="mx-auto min-h-[calc(100svh-8rem)] max-w-7xl flex-col gap-8">{children}</main>
                    </div>
                    <div>
                        <DashboardFooter />
                    </div>
                </div>
            </div>
        </div>
    );
}

export { DashboardLayout };
