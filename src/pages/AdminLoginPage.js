import React from 'react';
import { Image, Box, Input, VStack, Text, Button } from '@chakra-ui/react';

import logo from '../assets/golf-logo.png';
import theme from '../core/theme';

const AdminLoginPage = () => (
  <Box>
    <Image
      src={logo}
      boxSize="150px"
      objectFit="cover"
      pos="relative"
      mx="auto"
      mt="30px"
      mb="20px"
    />
    <Box
      bg={theme.styles.colors.secondary}
      color={theme.styles.colors.white}
      borderRadius="20px"
      maxW="400px"
      alignItems="center"
      justifyItems="center"
      textAlign="center"
      p="20px"
      m="auto"
    >
      <VStack spacing="20px">
        <Text fontSize="xl">Admin Login Page</Text>
        <Input type="email" placeholder="Email" maxW="90%" />
        <Input type="password" placeholder="Password" maxW="90%" />
        <Button>Login</Button>
      </VStack>
    </Box>
  </Box>
);
export default AdminLoginPage;
