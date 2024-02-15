/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: ['./resources/**/*.{html,tsx,blade.php}'],
  theme: {
    colors: {
      'success': colors.green[500],
      'success-hover': colors.green[600],

      'warning': colors.yellow[500],
      'warning-hover': colors.yellow[600],

      'error': colors.red[500],
      'error-hover': colors.red[600],

      'primary': colors.slate[700],
      'primary-hover': colors.slate[900],
      'primary-light': colors.slate[100],

      'secondary': colors.slate[300],
      'secondary-hover': colors.slate[400],

      'tertiary': colors.slate[500],
      'tertiary-hover': colors.slate[600],

      'typo-primary': colors.slate[900],
      'typo-primary-hover': colors.slate[700],

      'typo-secondary': colors.slate[100],
      'typo-secondary-hover': colors.slate[300],

      'typo-tertiary': colors.slate[500],

      'button-primary': colors.slate[500],
      'button-primary-hover': colors.slate[600],

      'button-secondary': colors.slate[100],
      'button-secondary-hover': colors.slate[300],

      white: colors.white,
    },
    extend: {},
  },
  plugins: [],
}

