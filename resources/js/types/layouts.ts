import { PropsWithChildren } from 'react';

export interface AppLayoutProps extends PropsWithChildren {}

export interface DashboardLayoutProps extends PropsWithChildren {}

export interface SidebarLayoutProps extends PropsWithChildren {
    breadcrumbs: Breadcrumb[];
}

export interface Breadcrumb {
    label: string;
    href?: string;
}
export interface SubHeaderProps extends PropsWithChildren {
    title: string;
}
