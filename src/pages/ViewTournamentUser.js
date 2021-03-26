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
  Text,
} from '@chakra-ui/react';
import {
  ArrowBackIcon,
  SearchIcon,
  DeleteIcon,
  RepeatIcon,
} from '@chakra-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';

import functions from '../firebase/functions';
import 'firebase/auth';

import theme from '../core/theme';
import logo from '../assets/golf-logo.png';

const ViewTournamentUser = () => {
  const history = useHistory();
  const location = useLocation();
  const [username, setName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const adminId = localStorage.getItem('adminId');
  const [data, setData] = useState(location.state.detail);
  const tournamentId = Object.keys(data)[0];
  const [refresh, setRefresh] = useState(false);

  async function refreshData() {
    setData(
      await functions.fetchRealtimeRank(adminId).then((result) => result)
    );
  }

  async function addAndFetchNewData() {
    await functions.addUser(adminId, tournamentId, {
      name: username,
      phonenumber: phoneNum,
    });
    await refreshData();
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
            onClick={(e) => {
              e.preventDefault();
              history.go(-1);
            }}
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
                addAndFetchNewData();
              }}
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
            <IconButton
              aria-label="Refresh List"
              colorScheme="blue"
              icon={<RepeatIcon />}
              onClick={(e) => {
                e.preventDefault();
                refreshData();
              }}
            />
          </InputGroup>
          <Table variant="simple">
            <Tbody>
              {Object.keys(data[tournamentId]).length > 4 ? ( // check there are users other than Mai's mock user, default user, and the fields isCompelte and name
                Object.keys(data[tournamentId]).map((userId) =>
                  userId !== 'isComplete' && userId !== 'name' ? (
                    <Tr key={userId}>
                      <Td>{data[tournamentId][userId].name}</Td>
                      <Td>{data[tournamentId][userId].phonenumber}</Td>
                      <Td>
                        {' '}
                        <IconButton
                          aria-label="Delete user"
                          colorScheme="red"
                          icon={<DeleteIcon />}
                        />{' '}
                      </Td>
                    </Tr>
                  ) : (
                    ''
                  )
                )
              ) : (
                <Flex
                  justify="center"
                  align="center"
                  my="20px"
                  color="gray.400"
                >
                  <Text fontSize="xl">There are no users!</Text>
                </Flex>
              )}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
};

export default ViewTournamentUser;
