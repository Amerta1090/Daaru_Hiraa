import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                background: "#fff",
                primary: "#00A9FF",
                secondary: "#A0E9FF",
                second: "rgb(209 213 219 / var(--tw-text-opacity))",
                textPrimary: "#000000",
                bgHadir: "#ECFFEE",
                textHadir: "#f87171",
                bgTidakHadir: "#FFD0BE",
                textTidakHadir: "#C24515",
                progress: "#8D8E9B",
                circleProgress: "#FFF501",
            },
        },
    },

    plugins: [forms],
};
