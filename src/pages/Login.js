import React, { useState } from 'react';
import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';
import {
  Image,
  Box,
  Input,
  VStack,
  Text,
  Button,
  Spinner,
} from '@chakra-ui/react';

import logo from '../assets/golf-logo.png';
import theme from '../core/theme';

import 'firebase/auth';
import firebaseFunction from '../firebase/functions';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    if (emailError || passwordError) {
      alert(`${emailError} ${passwordError}`);
      return;
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        firebaseFunction
          .fetchRealtimeRank(localStorage.getItem('adminId'))
          .then((result) => {
            setLoading(false);
            history.push({
              pathname: '/admin/dashboard',
              state: { detail: result || {} },
            });
          });
      });
  };

  return (
    <Box bg={theme.colors.background} borderRadius="20px" p="30px" minH="100vh">
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
        bg={theme.colors.secondary}
        borderRadius="20px"
        maxW="400px"
        align="center"
        justify="center"
        textAlign="center"
        p="20px"
        mx="auto"
        my="20px"
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
            bg={theme.colors.primary}
            color="white"
            borderRadius="20px"
            width="140px"
            p="10px"
            disabled={loading}
            onClick={loginAdmin}
          >
            {loading ? <Spinner /> : 'Log in'}
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};
export default Login;
