import React, { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  Image,
  Text,
  Button,
  VStack,
  HStack,
  Stack,
  Container,
  Spacer,
  Spinner,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  StackDivider,
} from '@chakra-ui/react';
import { useHistory, useLocation } from 'react-router-dom';
import firebase from 'firebase/app';
import logo from '../assets/golf-logo.png';
import firebaseFunction from '../firebase/functions';
import 'firebase/auth';

const AdminDashboard = () => {
  const history = useHistory();
  const location = useLocation();
  const [data, setData] = useState(
    location.state === undefined ? {} : location.state.detail
  );

  const [deleteLoading, setDeleteLoading] = useState(false);
  const adminId = localStorage.getItem('adminId');
  const firstNine = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];
  const secondNine = ['10', '11', '12', '13', '14', '15', '16', '17', '18'];
  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem('adminId');
        history.push({ pathname: '/admin' });
      });
  };

  const generateURL = (tournamentId) => {
    const qrData = { adminId: adminId, tournamentId: tournamentId };
    return `https://chart.googleapis.com/chart?cht=qr&chs=250x250&chl=${JSON.stringify(
      qrData
    )}`;
  };

  async function refreshData() {
    setData(
      await firebaseFunction.fetchRealtimeRank(adminId).then((result) => result)
    );
  }

  async function deleteTournamentAndRefresh(tournamentId) {
    await firebaseFunction.deleteTournament(adminId, tournamentId);
    await refreshData();
  }

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <Box background="white">
      <Flex direction="column">
        <Flex background="#CFECC5" width="100%" height="147px">
          {Object.keys(data).length === 0 ? (
            ''
          ) : (
            <Button
              ml="4"
              mt="50"
              background="#80D2F1"
              borderRadius="20px"
              color="white"
              onClick={() => {
                history.push('/admin/create');
              }}
            >
              Create Tournament
            </Button>
          )}
          <Spacer />
          <Box>
            <Button
              mr="4"
              mt="50"
              background="#80D2F1"
              borderRadius="20px"
              color="white"
              onClick={logOut}
            >
              Logout
            </Button>
          </Box>
        </Flex>
        <Image src={logo} position="absolute" left="calc(50% - 131px)" />
        <Box mt="7">
          <VStack>
            {Object.keys(data).length === 0 ? (
              <Container align="center" mt="100">
                <Button
                  width="auto"
                  height="100px"
                  border="3px dashed #7FD661"
                  borderRadius="20px"
                  align="center"
                  background="white"
                  onClick={() => {
                    history.push('/admin/create');
                  }}
                >
                  <Text color="#7FD661" fontSize="28px">
                    Create New Tournament
                  </Text>
                </Button>
                <Text color="rgba(127, 214, 97, 0.48)" fontSize="28px" mt="30">
                  There is no ongoing tournament
                </Text>
              </Container>
            ) : (
              Object.keys(data).map((tournamentId) => (
                <Box
                  key={tournamentId}
                  padding="5"
                  position="relative"
                  background="#7FD661"
                  width="auto"
                  height="auto"
                  mt="20"
                  borderRadius="20px"
                  align="center"
                  justifyItems="center"
                  overflowY="auto"
                  justifyContent="center"
                >
                  <Text color="white" fontSize="26px" mb="5">
                    {' '}
                    {data[tournamentId].name}{' '}
                  </Text>
                  <HStack
                    spacing={5}
                    align="center"
                    justify="center"
                    divider={<StackDivider borderColor="grey.200" size="30" />}
                  >
                    <Stack spacing={3} align="center">
                      {firstNine.map((holeNum) => (
                        <Stack direction="row" spacing={3} key={holeNum}>
                          <Box background="white" width="100px">
                            <Text>Hole: {holeNum}</Text>
                          </Box>
                          <Box background="white" width="100px">
                            <Text>
                              Par:
                              {data[tournamentId]['000'].holes[holeNum].par}
                            </Text>
                          </Box>
                          <Box background="white" width="100px">
                            <Text>
                              SI:{' '}
                              {
                                data[tournamentId]['000'].holes[holeNum]
                                  .strokeIndex
                              }
                            </Text>
                          </Box>
                        </Stack>
                      ))}
                    </Stack>
                    <Stack spacing={3} align="center">
                      {secondNine.map((holeNum) => (
                        <Stack direction="row" spacing={3} key={holeNum}>
                          <Box background="white" width="100px">
                            <Text>Hole: {holeNum}</Text>
                          </Box>
                          <Box background="white" width="100px">
                            <Text>
                              Par:
                              {data[tournamentId]['000'].holes[holeNum].par}
                            </Text>
                          </Box>
                          <Box background="white" width="100px">
                            <Text>
                              SI:{' '}
                              {
                                data[tournamentId]['000'].holes[holeNum]
                                  .strokeIndex
                              }
                            </Text>
                          </Box>
                        </Stack>
                      ))}
                    </Stack>
                    <Stack spacing={3} align="center">
                      <Popover>
                        <PopoverTrigger>
                          <Button
                            width="150px"
                            background="#80D2F1"
                            borderRadius="20px"
                            color="white"
                          >
                            View QR Code
                          </Button>
                        </PopoverTrigger>
                        <Portal>
                          <PopoverContent>
                            <PopoverArrow />
                            <PopoverHeader>
                              QR Code for {data[tournamentId].name}
                            </PopoverHeader>
                            <PopoverCloseButton />
                            <PopoverBody align="center">
                              <Image
                                src={generateURL(tournamentId)}
                                alt="QR Code"
                              />
                            </PopoverBody>
                          </PopoverContent>
                        </Portal>
                      </Popover>
                      <Button
                        width="150px"
                        background="#80D2F1"
                        borderRadius="20px"
                        color="white"
                      >
                        Completed
                      </Button>
                      <Button
                        width="150px"
                        background="#80D2F1"
                        borderRadius="20px"
                        color="white"
                      >
                        Add User
                      </Button>
                      <Popover>
                        <PopoverTrigger>
                          <Button
                            width="150px"
                            colorScheme="red"
                            borderRadius="20px"
                          >
                            Delete
                          </Button>
                        </PopoverTrigger>
                        <Portal>
                          <PopoverContent>
                            <PopoverArrow />
                            <PopoverHeader>
                              Do you want to delete {data[tournamentId].name} ?
                            </PopoverHeader>
                            <PopoverCloseButton />
                            <PopoverBody align="center">
                              <Button
                                width="200px"
                                colorScheme="red"
                                borderRadius="20px"
                                disabled={deleteLoading}
                                onClick={() => {
                                  setDeleteLoading(true);
                                  deleteTournamentAndRefresh(tournamentId).then(
                                    () => {
                                      setDeleteLoading(false);
                                    }
                                  );
                                }}
                              >
                                {deleteLoading ? <Spinner /> : 'Yes'}
                              </Button>
                            </PopoverBody>
                          </PopoverContent>
                        </Portal>
                      </Popover>
                    </Stack>
                  </HStack>
                </Box>
              ))
            )}
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default AdminDashboard;
