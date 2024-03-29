import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Button,
  HStack,
  Input,
  Table,
  Tbody,
  Tr,
  Td,
  IconButton,
  Text,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverFooter,
  Popover,
  InputLeftElement,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import {
  AddIcon,
  DeleteIcon,
  RepeatIcon,
  SearchIcon,
  CloseIcon,
} from '@chakra-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';

import NormalBanner from '../component/NormalBanner';
import BackButton from '../component/BackButton';

import functions from '../firebase/functions';
import 'firebase/auth';

import theme from '../core/theme';

const ViewTournamentUser = () => {
  const history = useHistory();
  const location = useLocation();
  const [adding, setAdding] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [searchText, setSearchText] = useState('');

  const [username, setUsername] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const adminId = localStorage.getItem('adminId');
  const [data, setData] = useState(
    location.state === undefined ? history.goBack : location.state.detail
  );
  const { tournamentId } = location.state;

  const usernameValidator = (_username) => {
    if (!_username || _username.length <= 0) return 'Username cannot be empty!';
    return '';
  };

  const phoneNumberValidator = (_phoneNum) => {
    const regex = /^(\+\d{2}( )?)?(\d{2,3})[- .]?\d{3}[- .]?\d{4}$/;
    if (!_phoneNum || _phoneNum.length <= 0)
      return 'Phone number cannot be empty!';
    if (!regex.test(_phoneNum)) return 'Invalid phone number!';
    return '';
  };

  async function refreshData() {
    setData(
      await functions
        .fetchRealtimeRank(adminId)
        .then((result) => (result === null ? {} : result))
    );
  }

  async function addAndFetchNewData() {
    const usernameError = usernameValidator(username);
    const phoneNumError = phoneNumberValidator(phoneNum);

    if (usernameError || phoneNumError) {
      alert(`${usernameError}\n${phoneNumError}`);
      return;
    }

    await functions.addUser(adminId, tournamentId, {
      name: username,
      phonenumber: phoneNum,
    });
    setUsername('');
    setPhoneNum('');
    await refreshData();
  }

  async function deleteAndFetchNewData(uID) {
    await functions.deleteUser(adminId, tournamentId, uID);
    await refreshData();
  }

  const dataToRender = () => {
    const userData = Object.keys(data[tournamentId]).filter(
      (userId) =>
        userId !== 'isComplete' && userId !== 'name' && userId !== '000'
    );
    if (searchText !== '') {
      return userData.filter((userId) =>
        data[tournamentId][userId].name
          .toLowerCase()
          .includes(searchText.toLowerCase())
      );
    }
    return userData;
  };

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <Box width="100vw">
      <NormalBanner title="View Tournament Users" />
      <Flex bg="white" direction="column">
        <Box mx="20px" my="10px" position="absolute">
          <BackButton history={history} />
        </Box>
        <Box
          ml={{ lg: '200px', sm: '120px' }}
          mr={{ lg: '200px', md: '100px' }}
          my="20px"
          borderRadius="20px"
          p="20px"
          bg={theme.colors.secondary}
        >
          <HStack spacing="20px" justify="center">
            <Input
              background="white"
              type="text"
              placeholder="Username"
              maxW="30%"
              onChangeCapture={(event) => setUsername(event.target.value)}
              value={username}
            />
            <Input
              background="white"
              type="tel"
              placeholder="Phone Number"
              maxW="30%"
              onChangeCapture={(event) => setPhoneNum(event.target.value)}
              value={phoneNum}
            />
            <Button
              bg={theme.colors.primary}
              color="white"
              borderRadius="20px"
              maxW="20%"
              p="20px"
              leftIcon={<AddIcon />}
              isLoading={adding}
              loadingText="Adding"
              onClick={(e) => {
                e.preventDefault();
                setAdding(true);
                addAndFetchNewData().then(() => setAdding(false));
              }}
            >
              Add User
            </Button>
            <Button
              ml="15px"
              p="20px"
              borderRadius="20px"
              aria-label="Refresh List"
              bg={theme.colors.primary}
              color="white"
              leftIcon={<RepeatIcon />}
              isLoading={refreshing}
              loadingText="Refreshing"
              onClick={(e) => {
                e.preventDefault();
                setRefreshing(true);
                refreshData().then(() => setRefreshing(false));
              }}
            >
              Refresh
            </Button>
          </HStack>
        </Box>
        <Box mx={{ lg: '300px', md: '150px' }} my="10px">
          <InputGroup mb="20px">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search user"
              onChangeCapture={(event) => setSearchText(event.target.value)}
              value={searchText}
            />
            <InputRightElement>
              <Button
                variant="ghost"
                color="gray.300"
                borderRadius="100px"
                size="sm"
                onClick={(e) => {
                  e.preventDefault();
                  setSearchText('');
                }}
              >
                <CloseIcon />
              </Button>
            </InputRightElement>
          </InputGroup>
          <Table variant="simple">
            <Tbody>
              {Object.keys(data[tournamentId]).length > 3 ? ( // check if there are users other than default user, the fields isComplete and name
                dataToRender().map((userId) => (
                  <Tr key={userId}>
                    <Td maxW="200px">{data[tournamentId][userId].name}</Td>
                    <Td textAlign="center">
                      {data[tournamentId][userId].phonenumber}
                    </Td>
                    <Td>
                      {' '}
                      <Popover placement="right" maxW="100px">
                        <PopoverTrigger>
                          <IconButton
                            aria-label="Delete user"
                            colorScheme="red"
                            icon={<DeleteIcon />}
                          />
                        </PopoverTrigger>
                        <Portal>
                          <PopoverContent>
                            <PopoverArrow />
                            <PopoverHeader align="center">
                              Delete {data[tournamentId][userId].name} ?
                            </PopoverHeader>
                            <PopoverCloseButton />
                            <PopoverFooter align="center">
                              <Button
                                colorScheme="red"
                                borderRadius="10px"
                                isLoading={deleting}
                                loadingText="Deleting"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setDeleting(true);
                                  deleteAndFetchNewData(userId).then(() =>
                                    setDeleting(false)
                                  );
                                }}
                              >
                                Delete
                              </Button>
                            </PopoverFooter>
                          </PopoverContent>
                        </Portal>
                      </Popover>{' '}
                    </Td>
                  </Tr>
                ))
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
