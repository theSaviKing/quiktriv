import type { Config } from "tailwindcss";
import daisyui, { type Config as DaisyUIConfig } from "daisyui";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Lato", ...defaultTheme.fontFamily.sans],
                display: ["Karla", ...defaultTheme.fontFamily.serif],
            },
        },
    },
    plugins: [daisyui],
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")["sunset"], // Start with the "sunset" theme
                    "color-scheme": "light",
                    neutral: "oklch(92% 0.019 237.69)",
                    "neutral-content": "oklch(20% 0.019 237.69)",
                    "base-100": "oklch(96% 0.019 237.69)",
                    "base-200": "oklch(94% 0.019 237.69)",
                    "base-300": "oklch(92% 0.019 237.69)",
                    "base-content": "#3a4b5a",
                    info: "#56cfe1",
                    success: "#5bc77b",
                    warning: "#f4a261",
                    error: "#ff7073",
                    "--rounded-box": "0.5rem",
                    "--rounded-btn": "0.25rem",
                    "--rounded-badge": "0.95rem",
                    "--tab-radius": "0.25rem",
                },
            },
            "sunset",
        ],
        darkTheme: "sunset",
    } satisfies DaisyUIConfig,
    darkMode: "selector",
} satisfies Config;

// sunset: {
//     "color-scheme": "dark",
//     "primary": "#FF865B",
//     "secondary": "#FD6F9C",
//     "accent": "#B387FA",
//     "neutral": "oklch(26% 0.019 237.69)",
//     "neutral-content": "oklch(70% 0.019 237.69)",
//     "base-100": "oklch(22% 0.019 237.69)",
//     "base-200": "oklch(20% 0.019 237.69)",
//     "base-300": "oklch(18% 0.019 237.69)",
//     "base-content": "#9fb9d0",
//     "info": "#89e0eb",
//     "success": "#addfad",
//     "warning": "#f1c891",
//     "error": "#ffbbbd",
//     "--rounded-box": "1.2rem",
//     "--rounded-btn": "0.8rem",
//     "--rounded-badge": "0.4rem",
//     "--tab-radius": "0.7rem",
//   },
