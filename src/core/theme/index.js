import { extendTheme } from '@chakra-ui/react';

const colors = {
  white: 'white',
  primary: '#80D2F1',
  secondary: '#7FD661',
  error: '#f13a59',
  background: '#CFECC5',
};

const overrides = {
  colors,
  styles: {
    global: {
      body: {
        // bg: colors.background,
      },
    },
  },
};

export default extendTheme(overrides);
