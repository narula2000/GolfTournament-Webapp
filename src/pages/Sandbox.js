import React from 'react';
import firebase from 'firebase/app';
import { Container, Button, Heading, Stack } from '@chakra-ui/react';
import { DeleteIcon, AddIcon } from '@chakra-ui/icons';
import 'firebase/database';

const mockData = {
  name: 'Phairat Lin',
  phonenumber: '0866666666',
  holes: {
    hole1: {
      score: 0,
      stroke: 3,
      par: 3,
      strokeIndex: 9,
      saveSand: false,
      penalty: 0,
      fairway: null,
      gir: false,
      putt: 0,
      createDate: 'new Date()',
      updateDate: 'new Date()',
    },
  },
};

const createMockDataAdmin = () => {
  const database = firebase.database();
  database.ref('admin').push().push().push().set(mockData);
};

const clearData = () => {
  const database = firebase.database();
  database.ref('admin').set({});
};

const Sandbox = () => (
  <Container>
    <Heading>This Page for Sandboxing</Heading>
    <Stack direction="column" spacing={4} align="center">
      <Button
        onClick={createMockDataAdmin}
        leftIcon={<AddIcon />}
        colorScheme="teal"
        variant="outline"
      >
        Add first Admin and Mock
      </Button>
      <Button
        onClick={clearData}
        leftIcon={<DeleteIcon />}
        colorScheme="red"
        variant="solid"
      >
        Clear Data
      </Button>
    </Stack>
  </Container>
);

export default Sandbox;
