// Create zustand store
import { create } from "zustand";

export type TTheme = {
    // General
    "--color-base": string;
    "--color-contrast": string;
    "--color-shade": string;
    "--color-interactive": string;
    "--color-banner-border": string;

    // Toggle
    "--color-toggle-off": string;
    "--color-toggle-on": string;

    // Links
    "--color-link": string;
    "--color-link-hover": string;

    // Buttons
    "--color-button-primary-text": string;
    "--color-button-primary": string;
    "--color-button-primary-hover": string;
    "--color-button-secondary-text": string;
    "--color-button-secondary-border": string;
    "--color-button-secondary-hover": string;

    // Corners
    "--radius-banner": string;
    "--radius-button": string;
}

type TThemeStore = {
    theme: TTheme;
    setValue: (name: keyof TTheme, value: string) => void;
    setPreset: (name: keyof typeof themes) => void;
};

const defaultTheme: TTheme = {
    // General
    "--color-base": "#ffffff",
    "--color-contrast": "#000000",
    "--color-shade": "#eeeeee",
    "--color-interactive": "#000000",
    "--color-banner-border": "#60a5fa",

    // Toggle
    "--color-toggle-off": "#cdcdcd",
    "--color-toggle-on": "#1d4ed8",

    // Links
    "--color-link": "#000000",
    "--color-link-hover": "#1d4ed8",

    // Buttons
    "--color-button-primary-text": "#ffffff",
    "--color-button-primary": "#1d4ed8",
    "--color-button-primary-hover": "#60a5fa",
    "--color-button-secondary-text": "#1d4ed8",
    "--color-button-secondary-border": "#1d4ed8",
    "--color-button-secondary-hover": "#60a5fa",

    // Corners
    "--radius-banner": "8",
    "--radius-button": "6",
};

const barbieTheme: TTheme = {
    // General
    "--color-base": "#ff69b4", // Barbie Pink
    "--color-contrast": "#000000",
    "--color-shade": "#eeeeee",
    "--color-interactive": "#000000",
    "--color-banner-border": "#ff69b4",

    // Toggle
    "--color-toggle-off": "#cdcdcd",
    "--color-toggle-on": "#ffffff",

    // Links
    "--color-link": "#000000",
    "--color-link-hover": "#ffffff",

    // Buttons
    "--color-button-primary-text": "#ff69b4",
    "--color-button-primary": "#ffffff",
    "--color-button-primary-hover": "#eeeeee",
    "--color-button-secondary-text": "#ffffff",
    "--color-button-secondary-border": "#ffffff",
    "--color-button-secondary-hover": "#eeeeee",

    // Corners
    "--radius-banner": "16",
    "--radius-button": "9999",
};

const oppenheimerTheme: TTheme = {
    // General
    "--color-base": "#7c2d12", // Oppenheimer Red
    "--color-contrast": "#ffffff",
    "--color-shade": "#eeeeee",
    "--color-interactive": "#ffffff",
    "--color-banner-border": "#7c2d12", // Oppenheimer Red

    // Toggle
    "--color-toggle-off": "#cdcdcd",
    "--color-toggle-on": "#ffffff",

    // Links
    "--color-link": "#ffffff",
    "--color-link-hover": "#ffffff",

    // Buttons
    "--color-button-primary-text": "#7c2d12", // Oppenheimer Red
    "--color-button-primary": "#ffffff",
    "--color-button-primary-hover": "#eeeeee",
    "--color-button-secondary-text": "#ffffff",
    "--color-button-secondary-border": "#ffffff",
    "--color-button-secondary-hover": "#eeeeee",

    // Corners
    "--radius-banner": "0",
    "--radius-button": "0",
};

const themes = {
    default: defaultTheme,
    barbie: barbieTheme,
    oppenheimer: oppenheimerTheme,
};

export const ThemeStore = create<TThemeStore>((set) => ({
    theme: themes.default,
    setValue: (name, value) => set((state) => ({
        theme: {
            ...state.theme,
            [name]: value,
        },
    })),
    setPreset: (name) => set({
        theme: themes[name],
    }),
}));