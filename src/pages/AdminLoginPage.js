import React from 'react';
import { Image, Box, Input, VStack, Text, Button } from '@chakra-ui/react';

import logo from '../assets/golf-logo.png';
import theme from '../core/theme';
import styles from '../core/theme/styles';

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
      borderRadius="20px"
      maxW="400px"
      alignItems="center"
      justifyItems="center"
      textAlign="center"
      p="20px"
      m="auto"
    >
      <VStack spacing="20px">
        <Text fontSize="xl" color="white">
          Admin Login Page
        </Text>
        <Input background="white" type="email" placeholder="Email" maxW="90%" />
        <Input
          background="white"
          type="password"
          placeholder="Password"
          maxW="90%"
        />
        <Button
          bg={styles.colors.primary}
          color="white"
          borderRadius="20px"
          width="140px"
          p="10px"
        >
          Login
        </Button>
      </VStack>
    </Box>
  </Box>
);
export default AdminLoginPage;
