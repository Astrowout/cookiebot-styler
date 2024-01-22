import clsx from "clsx";
import { TComponent } from "@/types";
import {
    ColorPicker, RadiusPicker, ThemeSection,
} from "@/components";
import { Presets } from "../Presets";

type TThemeProps = TComponent;

export default function Theme ({
    className,
}: TThemeProps) {
    const subtitleClassNames = "text-primary px-2 py-1 rounded bg-primary/10 mb-3 font-bold";
    const itemsClassNames = "flex flex-col gap-y-4 pl-2";

    return (
        <div className={clsx("flex flex-col gap-y-6", className)}>
            <ThemeSection title="Presets">
                <Presets />
            </ThemeSection>

            <ThemeSection title="Colors">
                <div>
                    <h3 className={subtitleClassNames}>
                        General
                    </h3>

                    <div className={itemsClassNames}>
                        <ColorPicker name="--color-base" />

                        <ColorPicker name="--color-contrast" />

                        <ColorPicker name="--color-shade" />

                        <ColorPicker name="--color-interactive" />

                        <ColorPicker name="--color-banner-border" />
                    </div>
                </div>

                <div>
                    <h3 className={subtitleClassNames}>
                        Toggle
                    </h3>

                    <div className={itemsClassNames}>
                        <ColorPicker name="--color-toggle-off" />

                        <ColorPicker name="--color-toggle-on" />
                    </div>
                </div>

                <div>
                    <h3 className={subtitleClassNames}>
                        Links
                    </h3>

                    <div className={itemsClassNames}>
                        <ColorPicker name="--color-link" />

                        <ColorPicker name="--color-link-hover" />
                    </div>
                </div>

                <div>
                    <h3 className={subtitleClassNames}>
                        Buttons
                    </h3>

                    <div className={itemsClassNames}>
                        <ColorPicker name="--color-button-primary-text" />

                        <ColorPicker name="--color-button-primary" />

                        <ColorPicker name="--color-button-primary-hover" />

                        <ColorPicker name="--color-button-secondary-text" />

                        <ColorPicker name="--color-button-secondary-border" />

                        <ColorPicker name="--color-button-secondary-hover" />
                    </div>
                </div>
            </ThemeSection>

            <ThemeSection title="Corners">
                <div className={itemsClassNames}>
                    <RadiusPicker name="--radius-banner" />

                    <RadiusPicker name="--radius-button" />
                </div>
            </ThemeSection>
        </div>
    );
}