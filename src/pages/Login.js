import React, { useState } from 'react';
import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';
import { Image, Box, Input, VStack, Text, Button } from '@chakra-ui/react';
import logo from '../assets/golf-logo.png';
import theme from '../core/theme';
import styles from '../core/theme/styles';
import 'firebase/auth';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailValidator = (_email) => {
    const regex = /\S+@\S+\.\S+/;
    if (!_email || _email.length <= 0) return 'Email cannot be empty.';
    if (!regex.test(_email)) return 'Ooops! We need a valid email address.';
    return '';
  };

  const passwordValidator = (_password) => {
    if (!_password || _password.length <= 0) return 'Password cannot be empty.';
    if (_password.length <= 5) return 'Password must be at least 6 characters.';
    return '';
  };

  const loginAdmin = () => {
    const emailError = emailValidator(email);
    const passwordError = passwordValidator(password);

    if (emailError || passwordError) {
      alert(`${emailError} ${passwordError}`);
      return;
    }
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(history.push('/admin/dashboard'))
      .catch((err) => alert(err));
  };

  return (
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
          <Input
            background="white"
            type="text"
            placeholder="Email"
            maxW="90%"
            onChangeCapture={(event) => setEmail(event.target.value)}
          />
          <Input
            background="white"
            type="password"
            placeholder="Password"
            maxW="90%"
            onChangeCapture={(event) => setPassword(event.target.value)}
          />
          <Button
            bg={styles.colors.primary}
            color="white"
            borderRadius="20px"
            width="140px"
            p="10px"
            onClick={loginAdmin}
          >
            Login
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};
export default Login;
