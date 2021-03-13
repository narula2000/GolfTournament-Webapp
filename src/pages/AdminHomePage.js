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
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from '@chakra-ui/react';
import logo from '../assets/golf-logo.png';

const AdminHomePage = () => {
  const [name, setName] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [outPar, setOut] = useState(0);
  const [inPar, setIn] = useState(0);
  const [outSi, setOutSI] = useState(0);
  const [inSi, setInSI] = useState(0);
  const [holes, setHoles] = useState({
    hole1: {
      par: 0,
      strokeIndex: 0,
    },
    hole2: {
      par: 0,
      strokeIndex: 0,
    },
    hole3: {
      par: 0,
      strokeIndex: 0,
    },
    hole4: {
      par: 0,
      strokeIndex: 0,
    },
    hole5: {
      par: 0,
      strokeIndex: 0,
    },
    hole6: {
      par: 0,
      strokeIndex: 0,
    },
    hole7: {
      par: 0,
      strokeIndex: 0,
    },
    hole8: {
      par: 0,
      strokeIndex: 0,
    },
    hole9: {
      par: 0,
      strokeIndex: 0,
    },
    hole10: {
      par: 0,
      strokeIndex: 0,
    },
    hole11: {
      par: 0,
      strokeIndex: 0,
    },
    hole12: {
      par: 0,
      strokeIndex: 0,
    },
    hole13: {
      par: 0,
      strokeIndex: 0,
    },
    hole14: {
      par: 0,
      strokeIndex: 0,
    },
    hole15: {
      par: 0,
      strokeIndex: 0,
    },
    hole16: {
      par: 0,
      strokeIndex: 0,
    },
    hole17: {
      par: 0,
      strokeIndex: 0,
    },
    hole18: {
      par: 0,
      strokeIndex: 0,
    },
  });
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  const handlePar = (event, holeData, holeName) => {
    setHoles(() => {
      const data = { ...holes };
      data[holeName] = {
        ...holeData,
        par: Number.isNaN(parseInt(event.target.value, 10))
          ? 0
          : parseInt(event.target.value, 10),
      };
      return data;
    });
  };
  const handleStrokeIndex = (event, holeData, holeName) => {
    setHoles(() => {
      const data = { ...holes };
      data[holeName] = {
        ...holeData,
        strokeIndex: Number.isNaN(parseInt(event.target.value, 10))
          ? 0
          : parseInt(event.target.value, 10),
      };
      return data;
    });
  };
  const totalCount = () => {
    let outParCount = 0;
    let outSiCount = 0;
    let inParCount = 0;
    let inSiCount = 0;
    let flip = true;
    Object.keys(holes).forEach((key) => {
      if (key.slice(-1) === '0') flip = false;
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
      <Flex
        position="absolute"
        background="#CFECC5"
        width="100%"
        height="147px"
      />
      <Image src={logo} position="absolute" left="calc(50% - 131px)" />
      <Box
        position="absolute"
        background="#7FD661"
        width="550px"
        height="600px"
        left="80px"
        top="200px"
        borderRadius="20px"
        align="center"
        overflowY="auto"
      >
        <Text color="white" fontSize="26px" lineHeight="70px">
          {' '}
          Create Tournament{' '}
        </Text>
        <Stack spacing={3}>
          <Input
            placeholder="Tournament Name"
            width="380px"
            background="white"
            border="3px solid #BBBBBB"
            onChangeCapture={(event) => setName(event.target.value)}
          />
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 1</InputLeftAddon>
                <Input
                  placeholder="Par"
                  type="text"
                  background="white"
                  border="3px solid #BBBBBB"
                  onChange={(event) => handlePar(event, holes.hole1, 'hole1')}
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                type="text"
                background="white"
                border="3px solid #BBBBBB"
                onChange={(event) =>
                  handleStrokeIndex(event, holes.hole1, 'hole1')
                }
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 2</InputLeftAddon>
                <Input
                  placeholder="Par"
                  type="text"
                  background="white"
                  border="3px solid #BBBBBB"
                  onChange={(event) => handlePar(event, holes.hole1, 'hole2')}
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                type="text"
                background="white"
                border="3px solid #BBBBBB"
                onChange={(event) =>
                  handleStrokeIndex(event, holes.hole1, 'hole2')
                }
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 3</InputLeftAddon>
                <Input
                  placeholder="Par"
                  type="text"
                  background="white"
                  border="3px solid #BBBBBB"
                  onChange={(event) => handlePar(event, holes.hole1, 'hole3')}
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                type="text"
                background="white"
                border="3px solid #BBBBBB"
                onChange={(event) =>
                  handleStrokeIndex(event, holes.hole1, 'hole3')
                }
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 4</InputLeftAddon>
                <Input
                  placeholder="Par"
                  type="text"
                  background="white"
                  border="3px solid #BBBBBB"
                  onChange={(event) => handlePar(event, holes.hole1, 'hole4')}
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                type="text"
                background="white"
                border="3px solid #BBBBBB"
                onChange={(event) =>
                  handleStrokeIndex(event, holes.hole1, 'hole4')
                }
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 5</InputLeftAddon>
                <Input
                  placeholder="Par"
                  type="text"
                  background="white"
                  border="3px solid #BBBBBB"
                  onChange={(event) => handlePar(event, holes.hole1, 'hole5')}
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                type="text"
                background="white"
                border="3px solid #BBBBBB"
                onChange={(event) =>
                  handleStrokeIndex(event, holes.hole1, 'hole5')
                }
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 6</InputLeftAddon>
                <Input
                  placeholder="Par"
                  type="text"
                  background="white"
                  border="3px solid #BBBBBB"
                  onChange={(event) => handlePar(event, holes.hole1, 'hole6')}
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                type="text"
                background="white"
                border="3px solid #BBBBBB"
                onChange={(event) =>
                  handleStrokeIndex(event, holes.hole1, 'hole6')
                }
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 7</InputLeftAddon>
                <Input
                  placeholder="Par"
                  type="text"
                  background="white"
                  border="3px solid #BBBBBB"
                  onChange={(event) => handlePar(event, holes.hole1, 'hole7')}
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                type="text"
                background="white"
                border="3px solid #BBBBBB"
                onChange={(event) =>
                  handleStrokeIndex(event, holes.hole1, 'hole7')
                }
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 8</InputLeftAddon>
                <Input
                  placeholder="Par"
                  type="text"
                  background="white"
                  border="3px solid #BBBBBB"
                  onChange={(event) => handlePar(event, holes.hole1, 'hole8')}
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                type="text"
                background="white"
                border="3px solid #BBBBBB"
                onChange={(event) =>
                  handleStrokeIndex(event, holes.hole1, 'hole8')
                }
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 9</InputLeftAddon>
                <Input
                  placeholder="Par"
                  type="text"
                  background="white"
                  border="3px solid #BBBBBB"
                  onChange={(event) => handlePar(event, holes.hole1, 'hole9')}
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                type="text"
                background="white"
                border="3px solid #BBBBBB"
                onChange={(event) =>
                  handleStrokeIndex(event, holes.hole1, 'hole9')
                }
              />
            </Stack>
          </InputGroup>
        </Stack>
      </Box>
      <Box
        position="absolute"
        background="#7FD661"
        width="550px"
        height="600px"
        right="80px"
        top="200px"
        borderRadius="20px"
        align="center"
        overflowY="auto"
      >
        <Text color="white" fontSize="26px" lineHeight="70px">
          {' '}
          Create Tournament{' '}
        </Text>
        <Stack spacing={3}>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 10</InputLeftAddon>
                <Input
                  type="text"
                  placeholder="Par"
                  background="white"
                  border="3px solid #BBBBBB"
                  onChange={(event) => handlePar(event, holes.hole1, 'hole10')}
                />
              </InputGroup>
              <Input
                type="text"
                placeholder="Stroke Index"
                background="white"
                border="3px solid #BBBBBB"
                onChange={(event) =>
                  handleStrokeIndex(event, holes.hole1, 'hole10')
                }
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 11</InputLeftAddon>
                <Input
                  placeholder="Par"
                  type="text"
                  background="white"
                  border="3px solid #BBBBBB"
                  onChange={(event) => handlePar(event, holes.hole1, 'hole11')}
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                type="text"
                background="white"
                border="3px solid #BBBBBB"
                onChange={(event) =>
                  handleStrokeIndex(event, holes.hole1, 'hole11')
                }
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 12</InputLeftAddon>
                <Input
                  placeholder="Par"
                  type="text"
                  background="white"
                  border="3px solid #BBBBBB"
                  onChange={(event) => handlePar(event, holes.hole1, 'hole12')}
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                type="text"
                background="white"
                border="3px solid #BBBBBB"
                onChange={(event) =>
                  handleStrokeIndex(event, holes.hole1, 'hole12')
                }
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 13</InputLeftAddon>
                <Input
                  placeholder="Par"
                  type="text"
                  background="white"
                  border="3px solid #BBBBBB"
                  onChange={(event) => handlePar(event, holes.hole1, 'hole13')}
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                type="text"
                background="white"
                border="3px solid #BBBBBB"
                onChange={(event) =>
                  handleStrokeIndex(event, holes.hole1, 'hole13')
                }
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 14</InputLeftAddon>
                <Input
                  placeholder="Par"
                  type="text"
                  background="white"
                  border="3px solid #BBBBBB"
                  onChange={(event) => handlePar(event, holes.hole1, 'hole14')}
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                type="text"
                background="white"
                border="3px solid #BBBBBB"
                onChange={(event) =>
                  handleStrokeIndex(event, holes.hole1, 'hole14')
                }
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 15</InputLeftAddon>
                <Input
                  placeholder="Par"
                  type="text"
                  background="white"
                  border="3px solid #BBBBBB"
                  onChange={(event) => handlePar(event, holes.hole1, 'hole15')}
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                type="text"
                background="white"
                border="3px solid #BBBBBB"
                onChange={(event) =>
                  handleStrokeIndex(event, holes.hole1, 'hole15')
                }
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 16</InputLeftAddon>
                <Input
                  placeholder="Par"
                  type="text"
                  background="white"
                  border="3px solid #BBBBBB"
                  onChange={(event) => handlePar(event, holes.hole1, 'hole16')}
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                type="text"
                background="white"
                border="3px solid #BBBBBB"
                onChange={(event) =>
                  handleStrokeIndex(event, holes.hole1, 'hole16')
                }
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 17</InputLeftAddon>
                <Input
                  placeholder="Par"
                  type="text"
                  background="white"
                  border="3px solid #BBBBBB"
                  onChange={(event) => handlePar(event, holes.hole1, 'hole17')}
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                type="text"
                background="white"
                border="3px solid #BBBBBB"
                onChange={(event) =>
                  handleStrokeIndex(event, holes.hole1, 'hole17')
                }
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 18</InputLeftAddon>
                <Input
                  placeholder="Par"
                  type="text"
                  background="white"
                  border="3px solid #BBBBBB"
                  onChange={(event) => handlePar(event, holes.hole1, 'hole18')}
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                type="text"
                background="white"
                border="3px solid #BBBBBB"
                onChange={(event) =>
                  handleStrokeIndex(event, holes.hole1, 'hole18')
                }
              />
            </Stack>
          </InputGroup>
        </Stack>
        <Button
          background="#80D2F1"
          width="200px"
          borderRadius="20px"
          color="white"
          top="20px"
          onClick={() => {
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
            <Button ml={3}>Yes</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Box>
  );
};

export default AdminHomePage;
