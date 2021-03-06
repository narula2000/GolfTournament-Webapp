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
      sandSave: false,
      penalty: 0,
      fairway: null,
      gir: false,
      putt: 0,
      createDate: new Date().toString(),
      updateDate: new Date().toString(),
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

const fetchData = () => {
  const database = firebase.database();
  database.ref('admin/').on('value', (snap) => {
    const data = snap.val();
    console.log('Snap values ->', snap.val());
    if (data != null && data !== undefined) {
      const adminIds = Object.keys(data);
      console.log('AdminIds ->', adminIds);
      adminIds.forEach((adminId) => {
        const tourIds = Object.keys(data[adminId]);
        console.log('TourIds ->', tourIds);
        tourIds.forEach((tourId) => {
          const userIds = Object.keys(data[adminId][tourId]);
          console.log('UserIds ->', userIds);
          userIds.forEach((userId) => {
            console.log('User Info ->', data[adminId][tourId][userId]);
          });
        });
      });
    }
  });
};

const fetchDataOnce = async () => {
  const database = firebase.database();
  const snap = await database.ref('admin/').once('value');
  console.log('Data snap ->', snap.val());
};

const Sandbox = () => (
  <Container>
    <Heading>This Page for Sandboxing</Heading>
    <Stack direction="column" spacing={4} align="center">
      <Button
        onClick={createMockDataAdmin}
        leftIcon={<AddIcon />}
        colorScheme="whatsapp"
        variant="solid"
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
      <Button
        onClick={fetchDataOnce}
        leftIcon={<AddIcon />}
        colorScheme="blue"
        variant="solid"
      >
        Fetch and Log All Data Once
      </Button>
      <Button
        onClick={fetchData}
        leftIcon={<AddIcon />}
        colorScheme="blue"
        variant="solid"
      >
        (async) Fetch and Log Data on Change
      </Button>
    </Stack>
  </Container>
);

export default Sandbox;
