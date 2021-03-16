import React from 'react';
import {
  Box,
  Flex,
  Image,
  Square,
  Button,
  Heading,
  HStack,
  Input,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

import theme from '../core/theme';
import logo from '../assets/golf-logo.png';
import styles from '../core/theme/styles';

const ViewTournamentUser = () => (
  <Box>
    <Flex bg={theme.colors.background}>
      <Square>
        <Image src={logo} boxSize="150px" objectFit="cover" />
      </Square>
      <Flex align="center">
        <Heading size="md">View Tournament Users</Heading>
      </Flex>
    </Flex>
    <Flex mb="147px" bg="white" direction="column">
      <Box mx="20px" my="10px">
        <Button leftIcon={<ArrowBackIcon />} colorScheme="teal" variant="ghost">
          Back
        </Button>
      </Box>
      <Box
        mx="200px"
        my="10px"
        borderRadius="20px"
        p="20px"
        bg={theme.colors.secondary}
      >
        <HStack spacing="20px" justify="center">
          <Input
            background="white"
            type="text"
            placeholder="Username"
            maxW="40%"
          />
          <Input
            background="white"
            type="tel"
            placeholder="Phone Number"
            maxW="40%"
          />
          <Button
            bg={styles.colors.primary}
            color="white"
            borderRadius="20px"
            maxW="20%"
            p="20px"
          >
            Add User
          </Button>
        </HStack>
      </Box>
    </Flex>
  </Box>
);

export default ViewTournamentUser;
