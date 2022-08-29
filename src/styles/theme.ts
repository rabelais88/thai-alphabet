import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
};

const theme = extendTheme({
  styles: {
    global: {
      'html, body, #root': {
        width: '100%',
        minHeight: '100vh',
      },
    },
  },
  semanticTokens: {},
  breakpoints,
});

export default theme;
