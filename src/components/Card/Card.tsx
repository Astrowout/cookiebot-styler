import clsx from "clsx";
import { TComponent } from "@/types";

type TCardProps = TComponent & {
	title: string;
	number?: number;
	description?: string;
};

export default function Card ({
    className,
    children,
    title,
    number,
    description,
}: TCardProps) {
    return (
        <section className={clsx("flex flex-col gap-y-6 rounded-xl border border-light bg-white px-6 py-5 shadow-xl shadow-faded/5", className)}>
            <div className="flex flex-col gap-y-3">
                <header className="flex items-center gap-x-4">
                    {number && (
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                            {number}
                        </div>
                    )}

                    <h2 className="text-2xl font-bold text-black md:text-3xl">
                        {title}
                    </h2>
                </header>

                {description && (
                    <p className="max-w-prose text-base text-faded">
                        {description}
                    </p>
                )}
            </div>

            <div>
                {children}
            </div>
        </section>
    );
}