/** @type {import('tailwindcss').Config} config */
const config = {
  content: ['./index.php', './app/**/*.php', './resources/**/*.{php,vue,js}'],
  theme: {
    screens: {
      sm: '390px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '2.5rem',
        xl: '4.5rem',
        '2xl': '4.5rem',
      },
    },
    extend: {
      colors: {
        'primary': {
          100: '#F2F8FD',
          200: '#CAE3F6',
          300: '#7C96C1',
          400: '#7CB9E4',
          500: '#55A4DB',
          600: '#4489BB',
          700: '#336E9B',
          800: '#22537B',
          900: '#11365A',
        },
        'red': {
          100: '#FCF4F5',
          200: '#F0D3D8',
          300: '#E3B0BA',
          400: '#D68D9C',
          500: '#C96A7E',
          600: '#A65567',
          700: '#834050',
          800: '#602B39',
          900: '#3B1621',
        },
        'bronze': {
          100: '#FAF7EC',
          200: '#F5ECCC',
          300: '#EBD89D',
          400: '#D4A033',
          500: '#C68D2C',
          600: '#AA6F24',
          700: '#885120',
          800: '#623821',
          900: '#381C10',
        },
        'grey': {
          100: '#F8F7F8',
          150: '#EFEFF2',
          200: '#D2D7DE',
          300: '#ACB7C4',
          400: '#8697AA',
          500: '#5E778E',
        },
        'danger': {
          100: '#FFECDD',
          200: '#FFB799',
          300: '#FF6D56',
          400: '#B72B2E',
          500: '#7A1023',
        },
        'warning': {
          100: '#FCF9D2',
          200: '#F1E578',
          300: '#D1BC23',
          400: '#968311',
          500: '#645406',
        },
        'success': {
          100: '#D5FCD2',
          200: '#78F187',
          300: '#23D35B',
          400: '#119756',
          500: '#066549',
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'noto-sans': ['Noto Sans', 'serif'],
      },
      borderRadius: {
        'none': '0',
        'sm': '12px',
        DEFAULT: '16px',
      },
      extend: {}
    },
  },
  plugins: [],
};

export default config;
