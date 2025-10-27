import { cn } from '@/lib/utils';

export interface LogoProps {
    className?: string;
    variant?: 'primary';
    size?: 'sm' | 'md' | 'lg';
    withText?: boolean;
    alt?: string;
}

export function Logo({ className, variant = 'primary', size = 'md', withText = false, alt = 'Lira logo' }: LogoProps) {
    const sizeMap = {
        sm: { width: 16, height: 16, gap: 'gap-2', textSize: 'text-sm' },
        md: { width: 20, height: 20, gap: 'gap-3', textSize: 'text-base' },
        lg: { width: 32, height: 32, gap: 'gap-4', textSize: 'text-lg' },
    };

    const { width, height, gap, textSize } = sizeMap[size];

    const variantClassNames = {
        primary: 'text-primary',
    };

    return (
        <div className={cn('flex items-center', gap)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                viewBox="0 0 20 20"
                className={cn(variantClassNames[variant], className)}
                fill="none"
                aria-hidden={withText ? 'true' : 'false'}
                role={!withText ? 'img' : undefined}
                aria-label={!withText ? alt : undefined}
            >
                <g>
                    <path
                        d="M14.1696 18.3333C11.6389 18.3333 8.45877 16.7245 5.86845 14.1341C1.82976 10.0943 0.480744 5.11462 2.79813 2.79619C3.53538 2.05742 4.58531 1.66667 5.82871 1.66667C8.36047 1.66667 11.5406 3.27655 14.1309 5.86798C18.1686 9.90675 19.5165 14.8864 17.2012 17.2049C16.464 17.9436 15.4151 18.3333 14.1696 18.3333ZM5.82975 3.06294C4.95028 3.06294 4.26113 3.30468 3.78427 3.78296C2.0797 5.48766 3.48623 9.7765 6.85459 13.1463C9.19184 15.4845 11.9955 16.9381 14.1696 16.9381C15.0501 16.9381 15.7382 16.6964 16.2161 16.2181C17.9218 14.5124 16.5142 10.2246 13.1458 6.85475C10.8086 4.51548 8.00491 3.06294 5.82975 3.06294Z"
                        className="fill-current"
                    />
                    <path
                        d="M5.82952 18.3333C4.58613 18.3333 3.5362 17.9436 2.79894 17.2049C0.480514 14.8864 1.82953 9.90675 5.86926 5.86694C8.45959 3.27655 11.6397 1.66667 14.1704 1.66667C15.4159 1.66667 16.4638 2.05742 17.2031 2.79619C19.5184 5.11254 18.1694 10.0933 14.1328 14.1341C11.5414 16.7245 8.36024 18.3333 5.82952 18.3333ZM14.1694 3.0619C11.9953 3.0619 9.19161 4.51548 6.85436 6.85371C3.486 10.2246 2.08051 14.5134 3.78404 16.2181C4.2609 16.6953 4.95005 16.9381 5.82952 16.9381C8.00468 16.9381 10.8073 15.4845 13.1456 13.1463C16.514 9.77546 17.9184 5.48557 16.2149 3.78192C15.737 3.30468 15.0489 3.0619 14.1694 3.0619Z"
                        className="fill-current"
                    />
                </g>
                <defs>
                    <clipPath>
                        <rect width="20" height="20" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            {withText && <span className={cn('font-semibold', textSize)}>Kit</span>}
        </div>
    );
}
