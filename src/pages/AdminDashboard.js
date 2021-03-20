import React, { useState } from 'react';
import {
  Flex,
  Box,
  Image,
  Text,
  Button,
  VStack,
  HStack,
  Stack,
  Spinner,
} from '@chakra-ui/react';
import { useHistory, useLocation } from 'react-router-dom';
import firebase from 'firebase/app';
import logo from '../assets/golf-logo.png';
import firebaseFunction from '../firebase/functions';
import 'firebase/auth';

const AdminDashboard = () => {
  const history = useHistory();
  const buttonText = '+ Create New Tournament';
  const backgroundText = 'There is no ongoing tournament';
  const location = useLocation();
  const data = location.state.detail;
  const [loading, setLoading] = useState(false);
  const uId = localStorage.getItem('adminId');
  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push({ pathname: '/admin' });
      });
  };

  return (
    <Box background="white">
      <Flex
        position="absolute"
        background="#CFECC5"
        width="100%"
        height="147px"
      >
        <Button
          position="absolute"
          top="50px"
          left="50px"
          background="#80D2F1"
          borderRadius="20px"
          color="white"
        >
          Create Tournament
        </Button>
        <Button
          position="absolute"
          top="50px"
          right="150px"
          background="#80D2F1"
          borderRadius="20px"
          color="white"
          onClick={() => {
            setLoading(true);
            firebaseFunction.fetchRealtimeRank(uId).then((result) => {
              setLoading(false);
              history.push({
                pathname: '/admin/dashboard',
                state: { detail: result },
              });
            });
          }}
        >
          {loading ? <Spinner /> : 'Update Page'}
        </Button>
        <Button
          position="absolute"
          top="50px"
          right="50px"
          background="#80D2F1"
          borderRadius="20px"
          color="white"
          onClick={logOut}
        >
          Logout
        </Button>
      </Flex>
      <Image src={logo} position="absolute" left="calc(50% - 131px)" />
      <VStack>
        Object.keys(obj).length === 0 ?
        <Button
          position="absolute"
          width="800px"
          height="100px"
          top="260px"
          left="calc(50% - 400px)"
          border="3px dashed #7FD661"
          borderRadius="20px"
          align="center"
          background="white"
          onClick={() => {
            history.push('/admin/create');
          }}
        >
          <Text color="#7FD661" fontSize="28px">
            {buttonText}
          </Text>
        </Button>
        <Text
          color="rgba(127, 214, 97, 0.48)"
          fontSize="28px"
          position="absolute"
          top="400px"
        >
          {backgroundText}
        </Text>
        :
        {Object.keys(data).map((tournamentId) => (
          <Box
            key={tournamentId}
            position="relative"
            background="#7FD661"
            width="70%"
            height="400px"
            left="calc(50% - width/2)"
            top="240px"
            borderRadius="20px"
            align="center"
            justifyItems="center"
            overflowY="auto"
          >
            {console.log(tournamentId)}
            <Text color="white" fontSize="26px" lineHeight="70px">
              {' '}
              {data[tournamentId].name}{' '}
            </Text>
            {Object.keys(data[tournamentId]['000'].holes).map((holeNum) => {
              console.log('hole number ->', holeNum);
              console.log(
                'hole par ->',
                data[tournamentId]['000'].holes[holeNum].par
              );
              return '';
            })}
            <HStack spacing={5} align="center" justify="center">
              <Stack spacing={3} align="center">
                <Stack direction="row" spacing={3}>
                  <Box background="white" width="200px">
                    <Text>Hole 1 Par</Text>
                  </Box>
                  <Box background="white" width="200px">
                    <Text>Hole 1 Stroke Index</Text>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={3}>
                  <Box background="white" width="200px">
                    <Text>Hole 2 Par</Text>
                  </Box>
                  <Box background="white" width="200px">
                    <Text>Hole 2 Stroke Index</Text>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={3}>
                  <Box background="white" width="200px">
                    <Text>Hole 3 Par</Text>
                  </Box>
                  <Box background="white" width="200px">
                    <Text>Hole 3 Stroke Index</Text>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={3}>
                  <Box background="white" width="200px">
                    <Text>Hole 4 Par</Text>
                  </Box>
                  <Box background="white" width="200px">
                    <Text>Hole 4 Stroke Index</Text>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={3}>
                  <Box background="white" width="200px">
                    <Text>Hole 5 Par</Text>
                  </Box>
                  <Box background="white" width="200px">
                    <Text>Hole 5 Stroke Index</Text>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={3}>
                  <Box background="white" width="200px">
                    <Text>Hole 6 Par</Text>
                  </Box>
                  <Box background="white" width="200px">
                    <Text>Hole 6 Stroke Index</Text>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={3}>
                  <Box background="white" width="200px">
                    <Text>Hole 7 Par</Text>
                  </Box>
                  <Box background="white" width="200px">
                    <Text>Hole 7 Stroke Index</Text>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={3}>
                  <Box background="white" width="200px">
                    <Text>Hole 8 Par</Text>
                  </Box>
                  <Box background="white" width="200px">
                    <Text>Hole 8 Stroke Index</Text>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={3}>
                  <Box background="white" width="200px">
                    <Text>Hole 9 Par</Text>
                  </Box>
                  <Box background="white" width="200px">
                    <Text>Hole 9 Stroke Index</Text>
                  </Box>
                </Stack>
              </Stack>
              <Stack spacing={3} align="center">
                <Stack direction="row" spacing={3}>
                  <Box background="white" width="200px">
                    <Text>Hole 10 Par</Text>
                  </Box>
                  <Box background="white" width="200px">
                    <Text>Hole 10 Stroke Index</Text>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={3}>
                  <Box background="white" width="200px">
                    <Text>Hole 11 Par</Text>
                  </Box>
                  <Box background="white" width="200px">
                    <Text>Hole 11 Stroke Index</Text>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={3}>
                  <Box background="white" width="200px">
                    <Text>Hole 12 Par</Text>
                  </Box>
                  <Box background="white" width="200px">
                    <Text>Hole 12 Stroke Index</Text>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={3}>
                  <Box background="white" width="200px">
                    <Text>Hole 13 Par</Text>
                  </Box>
                  <Box background="white" width="200px">
                    <Text>Hole 13 Stroke Index</Text>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={3}>
                  <Box background="white" width="200px">
                    <Text>Hole 14 Par</Text>
                  </Box>
                  <Box background="white" width="200px">
                    <Text>Hole 14 Stroke Index</Text>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={3}>
                  <Box background="white" width="200px">
                    <Text>Hole 15 Par</Text>
                  </Box>
                  <Box background="white" width="200px">
                    <Text>Hole 15 Stroke Index</Text>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={3}>
                  <Box background="white" width="200px">
                    <Text>Hole 16 Par</Text>
                  </Box>
                  <Box background="white" width="200px">
                    <Text>Hole 16 Stroke Index</Text>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={3}>
                  <Box background="white" width="200px">
                    <Text>Hole 17 Par</Text>
                  </Box>
                  <Box background="white" width="200px">
                    <Text>Hole 17 Stroke Index</Text>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={3}>
                  <Box background="white" width="200px">
                    <Text>Hole 18 Par</Text>
                  </Box>
                  <Box background="white" width="200px">
                    <Text>Hole 18 Stroke Index</Text>
                  </Box>
                </Stack>
              </Stack>
              <Stack spacing={3} align="center">
                <Button
                  width="110px"
                  background="#80D2F1"
                  borderRadius="20px"
                  color="white"
                >
                  Completed
                </Button>
                <Button
                  width="110px"
                  background="#80D2F1"
                  borderRadius="20px"
                  color="white"
                >
                  Add User
                </Button>
                <Button
                  width="110px"
                  background="red"
                  borderRadius="20px"
                  color="white"
                >
                  Delete
                </Button>
              </Stack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default AdminDashboard;
