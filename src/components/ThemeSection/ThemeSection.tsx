import clsx from "clsx";
import { TComponent } from "@/types";

type TThemeSectionProps = TComponent & {
	title: string;
};

export default function ThemeSection ({
    className,
    title,
    children,
}: TThemeSectionProps) {
    return (
        <div className={clsx("flex flex-col gap-y-3", className)}>
            <h3 className="border-b border-b-light pb-1 text-lg font-bold text-faded md:text-xl">
                {title}
            </h3>

            <div className="flex flex-col gap-y-6">
                {children}
            </div>
        </div>
    );
}