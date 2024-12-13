/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
		center: true,
		padding: "15px",
	},
	screens: {
		sm: "640px",
		md: "768px",
		lg: "960px",
		xl: "1200px",
	},
	fontFamily: {
		primary: "var(--font-jetbrainsMono)",
	},
  	extend: {
  		colors: {
			primary: "#1c1c22",
			accent: {
				DEFAULT: "#cc85ff",
				hover: "#a238ee"
			},
			accent1: {
				DEFAULT: "#ff83f4",
				hover: "#f01cdd"
			},
			accent2: {
				DEFAULT: "#fff78b",
				hover: "#ffed00"
			},
			accent3: {
				DEFAULT: "#92e0ff",
				hover: "#00daf2"
			},
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: '0.5rem',
  			md: 'calc(0.5rem - 2px)',
  			sm: 'calc(0.5rem - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
