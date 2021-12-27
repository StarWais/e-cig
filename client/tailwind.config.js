module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        accent: '#ff188f',
        header: 'rgba(5,11,38,1)',
      },
      backgroundImage: {
        product: 'url("/product-bg.webp")',
      },
    },
  },
  plugins: [],
};
