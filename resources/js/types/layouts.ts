import { PropsWithChildren } from 'react';

export interface AppLayoutProps extends PropsWithChildren {}

export interface DashboardLayoutProps extends PropsWithChildren {}

export interface SubHeaderProps extends PropsWithChildren {
    title: string;
}
