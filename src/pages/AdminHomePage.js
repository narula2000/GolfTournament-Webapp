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
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

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
        width="600px"
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
            onChange={(event) => setName(event.target.value)}
          />
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 1</InputLeftAddon>
                <Input
                  placeholder="Par"
                  background="white"
                  border="3px solid #BBBBBB"
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                background="white"
                border="3px solid #BBBBBB"
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 2</InputLeftAddon>
                <Input
                  placeholder="Par"
                  background="white"
                  border="3px solid #BBBBBB"
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                background="white"
                border="3px solid #BBBBBB"
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 3</InputLeftAddon>
                <Input
                  placeholder="Par"
                  background="white"
                  border="3px solid #BBBBBB"
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                background="white"
                border="3px solid #BBBBBB"
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 4</InputLeftAddon>
                <Input
                  placeholder="Par"
                  background="white"
                  border="3px solid #BBBBBB"
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                background="white"
                border="3px solid #BBBBBB"
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 5</InputLeftAddon>
                <Input
                  placeholder="Par"
                  background="white"
                  border="3px solid #BBBBBB"
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                background="white"
                border="3px solid #BBBBBB"
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 6</InputLeftAddon>
                <Input
                  placeholder="Par"
                  background="white"
                  border="3px solid #BBBBBB"
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                background="white"
                border="3px solid #BBBBBB"
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 7</InputLeftAddon>
                <Input
                  placeholder="Par"
                  background="white"
                  border="3px solid #BBBBBB"
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                background="white"
                border="3px solid #BBBBBB"
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 8</InputLeftAddon>
                <Input
                  placeholder="Par"
                  background="white"
                  border="3px solid #BBBBBB"
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                background="white"
                border="3px solid #BBBBBB"
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 9</InputLeftAddon>
                <Input
                  placeholder="Par"
                  background="white"
                  border="3px solid #BBBBBB"
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                background="white"
                border="3px solid #BBBBBB"
              />
            </Stack>
          </InputGroup>
        </Stack>
      </Box>
      <Box
        position="absolute"
        background="#7FD661"
        width="600px"
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
                  placeholder="Par"
                  background="white"
                  border="3px solid #BBBBBB"
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                background="white"
                border="3px solid #BBBBBB"
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 11</InputLeftAddon>
                <Input
                  placeholder="Par"
                  background="white"
                  border="3px solid #BBBBBB"
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                background="white"
                border="3px solid #BBBBBB"
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 12</InputLeftAddon>
                <Input
                  placeholder="Par"
                  background="white"
                  border="3px solid #BBBBBB"
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                background="white"
                border="3px solid #BBBBBB"
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 13</InputLeftAddon>
                <Input
                  placeholder="Par"
                  background="white"
                  border="3px solid #BBBBBB"
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                background="white"
                border="3px solid #BBBBBB"
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 14</InputLeftAddon>
                <Input
                  placeholder="Par"
                  background="white"
                  border="3px solid #BBBBBB"
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                background="white"
                border="3px solid #BBBBBB"
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 15</InputLeftAddon>
                <Input
                  placeholder="Par"
                  background="white"
                  border="3px solid #BBBBBB"
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                background="white"
                border="3px solid #BBBBBB"
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 16</InputLeftAddon>
                <Input
                  placeholder="Par"
                  background="white"
                  border="3px solid #BBBBBB"
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                background="white"
                border="3px solid #BBBBBB"
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 17</InputLeftAddon>
                <Input
                  placeholder="Par"
                  background="white"
                  border="3px solid #BBBBBB"
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                background="white"
                border="3px solid #BBBBBB"
              />
            </Stack>
          </InputGroup>
          <InputGroup width="480px">
            <Stack direction="row" spacing={4} align="center">
              <InputGroup>
                <InputLeftAddon>Hole 18</InputLeftAddon>
                <Input
                  placeholder="Par"
                  background="white"
                  border="3px solid #BBBBBB"
                />
              </InputGroup>
              <Input
                placeholder="Stroke Index"
                background="white"
                border="3px solid #BBBBBB"
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
          onClick={() => setIsOpen(true)}
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
            <Text>Total Par of OUT is </Text>
            <Text>Total Par of IN is</Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="red" ml={3}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Box>
  );
};

export default AdminHomePage;
