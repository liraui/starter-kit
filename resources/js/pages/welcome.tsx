import { AppLayout } from '@/components/layouts/app';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, BookTextIcon } from 'lucide-react';

export default function Welcome() {
    return (
        <div className="relative mt-32 flex flex-col gap-16">
            <div className="mx-auto flex flex-col gap-8 text-center">
                <h1 className="text-primary mx-auto max-w-xl text-center text-5xl font-extrabold">A kit for your modern Laravel applications</h1>
                <p className="text-muted-foreground max-w-3xl text-2xl">A simple start to building your next Laravel + React application</p>
                <div className="mx-auto flex gap-2">
                    <Button>
                        <a href="https://liraui.com/docs">Review docs</a>
                    </Button>
                    <Button variant="outline">
                        <a href="https://liraui.com/features">See features</a>
                        <ArrowRightIcon />
                    </Button>
                </div>
            </div>
            <div className="relative">
                <span className="font-source-code relative bottom-3 left-10 m-auto border border-b-0 p-2 text-xs font-medium">
                    <BookTextIcon size={16} className="mr-2 inline-block" />
                    Documentation package
                </span>
                <div className="outline-border bg-muted mb-4 rounded-t-xl border p-1 outline outline-offset-6">
                    <div className="bg-background relative aspect-video overflow-hidden rounded-t-xl">
                        <div className="bg-muted/25 absolute h-full w-full" />
                        <img src="/images/light/full-docs.png" className="block dark:hidden" alt="Documentation package" />
                        <img src="/images/dark/full-docs.png" className="hidden dark:block" alt="Documentation package" />
                        <div className="absolute inset-0 top-32 z-20 flex items-start justify-center sm:top-40 xl:top-56 2xl:top-72">
                            <div className="rounded-full bg-linear-to-br from-transparent from-10% to-yellow-500 p-0.5">
                                <Button size={'lg'} className="rounded-full shadow-xl">
                                    <a href="https://github.com/liraui/docs">View package</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="to-background pointer-events-none absolute inset-0 bottom-0 z-10 scale-102 rounded-t-xl bg-linear-to-b from-transparent via-transparent via-75% to-95%"></div>
            </div>
        </div>
    );
}

Welcome.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;
