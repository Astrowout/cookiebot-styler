import clsx from "clsx";
import {
    HexColorPicker, HexColorInput,
} from "react-colorful";
import * as Popover from "@radix-ui/react-popover";

import { TComponent } from "@/types";
import {
    ThemeStore, TTheme,
} from "@/store";
import { Translations } from "@/utils";

type TColorPickerProps = TComponent & {
	name: keyof TTheme;
};

export default function ColorPicker ({
    className,
    name,
}: TColorPickerProps) {
    const {
        theme, setValue,
    } = ThemeStore();

    const onChange = (color: string) => {
        setValue(name, color);
    };

    return (
        <Popover.Root>
            <div className="grid grid-cols-2 items-center gap-x-2">
                <span className="text-left text-sm">
                    {Translations[name]}
                </span>

                <div className="flex items-center gap-x-3">
                    <div className="relative inline-flex justify-self-start">
                        <span className="pointer-events-none absolute left-3 top-1/2 mt-px -translate-y-1/2 text-faded">
                            #
                        </span>

                        <HexColorInput
                            className="w-28 rounded border border-light bg-white py-2 pl-8 pt-2.5 text-sm text-black shadow-inner"
                            color={String(theme[name])}
                            onChange={onChange}
                        />
                    </div>

                    <Popover.Trigger className="flex">
                        <span
                            className="h-8 w-8 rounded-full border-2 border-white shadow-lg"
                            style={{ backgroundColor: theme[name] as string }}
                        />
                    </Popover.Trigger>
                </div>
            </div>

            <Popover.Portal className={clsx("flex flex-col", className)}>
                <Popover.Content
                    align="center"
                    className="z-10 bg-white shadow-xl outline-none will-change-[transform,opacity] data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade"
                    side="bottom"
                    sideOffset={12}
                >
                    <HexColorPicker
                        color={String(theme[name])}
                        onChange={onChange}
                    />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
}