import postcssFontDisplay from 'postcss-font-display';
import tailwindPostcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';
import postcssReplace from 'postcss-replace';

export default {
  plugins: [
    postcssFontDisplay({ display: 'swap' }),
    tailwindPostcss,
    autoprefixer,
    postcssReplace({
      pattern: /font-display\s*:\s*block/g,
      replace: () => 'font-display: swap'
    }),
  ]
};
