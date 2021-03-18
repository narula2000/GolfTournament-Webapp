import React from 'react';
import { Flex, Box, Image, Text, Button, VStack } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import logo from '../assets/golf-logo.png';

const AdminDashboard = () => {
  const history = useHistory();
  const buttonText = '+ Create New Tournament';
  const backgroundText = 'There is no ongoing tournament';
  return (
    <Box background="white">
      <Flex
        position="absolute"
        background="#CFECC5"
        width="100%"
        height="147px"
      />
      <Image src={logo} position="absolute" left="calc(50% - 131px)" />
      <VStack>
        <Button
          position="absolute"
          width="800px"
          height="100px"
          top="260px"
          left="calc(50% - 400px)"
          border="3px dashed #7FD661"
          borderRadius="20px"
          align="center"
          background="white"
          onClick={() => {
            history.push('/admin/create');
          }}
        >
          <Text color="#7FD661" fontSize="28px">
            {buttonText}
          </Text>
        </Button>
        <Text
          color="rgba(127, 214, 97, 0.48)"
          fontSize="28px"
          position="absolute"
          top="400px"
        >
          {backgroundText}
        </Text>
      </VStack>
    </Box>
  );
};

export default AdminDashboard;
