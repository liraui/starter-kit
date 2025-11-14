import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/layouts/app-sidebar';
import { SidebarFooter } from '@/layouts/sidebar-footer';
import { SidebarHeader } from '@/layouts/sidebar-header';
import type { SidebarLayoutProps } from '@/types/layouts';

function SidebarLayout({ children, ...props }: SidebarLayoutProps) {
    return (
        <div className="bg-background relative w-full">
            <SidebarHeader />
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <div className="bg-sidebar fixed top-12 right-0 left-0 h-12 w-full"></div>
                    <div className="bg-muted border-border/50 sticky top-12 rounded-t-xl border-b px-8 dark:bg-[#0d0d0d]">
                        <div className="mx-auto flex h-16 w-full max-w-7xl shrink-0 items-center gap-2">
                            <SidebarTrigger className="-ml-1" />
                            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
                            {props.breadcrumbs && props.breadcrumbs.length > 0 && (
                                <Breadcrumb>
                                    <BreadcrumbList>
                                        {props.breadcrumbs.map((breadcrumb, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <BreadcrumbItem className={index === 0 ? 'hidden md:block' : ''}>
                                                    {index === props.breadcrumbs.length - 1 ? (
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
                                                {index < props.breadcrumbs.length - 1 && <BreadcrumbSeparator className="hidden md:block" />}
                                            </div>
                                        ))}
                                    </BreadcrumbList>
                                </Breadcrumb>
                            )}
                        </div>
                    </div>
                    <div className="rounded-b-xl px-8">{children}</div>
                </SidebarInset>
            </SidebarProvider>
            <SidebarFooter />
        </div>
    );
}

export { SidebarLayout };
