import clsx from "clsx";
import {
    TComponent, TCta,
} from "@/types";
import { ThemeStore } from "@/store";

type TPresetsProps = TComponent & {
	text?: string;
	cta?: TCta;
};

export default function Presets ({
    className,
}: TPresetsProps) {
    const { setPreset } = ThemeStore();
    const buttonClassNames = "flex items-center justify-center px-4 py-2 rounded font-bold transition-opacity hover:opacity-80";

    return (
        <div className={clsx("flex flex-wrap gap-3", className)}>
            <button
                className={clsx("border border-primary bg-white text-primary", buttonClassNames)}
                onClick={() => setPreset("default")}
            >
                Default
            </button>

            <button
                className={clsx("bg-pink-600 text-white", buttonClassNames)}
                onClick={() => setPreset("barbie")}
            >
                Barbie
            </button>

            <button
                className={clsx("bg-orange-950 text-white", buttonClassNames)}
                onClick={() => setPreset("oppenheimer")}
            >
                Oppenheimer
            </button>

            <button
                className={clsx("bg-[#00b0f0] text-white", buttonClassNames)}
                onClick={() => setPreset("henchman")}
            >
                Henchman
            </button>
        </div>
    );
}