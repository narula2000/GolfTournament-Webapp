import React from 'react';
import {
  Flex,
  Box,
  Image,
  Text,
  InputGroup,
  InputLeftAddon,
  Input,
  Stack,
  Button,
} from '@chakra-ui/react';
import logo from '../assets/golf-logo.png';

const AdminHomePage = () => (
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
      width="420px"
      height="430px"
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
        />
        <InputGroup width="380px">
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
        <InputGroup width="380px">
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
        <InputGroup width="380px">
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
        <InputGroup width="380px">
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
        <InputGroup width="380px">
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
        <InputGroup width="380px">
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
        <InputGroup width="380px">
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
        <InputGroup width="380px">
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
        <InputGroup width="380px">
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
      <Button
        background="#80D2F1"
        borderRadius="20px"
        top="200px"
        color="white"
      >
        Create
      </Button>
    </Box>
    <Box
      position="absolute"
      width="390px"
      height="180px"
      right="80px"
      top="200px"
      background="#7FD661"
      borderRadius="20px"
    />
    <Box
      position="absolute"
      width="390px"
      height="180px"
      right="80px"
      top="450px"
      background="#7FD661"
      borderRadius="20px"
    />
  </Box>
);

export default AdminHomePage;
