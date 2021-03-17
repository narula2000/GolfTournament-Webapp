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
  InputGroup,
  InputLeftElement,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Spacer,
} from '@chakra-ui/react';
import { ArrowBackIcon, SearchIcon, DeleteIcon } from '@chakra-ui/icons';

import theme from '../core/theme';
import logo from '../assets/golf-logo.png';
import styles from '../core/theme/styles';

const ViewTournamentUser = () => (
  <Box>
    <Flex bg={theme.colors.background}>
      <Square>
        <Image src={logo} boxSize="100px" objectFit="cover" />
      </Square>
      <Flex align="center" mx="10px">
        <Heading size="md">View Tournament Users</Heading>
      </Flex>
    </Flex>
    <Flex mb="147px" bg="white" direction="column">
      <Box mx="20px" my="10px">
        <Button
          leftIcon={<ArrowBackIcon />}
          colorScheme="green"
          variant="ghost"
        >
          Back
        </Button>
      </Box>
      <Box mx="200px" borderRadius="20px" p="20px" bg={theme.colors.secondary}>
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
      <Box mx="200px" my="10px" p="20px">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Search" />
        </InputGroup>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td>User 1</Td>
              <Td>xxx-xxx-xxxx</Td>
              <Td>
                <IconButton
                  aria-label="Delete user"
                  colorScheme="red"
                  icon={<DeleteIcon />}
                />
              </Td>
            </Tr>
            <Tr>
              <Td>User 2</Td>
              <Td>xxx-xxx-xxxx</Td>
              <Td>
                {' '}
                <IconButton
                  aria-label="Delete user"
                  colorScheme="red"
                  icon={<DeleteIcon />}
                />{' '}
              </Td>
            </Tr>
            <Tr>
              <Td>User 3</Td>
              <Td>xxx-xxx-xxxx</Td>
              <Td>
                {' '}
                <IconButton
                  aria-label="Delete user"
                  colorScheme="red"
                  icon={<DeleteIcon />}
                />{' '}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Flex>
  </Box>
);

export default ViewTournamentUser;
