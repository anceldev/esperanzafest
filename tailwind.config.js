import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
				opensans: ['Open Sans Variable', ...defaultTheme.fontFamily.sans],
			},
			backgroundImage: {
				'valladolid': "url('/public/images/background-valladolid.webp')",
        'form': "url('/public/images/bg-form.webp')",
			},
    },
    colors: {
      'white': '#ffffff',
			'darkBlue': '#03024c',
			'btn-purple': '#463dc0',
			'wakanda': '#0D1B1E',
			'passire': '#2176FF',
			'vibrantOrange': '#ED6936',
    }
  },
  plugins: [],
}

