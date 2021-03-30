import React, { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  Image,
  Text,
  Button,
  VStack,
  Container,
  Spacer,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Icon,
} from '@chakra-ui/react';
import { useHistory, useLocation } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { SearchIcon, AddIcon, CloseIcon } from '@chakra-ui/icons';
import firebase from 'firebase/app';
import logo from '../assets/golf-logo.png';
import firebaseFunction from '../firebase/functions';
import 'firebase/auth';
import TournamentInfoBox from '../component/TournamentInfoBox';

const AdminDashboard = () => {
  const history = useHistory();
  const location = useLocation();
  const [data, setData] = useState(
    location.state === undefined ? {} : location.state.detail
  );
  const [searchText, setSearchText] = useState('');

  const adminId = localStorage.getItem('adminId');
  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem('adminId');
        history.push({ pathname: '/admin' });
      });
  };

  const generateURL = (tournamentId) => {
    const qrData = { adminId: adminId, tournamentId: tournamentId };
    return `https://chart.googleapis.com/chart?cht=qr&chs=250x250&chl=${JSON.stringify(
      qrData
    )}`;
  };

  async function refreshData() {
    setData(
      await firebaseFunction
        .fetchRealtimeRank(adminId)
        .then((result) => (result === null ? {} : result))
    );
  }

  async function deleteTournamentAndRefresh(tournamentId) {
    await firebaseFunction.deleteTournament(adminId, tournamentId);
    await refreshData();
  }

  const renderTournamentBox = (tournamentId) => (
    <TournamentInfoBox
      data={data}
      tournamentId={tournamentId}
      qrCode={generateURL(tournamentId)}
      deleteTournament={deleteTournamentAndRefresh}
    />
  );

  const dataToRender = () => {
    if (searchText !== '') {
      return Object.keys(data).filter((tournamentId) =>
        data[tournamentId].name.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    return Object.keys(data);
  };

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <Box background="white">
      <Flex direction="column">
        <Flex background="#CFECC5" width="100%" height="100px">
          {Object.keys(data).length === 0 ? (
            ''
          ) : (
            <Button
              ml="20px"
              mt="30px"
              background="#80D2F1"
              borderRadius="20px"
              color="white"
              leftIcon={<AddIcon />}
              onClick={() => {
                history.push('/admin/create');
              }}
            >
              Create Tournament
            </Button>
          )}
          <Spacer />
          <Box>
            <Button
              mr="20px"
              mt="30px"
              background="#80D2F1"
              borderRadius="20px"
              color="white"
              leftIcon={<Icon as={FiLogOut} />}
              onClick={logOut}
            >
              Logout
            </Button>
          </Box>
        </Flex>
        <Image
          src={logo}
          boxSize="200px"
          objectFit="cover"
          position="absolute"
          left="50%"
          ml="-100px"
        />
        <Box mt="7" p="20px">
          <Box mx="300px" mt="50px" mb="20px">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Search tournament"
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
          </Box>
          <VStack>
            {Object.keys(data).length === 0 ? (
              <Container align="center" mt="100">
                <Button
                  width="auto"
                  height="100px"
                  border="3px dashed #7FD661"
                  borderRadius="20px"
                  align="center"
                  background="white"
                  onClick={() => {
                    history.push('/admin/create');
                  }}
                >
                  <Text color="#7FD661" fontSize="28px">
                    Create New Tournament
                  </Text>
                </Button>
                <Text color="rgba(127, 214, 97, 0.48)" fontSize="28px" mt="30">
                  There is no ongoing tournament
                </Text>
              </Container>
            ) : (
              dataToRender().map((tournamentId) =>
                renderTournamentBox(tournamentId)
              )
            )}
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default AdminDashboard;
