/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                bobble: {
                    "0%": { transform: "scale(0.7,0.7)"},
                    "20%": { transform: "scale(1.1,0.8)"},
                    "30%": { transform: "scale(0.8,1)"},
                    "50%": { transform: "scale(1.1,0.9)"},
                    "70%": { transform: "scale(0.9,1)"},
                    "90%": { transform: "scale(1,0.9)"},
                    "100%": { transform: "scale(1,1)"}
                },
            },
            animation: {
                bobble: "bobble 400ms ease-out",
            },
        },
    },
    plugins: [],
};
