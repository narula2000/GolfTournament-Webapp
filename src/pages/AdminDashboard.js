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
  const [refreshLoading, setRefreshLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const uId = localStorage.getItem('adminId');
  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push({ pathname: '/admin' });
      });
  };
  const refresh = () => {
    firebaseFunction.fetchRealtimeRank(uId).then((result) => {
      setRefreshLoading(false);
      setDeleteLoading(false);
      history.push({
        pathname: '/admin/dashboard',
        state: { detail: result || {} },
      });
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
        {Object.keys(data).length === 0 ? (
          ''
        ) : (
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
        )}
        <Button
          position="absolute"
          top="50px"
          right="150px"
          background="#80D2F1"
          borderRadius="20px"
          color="white"
          onClick={() => {
            setRefreshLoading(true);
            refresh();
          }}
        >
          {refreshLoading ? <Spinner /> : 'Update Page'}
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
        Object.keys(data).length === 0 ?
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
            <Text color="white" fontSize="26px" lineHeight="70px">
              {' '}
              {data[tournamentId].name}{' '}
            </Text>
            <HStack spacing={5} align="center" justify="center">
              <Stack spacing={3} align="center">
                {Object.keys(data[tournamentId]['000'].holes).map((holeNum) =>
                  holeNum > 9 ? (
                    ''
                  ) : (
                    <Stack direction="row" spacing={3} key={holeNum}>
                      <Box background="white" width="100px">
                        <Text>Hole: {holeNum}</Text>
                      </Box>
                      <Box background="white" width="100px">
                        <Text>
                          Par:{data[tournamentId]['000'].holes[holeNum].par}
                        </Text>
                      </Box>
                      <Box background="white" width="100px">
                        <Text>
                          SI:{' '}
                          {data[tournamentId]['000'].holes[holeNum].strokeIndex}
                        </Text>
                      </Box>
                    </Stack>
                  )
                )}
              </Stack>
              <Stack spacing={3} align="center">
                {Object.keys(data[tournamentId]['000'].holes).map((holeNum) =>
                  holeNum < 10 ? (
                    ''
                  ) : (
                    <Stack direction="row" spacing={3} key={holeNum}>
                      <Box background="white" width="100px">
                        <Text>Hole: {holeNum}</Text>
                      </Box>
                      <Box background="white" width="100px">
                        <Text>
                          Par:{data[tournamentId]['000'].holes[holeNum].par}
                        </Text>
                      </Box>
                      <Box background="white" width="100px">
                        <Text>
                          SI:{' '}
                          {data[tournamentId]['000'].holes[holeNum].strokeIndex}
                        </Text>
                      </Box>
                    </Stack>
                  )
                )}
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
                  onClick={() => {
                    setDeleteLoading(true);
                    firebaseFunction
                      .deleteTournament(uId, tournamentId)
                      .then(() => {
                        refresh();
                      });
                  }}
                >
                  {deleteLoading ? <Spinner /> : 'Delete'}
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
