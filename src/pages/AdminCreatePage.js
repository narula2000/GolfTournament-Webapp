import React, { useState } from 'react';
import {
  Flex,
  Box,
  Text,
  Heading,
  Input,
  Stack,
  Spinner,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  HStack,
  StackDivider,
  Center,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import { AddIcon } from '@chakra-ui/icons';
import NormalBanner from '../component/NormalBanner';

import firebaseFunction from '../firebase/functions';
import BackButton from '../component/BackButton';
import theme from '../core/theme';

const AdminCreatePage = () => {
  const template = {
    '01': {
      par: 0,
      strokeIndex: 0,
    },
    '02': {
      par: 0,
      strokeIndex: 0,
    },
    '03': {
      par: 0,
      strokeIndex: 0,
    },
    '04': {
      par: 0,
      strokeIndex: 0,
    },
    '05': {
      par: 0,
      strokeIndex: 0,
    },
    '06': {
      par: 0,
      strokeIndex: 0,
    },
    '07': {
      par: 0,
      strokeIndex: 0,
    },
    '08': {
      par: 0,
      strokeIndex: 0,
    },
    '09': {
      par: 0,
      strokeIndex: 0,
    },
    10: {
      par: 0,
      strokeIndex: 0,
    },
    11: {
      par: 0,
      strokeIndex: 0,
    },
    12: {
      par: 0,
      strokeIndex: 0,
    },
    13: {
      par: 0,
      strokeIndex: 0,
    },
    14: {
      par: 0,
      strokeIndex: 0,
    },
    15: {
      par: 0,
      strokeIndex: 0,
    },
    16: {
      par: 0,
      strokeIndex: 0,
    },
    17: {
      par: 0,
      strokeIndex: 0,
    },
    18: {
      par: 0,
      strokeIndex: 0,
    },
  };
  const history = useHistory();
  const adminId = localStorage.getItem('adminId');
  const [name, setName] = useState('');
  const [outPar, setOut] = useState(0);
  const [inPar, setIn] = useState(0);
  const [outSi, setOutSI] = useState(0);
  const [inSi, setInSI] = useState(0);
  const [holes, setHoles] = useState(template);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  const firstCol = ['01', '02', '03', '04', '05', '06'];
  const secondCol = ['07', '08', '09', '10', '11', '12'];
  const thirdCol = ['13', '14', '15', '16', '17', '18'];

  const holeArray = [firstCol, secondCol, thirdCol];

  const handlePar = (event, holeName) => {
    setHoles(() => {
      const data = { ...holes };
      data[holeName].par = Number.isNaN(parseInt(event.target.value, 10))
        ? 0
        : parseInt(event.target.value, 10);
      return data;
    });
  };
  const handleStrokeIndex = (event, holeName) => {
    setHoles(() => {
      const data = { ...holes };
      data[holeName].strokeIndex = Number.isNaN(
        parseInt(event.target.value, 10)
      )
        ? 0
        : parseInt(event.target.value, 10);
      return data;
    });
  };
  const totalCount = () => {
    let outParCount = 0;
    let outSiCount = 0;
    let inParCount = 0;
    let inSiCount = 0;
    let flip = true;
    const keys = Object.keys(holes).sort((a, b) => a - b);
    keys.forEach((key) => {
      if (Number(key) > 9) flip = false;
      if (flip) {
        outParCount += holes[key].par;
        outSiCount += holes[key].strokeIndex;
      } else {
        inParCount += holes[key].par;
        inSiCount += holes[key].strokeIndex;
      }
    });
    setOut(outParCount);
    setOutSI(outSiCount);
    setIn(inParCount);
    setInSI(inSiCount);
  };

  return (
    <Box background="white">
      <Flex direction="column">
        <NormalBanner title="Create Tournament" />
        <Flex bg="white" direction="column">
          <Box mx="20px" my="10px" position="absolute">
            <BackButton history={history} />
          </Box>
          <Center ml="20px">
            <Box
              padding="15px"
              my="20px"
              position="relative"
              background={theme.colors.secondary}
              width="80vw"
              height="auto"
              borderRadius="20px"
              align="center"
              justifyItems="center"
              overflowY="auto"
              justifyContent="center"
            >
              <Input
                placeholder="Tournament Name"
                width="75%"
                background="white"
                borderRadius="10px"
                mx="auto"
                mb="20px"
                onChangeCapture={(event) => setName(event.target.value)}
              />
              <Button
                background="#80D2F1"
                width="auto"
                ml="10px"
                borderRadius="20px"
                color="white"
                leftIcon={<AddIcon />}
                onClick={() => {
                  setIsOpen(true);
                  totalCount();
                }}
              >
                Create Tournament
              </Button>
              <AlertDialog
                motionPreset="slideInBottom"
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
              >
                <AlertDialogOverlay />

                <AlertDialogContent>
                  <AlertDialogHeader>Create Tournament?</AlertDialogHeader>
                  <AlertDialogCloseButton />
                  <AlertDialogBody>
                    <Heading>{name}</Heading>
                    <br />
                    {outPar === 36 ? (
                      <Text color="green">Total Out Par: {outPar}</Text>
                    ) : (
                      <Text color="red">Total Out Par: {outPar}</Text>
                    )}
                    <Text>Total Out Stroke Index: {outSi}</Text>
                    {inPar === 36 ? (
                      <Text color="green">Total In Par: {inPar}</Text>
                    ) : (
                      <Text color="red">Total In Par: {inPar}</Text>
                    )}
                    <Text>Total In Stroke Index: {inSi}</Text>
                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Button ref={cancelRef} colorScheme="red" onClick={onClose}>
                      No
                    </Button>
                    <Button
                      ml={3}
                      disabled={loading}
                      onClick={() => {
                        setLoading(true);
                        firebaseFunction
                          .createTournament(adminId, holes, name)
                          .then(() => {
                            firebaseFunction
                              .fetchRealtimeRank(adminId)
                              .then((result) => {
                                setLoading(false);
                                history.push({
                                  pathname: '/admin/dashboard',
                                  state: { detail: result },
                                });
                              });
                          });
                      }}
                    >
                      {loading ? <Spinner /> : 'Yes'}
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <HStack
                spacing={8}
                align="center"
                justify="center"
                divider={<StackDivider borderColor="grey.200" size="30" />}
              >
                {holeArray.map((column) => (
                  <Stack spacing={3} align="center">
                    <Box bg="white" p="3px" borderRadius="10px">
                      <Stack
                        direction="row"
                        spacing={0}
                        color="white"
                        height="35px"
                      >
                        <Box
                          background={theme.colors.secondary}
                          width="75px"
                          borderTopLeftRadius="7px"
                          borderBottomLeftRadius="7px"
                          py="6px"
                        >
                          <Text>Hole</Text>
                        </Box>
                        <Box
                          width="75px"
                          background={theme.colors.secondary}
                          py="6px"
                        >
                          <Text>Par</Text>
                        </Box>
                        <Box
                          background={theme.colors.secondary}
                          width="120px"
                          borderTopRightRadius="7px"
                          borderBottomRightRadius="7px"
                          px="10px"
                          py="6px"
                        >
                          <Text>Stroke Index</Text>
                        </Box>
                      </Stack>
                    </Box>
                    {column.map((holeNum) => (
                      <Box bg="white" p="3px" borderRadius="10px">
                        <Stack
                          direction="row"
                          spacing={0}
                          key={holeNum}
                          height="40px"
                        >
                          <Box
                            background={theme.colors.background}
                            width="75px"
                            borderTopLeftRadius="7px"
                            borderBottomLeftRadius="7px"
                            py="8px"
                          >
                            <Text>{holeNum}</Text>
                          </Box>
                          <Box
                            background={theme.colors.lightBackground}
                            width="75px"
                          >
                            <Input
                              placeholder="Par"
                              type="text"
                              background="white"
                              height="100%"
                              textAlign="center"
                              verticalAlign="center"
                              borderRadius="0px"
                              onChange={(event) => handlePar(event, holeNum)}
                            />
                          </Box>
                          <Box
                            background={theme.colors.lightBackground}
                            width="120px"
                            borderTopRightRadius="7px"
                            borderBottomRightRadius="7px"
                          >
                            <Input
                              placeholder="Stroke Index"
                              type="text"
                              background="white"
                              height="100%"
                              textAlign="center"
                              verticalAlign="center"
                              borderTopLeftRadius="0px"
                              borderBottomLeftRadius="0px"
                              px="10px"
                              onChange={(event) =>
                                handleStrokeIndex(event, holeNum)
                              }
                            />
                          </Box>
                        </Stack>
                      </Box>
                    ))}
                  </Stack>
                ))}
              </HStack>
            </Box>
          </Center>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AdminCreatePage;
