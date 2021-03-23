import React, { useState } from 'react';
import {
  Flex,
  Box,
  Image,
  Text,
  Heading,
  InputGroup,
  InputLeftAddon,
  Input,
  Stack,
  Spacer,
  Spinner,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import logo from '../assets/golf-logo.png';
import firebaseFunction from '../firebase/functions';

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
  const uId = localStorage.getItem('adminId');
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
        <Flex background="#CFECC5" width="100%" height="147px" />
        <Image src={logo} position="absolute" left="calc(50% - 131px)" />
        <Box mt="7">
          <Flex direction="row">
            <Box
              background="#7FD661"
              width="auto"
              height="auto"
              padding="5"
              borderRadius="20px"
              align="center"
              overflowY="auto"
              ml="20"
            >
              <Text color="white" fontSize="26px" lineHeight="70px">
                {' '}
                Create Tournament{' '}
              </Text>
              <Stack spacing={3} align="center">
                <Input
                  placeholder="Tournament Name"
                  width="auto"
                  background="white"
                  border="3px solid #BBBBBB"
                  onChangeCapture={(event) => setName(event.target.value)}
                />
                <InputGroup width="auto">
                  <Stack direction="row" spacing={4} align="center">
                    <InputGroup>
                      <InputLeftAddon>Hole 1</InputLeftAddon>
                      <Input
                        placeholder="Par"
                        type="text"
                        background="white"
                        border="3px solid #BBBBBB"
                        onChange={(event) => handlePar(event, '01')}
                      />
                    </InputGroup>
                    <Input
                      placeholder="Stroke Index"
                      type="text"
                      background="white"
                      border="3px solid #BBBBBB"
                      onChange={(event) => handleStrokeIndex(event, '01')}
                    />
                  </Stack>
                </InputGroup>
                <InputGroup width="auto">
                  <Stack direction="row" spacing={4} align="center">
                    <InputGroup>
                      <InputLeftAddon>Hole 2</InputLeftAddon>
                      <Input
                        placeholder="Par"
                        type="text"
                        background="white"
                        border="3px solid #BBBBBB"
                        onChange={(event) => handlePar(event, '02')}
                      />
                    </InputGroup>
                    <Input
                      placeholder="Stroke Index"
                      type="text"
                      background="white"
                      border="3px solid #BBBBBB"
                      onChange={(event) => handleStrokeIndex(event, '02')}
                    />
                  </Stack>
                </InputGroup>
                <InputGroup width="auto">
                  <Stack direction="row" spacing={4} align="center">
                    <InputGroup>
                      <InputLeftAddon>Hole 3</InputLeftAddon>
                      <Input
                        placeholder="Par"
                        type="text"
                        background="white"
                        border="3px solid #BBBBBB"
                        onChange={(event) => handlePar(event, '03')}
                      />
                    </InputGroup>
                    <Input
                      placeholder="Stroke Index"
                      type="text"
                      background="white"
                      border="3px solid #BBBBBB"
                      onChange={(event) => handleStrokeIndex(event, '03')}
                    />
                  </Stack>
                </InputGroup>
                <InputGroup width="auto">
                  <Stack direction="row" spacing={4} align="center">
                    <InputGroup>
                      <InputLeftAddon>Hole 4</InputLeftAddon>
                      <Input
                        placeholder="Par"
                        type="text"
                        background="white"
                        border="3px solid #BBBBBB"
                        onChange={(event) => handlePar(event, '04')}
                      />
                    </InputGroup>
                    <Input
                      placeholder="Stroke Index"
                      type="text"
                      background="white"
                      border="3px solid #BBBBBB"
                      onChange={(event) => handleStrokeIndex(event, '04')}
                    />
                  </Stack>
                </InputGroup>
                <InputGroup width="auto">
                  <Stack direction="row" spacing={4} align="center">
                    <InputGroup>
                      <InputLeftAddon>Hole 5</InputLeftAddon>
                      <Input
                        placeholder="Par"
                        type="text"
                        background="white"
                        border="3px solid #BBBBBB"
                        onChange={(event) => handlePar(event, '05')}
                      />
                    </InputGroup>
                    <Input
                      placeholder="Stroke Index"
                      type="text"
                      background="white"
                      border="3px solid #BBBBBB"
                      onChange={(event) => handleStrokeIndex(event, '05')}
                    />
                  </Stack>
                </InputGroup>
                <InputGroup width="auto">
                  <Stack direction="row" spacing={4} align="center">
                    <InputGroup>
                      <InputLeftAddon>Hole 6</InputLeftAddon>
                      <Input
                        placeholder="Par"
                        type="text"
                        background="white"
                        border="3px solid #BBBBBB"
                        onChange={(event) => handlePar(event, '06')}
                      />
                    </InputGroup>
                    <Input
                      placeholder="Stroke Index"
                      type="text"
                      background="white"
                      border="3px solid #BBBBBB"
                      onChange={(event) => handleStrokeIndex(event, '06')}
                    />
                  </Stack>
                </InputGroup>
                <InputGroup width="auto">
                  <Stack direction="row" spacing={4} align="center">
                    <InputGroup>
                      <InputLeftAddon>Hole 7</InputLeftAddon>
                      <Input
                        placeholder="Par"
                        type="text"
                        background="white"
                        border="3px solid #BBBBBB"
                        onChange={(event) => handlePar(event, '07')}
                      />
                    </InputGroup>
                    <Input
                      placeholder="Stroke Index"
                      type="text"
                      background="white"
                      border="3px solid #BBBBBB"
                      onChange={(event) => handleStrokeIndex(event, '07')}
                    />
                  </Stack>
                </InputGroup>
                <InputGroup width="auto">
                  <Stack direction="row" spacing={4} align="center">
                    <InputGroup>
                      <InputLeftAddon>Hole 8</InputLeftAddon>
                      <Input
                        placeholder="Par"
                        type="text"
                        background="white"
                        border="3px solid #BBBBBB"
                        onChange={(event) => handlePar(event, '08')}
                      />
                    </InputGroup>
                    <Input
                      placeholder="Stroke Index"
                      type="text"
                      background="white"
                      border="3px solid #BBBBBB"
                      onChange={(event) => handleStrokeIndex(event, '08')}
                    />
                  </Stack>
                </InputGroup>
                <InputGroup width="auto">
                  <Stack direction="row" spacing={4} align="center">
                    <InputGroup>
                      <InputLeftAddon>Hole 9</InputLeftAddon>
                      <Input
                        placeholder="Par"
                        type="text"
                        background="white"
                        border="3px solid #BBBBBB"
                        onChange={(event) => handlePar(event, '09')}
                      />
                    </InputGroup>
                    <Input
                      placeholder="Stroke Index"
                      type="text"
                      background="white"
                      border="3px solid #BBBBBB"
                      onChange={(event) => handleStrokeIndex(event, '09')}
                    />
                  </Stack>
                </InputGroup>
              </Stack>
            </Box>
            <Spacer />
            <Box
              background="#7FD661"
              width="auto"
              height="auto"
              padding="5"
              borderRadius="20px"
              align="center"
              overflowY="auto"
              mr="20"
            >
              <Text color="white" fontSize="26px" lineHeight="70px">
                {' '}
                Create Tournament{' '}
              </Text>
              <Stack spacing={3} align="center">
                <InputGroup width="auto">
                  <Stack direction="row" spacing={4} align="center">
                    <InputGroup>
                      <InputLeftAddon>Hole 10</InputLeftAddon>
                      <Input
                        type="text"
                        placeholder="Par"
                        background="white"
                        border="3px solid #BBBBBB"
                        onChange={(event) => handlePar(event, '10')}
                      />
                    </InputGroup>
                    <Input
                      type="text"
                      placeholder="Stroke Index"
                      background="white"
                      border="3px solid #BBBBBB"
                      onChange={(event) => handleStrokeIndex(event, '10')}
                    />
                  </Stack>
                </InputGroup>
                <InputGroup width="auto">
                  <Stack direction="row" spacing={4} align="center">
                    <InputGroup>
                      <InputLeftAddon>Hole 11</InputLeftAddon>
                      <Input
                        placeholder="Par"
                        type="text"
                        background="white"
                        border="3px solid #BBBBBB"
                        onChange={(event) => handlePar(event, '11')}
                      />
                    </InputGroup>
                    <Input
                      placeholder="Stroke Index"
                      type="text"
                      background="white"
                      border="3px solid #BBBBBB"
                      onChange={(event) => handleStrokeIndex(event, '11')}
                    />
                  </Stack>
                </InputGroup>
                <InputGroup width="auto">
                  <Stack direction="row" spacing={4} align="center">
                    <InputGroup>
                      <InputLeftAddon>Hole 12</InputLeftAddon>
                      <Input
                        placeholder="Par"
                        type="text"
                        background="white"
                        border="3px solid #BBBBBB"
                        onChange={(event) => handlePar(event, '12')}
                      />
                    </InputGroup>
                    <Input
                      placeholder="Stroke Index"
                      type="text"
                      background="white"
                      border="3px solid #BBBBBB"
                      onChange={(event) => handleStrokeIndex(event, '12')}
                    />
                  </Stack>
                </InputGroup>
                <InputGroup width="auto">
                  <Stack direction="row" spacing={4} align="center">
                    <InputGroup>
                      <InputLeftAddon>Hole 13</InputLeftAddon>
                      <Input
                        placeholder="Par"
                        type="text"
                        background="white"
                        border="3px solid #BBBBBB"
                        onChange={(event) => handlePar(event, '13')}
                      />
                    </InputGroup>
                    <Input
                      placeholder="Stroke Index"
                      type="text"
                      background="white"
                      border="3px solid #BBBBBB"
                      onChange={(event) => handleStrokeIndex(event, '13')}
                    />
                  </Stack>
                </InputGroup>
                <InputGroup width="auto">
                  <Stack direction="row" spacing={4} align="center">
                    <InputGroup>
                      <InputLeftAddon>Hole 14</InputLeftAddon>
                      <Input
                        placeholder="Par"
                        type="text"
                        background="white"
                        border="3px solid #BBBBBB"
                        onChange={(event) => handlePar(event, '14')}
                      />
                    </InputGroup>
                    <Input
                      placeholder="Stroke Index"
                      type="text"
                      background="white"
                      border="3px solid #BBBBBB"
                      onChange={(event) => handleStrokeIndex(event, '14')}
                    />
                  </Stack>
                </InputGroup>
                <InputGroup width="auto">
                  <Stack direction="row" spacing={4} align="center">
                    <InputGroup>
                      <InputLeftAddon>Hole 15</InputLeftAddon>
                      <Input
                        placeholder="Par"
                        type="text"
                        background="white"
                        border="3px solid #BBBBBB"
                        onChange={(event) => handlePar(event, '15')}
                      />
                    </InputGroup>
                    <Input
                      placeholder="Stroke Index"
                      type="text"
                      background="white"
                      border="3px solid #BBBBBB"
                      onChange={(event) => handleStrokeIndex(event, '15')}
                    />
                  </Stack>
                </InputGroup>
                <InputGroup width="auto">
                  <Stack direction="row" spacing={4} align="center">
                    <InputGroup>
                      <InputLeftAddon>Hole 16</InputLeftAddon>
                      <Input
                        placeholder="Par"
                        type="text"
                        background="white"
                        border="3px solid #BBBBBB"
                        onChange={(event) => handlePar(event, '16')}
                      />
                    </InputGroup>
                    <Input
                      placeholder="Stroke Index"
                      type="text"
                      background="white"
                      border="3px solid #BBBBBB"
                      onChange={(event) => handleStrokeIndex(event, '16')}
                    />
                  </Stack>
                </InputGroup>
                <InputGroup width="auto">
                  <Stack direction="row" spacing={4} align="center">
                    <InputGroup>
                      <InputLeftAddon>Hole 17</InputLeftAddon>
                      <Input
                        placeholder="Par"
                        type="text"
                        background="white"
                        border="3px solid #BBBBBB"
                        onChange={(event) => handlePar(event, '17')}
                      />
                    </InputGroup>
                    <Input
                      placeholder="Stroke Index"
                      type="text"
                      background="white"
                      border="3px solid #BBBBBB"
                      onChange={(event) => handleStrokeIndex(event, '17')}
                    />
                  </Stack>
                </InputGroup>
                <InputGroup width="auto">
                  <Stack direction="row" spacing={4} align="center">
                    <InputGroup>
                      <InputLeftAddon>Hole 18</InputLeftAddon>
                      <Input
                        placeholder="Par"
                        type="text"
                        background="white"
                        border="3px solid #BBBBBB"
                        onChange={(event) => handlePar(event, '18')}
                      />
                    </InputGroup>
                    <Input
                      placeholder="Stroke Index"
                      type="text"
                      background="white"
                      border="3px solid #BBBBBB"
                      onChange={(event) => handleStrokeIndex(event, '18')}
                    />
                  </Stack>
                </InputGroup>
              </Stack>
              <Button
                background="#80D2F1"
                width="auto"
                borderRadius="20px"
                color="white"
                top="20px"
                onClick={() => {
                  console.log(holes);
                  setIsOpen(true);
                  totalCount();
                }}
              >
                Create Tournament
              </Button>
            </Box>
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
                  <Text>Total Out Par: {outPar}</Text>
                  <Text>Total Out Stroke Index: {outSi}</Text>
                  <Text>Total In Par: {inPar}</Text>
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
                        .createTournament(uId, holes, name)
                        .then(() => {
                          firebaseFunction
                            .fetchRealtimeRank(uId)
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
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default AdminCreatePage;
