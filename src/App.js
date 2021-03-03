import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './assets/App.css';

import MyRouter from './router';

function App() {
  return (
    <ChakraProvider>
      <MyRouter />
    </ChakraProvider>
  );
}

export default App;
