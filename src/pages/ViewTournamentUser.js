import React, { useEffect, useState } from 'react';
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
  Td,
  IconButton,
} from '@chakra-ui/react';
import {
  ArrowBackIcon,
  SearchIcon,
  DeleteIcon,
  RepeatIcon,
} from '@chakra-ui/icons';
import { useLocation } from 'react-router-dom';

import functions from '../firebase/functions';
import 'firebase/auth';

import theme from '../core/theme';
import logo from '../assets/golf-logo.png';

const ViewTournamentUser = () => {
  const location = useLocation();
  const [username, setName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const adminId = localStorage.getItem('adminId');
  const tournamentIDTest =
    '228f14c08b530a5826adafc602b52345ebbb2ea8a5599dfdc421fbca90e06424';

  const [render, setRender] = useState(false);
  const data = location.state.detail;

  function renderUsers() {
    console.log(data);
  }

  return (
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
        <Box
          mx="200px"
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
              onChangeCapture={(event) => setName(event.target.value)}
            />
            <Input
              background="white"
              type="tel"
              placeholder="Phone Number"
              maxW="40%"
              onChangeCapture={(event) => setPhoneNum(event.target.value)}
            />
            <Button
              bg={theme.colors.primary}
              color="white"
              borderRadius="20px"
              maxW="20%"
              p="20px"
              onClick={(e) => {
                e.preventDefault();
                functions.addUser(adminId, tournamentIDTest, {
                  name: username,
                  phonenumber: phoneNum,
                });
              }}
            >
              Add User
            </Button>
          </HStack>
        </Box>
        {renderUsers()}
        <Box mx="200px" my="10px" p="20px">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input type="text" placeholder="Search" />
            <IconButton
              aria-label="Refresh List"
              colorScheme="blue"
              icon={<RepeatIcon />}
              onClick={(e) => {
                e.preventDefault();
                console.log(render);
                setRender(true);
              }}
            />
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
                    onClick={(e) => {
                      e.preventDefault();
                    }}
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
};

export default ViewTournamentUser;
