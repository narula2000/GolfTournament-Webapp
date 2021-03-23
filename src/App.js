import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './assets/styles/App.css';
import theme from './core/theme';
import MyRouter from './router';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MyRouter />
    </ChakraProvider>
  );
}

export default App;
