import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import styles from './styles';

const overrides = {
  colors,
  styles,
};

export default extendTheme(overrides);
