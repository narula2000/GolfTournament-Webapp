import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import logo from './assets/logo.svg';
import './assets/App.css';

import AdminLoginPage from './pages/AdminLogin';

function App() {
  return (
    <ChakraProvider>
      <AdminLoginPage />
    </ChakraProvider>
  );
}

export default App;
