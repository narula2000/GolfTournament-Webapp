import React from 'react';
import firebase from 'firebase/app';
import { Container, Button, Heading, Stack } from '@chakra-ui/react';
import { DeleteIcon, AddIcon, LinkIcon } from '@chakra-ui/icons';
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
  database.ref('admin').set({
    dummyData: 0,
  });
};

const fetchData = () => {
  const database = firebase.database();
  database.ref('admin/').on('value', (snap) => {
    const data = snap.val();
    console.log('Snap values ->', snap.val());
    if (data != null || data !== undefined) {
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

const renameUserId = (userId, _phonenumber) => {
  const database = firebase.database();
  database.ref('admin/').on('value', (snap) => {
    const data = snap.val();
    console.log('Snap values ->', snap.val());
    if (data != null || data !== undefined) {
      const adminIds = Object.keys(data);
      adminIds.forEach((adminId) => {
        const tourIds = Object.keys(data[adminId]);
        tourIds.forEach((tourId) => {
          const userIds = Object.keys(data[adminId][tourId]);
          console.log('User ids ->', userIds);
          userIds.forEach((userID) => {
            if (
              userID.phonenumber !== undefined &&
              userID.phonenumber === _phonenumber
            ) {
              // Clone old key values to new UserID
              data[adminId][tourId][userId] = data[adminId][tourId][userID];
              delete data[adminId][tourId][userID]; // Delete old key
            }
          });
          // Sandbox reason
          data[adminId][tourId].newUserId = data[adminId][tourId][userIds['0']];
          delete data[adminId][tourId][userIds['0']]; // Delete old key
          console.log('New data ->', data);
        });
      });
    }
  });
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
        onClick={fetchData}
        leftIcon={<AddIcon />}
        colorScheme="blue"
        variant="solid"
      >
        Fetch All Data
      </Button>
      <Button
        onClick={renameUserId}
        leftIcon={<LinkIcon />}
        colorScheme="blue"
        variant="solid"
      >
        Change UserID
      </Button>
    </Stack>
  </Container>
);

export default Sandbox;
