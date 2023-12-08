/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                elusivePrimary: '#775b2c',
                elusiveSecondary: '#f9f6f8',
                elusiveDark: '#191b17',
            },
            fontFamily: {
                display: ['Nova Square'],
                body: ['Maven Pro'],
            },
        },
    },
    plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
