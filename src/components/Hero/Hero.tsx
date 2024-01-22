import clsx from "clsx";
import { TComponent } from "@/types";

type THeroProps = TComponent & {
  title?: string;
  description?: string;
};

export default function Hero ({
    className,
    title = "Cookiebot Beautiful Banner",
    description = "Configure the styling of the custom Cookiebot banner to match the brand of the website. First tweak the values and then copy the code to Cookiebot.",
}: THeroProps) {
    return (
        <header className={clsx("pb-4 pt-8 md:pb-8 md:pt-12 lg:pb-12", className)}>
            <div className="flex flex-col items-start gap-y-3 2xl:container">
                <h1 className="max-w-prose bg-gradient-to-tl from-black to-dark-faded bg-clip-text text-4xl font-bold leading-tight tracking-tight text-transparent md:text-5xl">
                    {title}
                </h1>

                <p className="max-w-prose text-lg text-faded">
                    {description}
                </p>
            </div>
        </header>
    );
}