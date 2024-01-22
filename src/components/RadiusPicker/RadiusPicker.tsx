import clsx from "clsx";
import * as Slider from "@radix-ui/react-slider";

import {
    TComponent,
} from "@/types";
import {
    ThemeStore, TTheme,
} from "@/store";
import { Translations } from "@/utils";

type TRadiusPickerProps = TComponent & {
	name: keyof TTheme;
};

const MIN = 0;
const MAX = 25;

export default function RadiusPicker ({
    className,
    name,
}: TRadiusPickerProps) {
    const {
        theme,
        setValue,
    } = ThemeStore();

    const onChange = (radius: number) => {
        let newRadius = radius;

        if (name === "--radius-button" && newRadius >= MAX) {
            newRadius = 9999;
        }

        setValue(name, String(newRadius));
    };

    return (
        <div className="grid grid-cols-2 items-center gap-x-2">
            <span className="text-left text-sm">
                {Translations[name]}
            </span>

            <div className="flex gap-x-4">
                <Slider.Root
                    className={clsx("relative flex w-full touch-none select-none items-center", className)}
                    max={MAX}
                    min={MIN}
                    step={1}
                    value={[Number(theme[name])]}
                    onValueChange={(value) => onChange(value[0])}
                >
                    <Slider.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-light">
                        <Slider.Range className="absolute h-full bg-primary" />
                    </Slider.Track>

                    <Slider.Thumb className="block h-4 w-4 cursor-pointer rounded-full border border-light bg-white shadow transition-colors disabled:pointer-events-none disabled:opacity-50" />
                </Slider.Root>

                <div className="relative inline-flex">
                    <input
                        className="w-28 rounded border border-light bg-white py-2 pl-4 pr-8 pt-2.5 text-sm text-black shadow-inner"
                        max={MAX}
                        min={MIN}
                        type="number"
                        value={theme[name]}
                        onChange={(e) => onChange(Number(e.target.value))}
                    />

                    <span className="pointer-events-none absolute right-3 top-1/2 mt-px -translate-y-1/2 text-faded">
                        px
                    </span>
                </div>
            </div>
        </div>
    );
}