import React from 'react';
import { Flex, Box, Image, Text, Input, Stack, Button } from '@chakra-ui/react';
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
    >
      <Text color="white" fontSize="26px" lineHeight="80px">
        {' '}
        Create Tournament{' '}
      </Text>
      <Stack spacing={5}>
        <Input
          placeholder="Tournament Name"
          width="380px"
          background="white"
          border="3px solid #BBBBBB"
          boxSizing="border-box"
        />
        <Input
          placeholder="Hole Number"
          width="380px"
          background="white"
          border="3px solid #BBBBBB"
          boxSizing="border-box"
        />
      </Stack>
      <Button background="#80D2F1" borderRadius="20px" top="200px">
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
