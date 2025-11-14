import '../css/app.css';

import { initializeTheme } from '@/hooks/use-appearance';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const packagePages = {
    ...import.meta.glob('@auth/pages/**/*.tsx'),
};

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => {
        const [namespace, namespaceFilename] = name.includes('::') ? name.split('::') : [null, name];

        if (namespace) {
            const [vendorName, vendorPackageName] = namespace.split('-');
            const packagePath = `/vendor/${vendorName}/${vendorPackageName}/resources/js/pages/${namespaceFilename}.tsx`;

            return resolvePageComponent(packagePath, packagePages);
        }

        return resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx'));
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <StrictMode>
                <App {...props} />
            </StrictMode>,
        );
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();
