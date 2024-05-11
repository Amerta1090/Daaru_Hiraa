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
                primary: "#30376D",
                textPrimary: "#FAFDFF",
                bgHadir: "#ECFFEE",
                textHadir: "#00B112",
                bgTidakHadir: "#FFD0BE",
                textTidakHadir: "#C24515",
                progress: "#8D8E9B",
                circleProgress: "#FFF501",
            },
        },
    },

    plugins: [forms],
};
