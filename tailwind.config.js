import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
        },
        fontFamily: {
            sans: [
                "Inter",
                ...defaultTheme.fontFamily.sans,
            ],
        },
        keyframes: {
            slideUpAndFade: {
                from: {
                    opacity: 0,
                    transform: "translateY(2px)",
                },
                to: {
                    opacity: 1,
                    transform: "translateY(0)",
                },
            },
            slideRightAndFade: {
                from: {
                    opacity: 0,
                    transform: "translateX(-2px)",
                },
                to: {
                    opacity: 1,
                    transform: "translateX(0)",
                },
            },
            slideDownAndFade: {
                from: {
                    opacity: 0,
                    transform: "translateY(-2px)",
                },
                to: {
                    opacity: 1,
                    transform: "translateY(0)",
                },
            },
            slideLeftAndFade: {
                from: {
                    opacity: 0,
                    transform: "translateX(2px)",
                },
                to: {
                    opacity: 1,
                    transform: "translateX(0)",
                },
            },
        },
        animation: {
            slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
            slideRightAndFade: "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
            slideDownAndFade: "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
            slideLeftAndFade: "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        },
        extend: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                primary: "#1d4ed8",
                black: "#020617",
                dark: "#0f172a",
                "dark-faded": "#3a4a5f",
                faded: "#64748b",
                neutral: "#f8fafc",
                white: "#ffffff",
                light: "#e2e8f0",
            },
        },
    },
    plugins: [],
};

