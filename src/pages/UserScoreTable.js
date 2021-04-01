import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Table,
  Thead,
  Tbody,
  Td,
  Th,
  Tr,
} from '@chakra-ui/react';
import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router-dom';
import NormalBanner from '../component/NormalBanner';
import BackButton from '../component/BackButton';
import theme from '../core/theme';

const UserScoreTable = () => {
  const history = useHistory();
  const [searchText, setSearchText] = useState('');

  const firstCol = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];
  const secondCol = ['10', '11', '12', '13', '14', '15', '16', '17', '18'];

  const mockData = {
    User1: {
      hole01: 1,
      hole02: 2,
      hole03: 3,
      hole04: 4,
      hole05: 5,
      hole06: 6,
      hole07: 7,
      hole08: 8,
      hole09: 9,
      hole10: 10,
      hole11: 11,
      hole12: 12,
      hole13: 13,
      hole14: 14,
      hole15: 15,
      hole16: 16,
      hole17: 17,
      hole18: 18,
    },
    User2: {
      hole01: 18,
      hole02: 17,
      hole03: 16,
      hole04: 15,
      hole05: 14,
      hole06: 13,
      hole07: 12,
      hole08: 11,
      hole09: 10,
      hole10: 9,
      hole11: 8,
      hole12: 7,
      hole13: 6,
      hole14: 5,
      hole15: 4,
      hole16: 3,
      hole17: 2,
      hole18: 1,
    },
    User3: {
      hole01: 1,
      hole02: 2,
      hole03: 3,
      hole04: 4,
      hole05: 5,
      hole06: 6,
      hole07: 7,
      hole08: 8,
      hole09: 9,
      hole10: 10,
      hole11: 11,
      hole12: 12,
      hole13: 13,
      hole14: 14,
      hole15: 15,
      hole16: 16,
      hole17: 17,
      hole18: 18,
    },
    User4: {
      hole01: 18,
      hole02: 17,
      hole03: 16,
      hole04: 15,
      hole05: 14,
      hole06: 13,
      hole07: 12,
      hole08: 11,
      hole09: 10,
      hole10: 9,
      hole11: 8,
      hole12: 7,
      hole13: 6,
      hole14: 5,
      hole15: 4,
      hole16: 3,
      hole17: 2,
      hole18: 1,
    },
  };

  return (
    <Box width="100vw">
      <NormalBanner title="Tournament Score Table" />
      <Flex bg="white" direction="column">
        <Box mx="20px" my="10px" position="absolute">
          <BackButton history={history} />
        </Box>
        <Box mx={{ lg: '300px', md: '150px' }} my="10px">
          <InputGroup>
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
        </Box>
        <Box mx="20px" my="10px">
          <Table variant="simple" colorScheme="whatsapp">
            <Thead>
              <Tr>
                <Th textAlign="center">User</Th>
                <Th colSpan={9} textAlign="center">
                  Holes
                </Th>
                <Th textAlign="center">Total Score</Th>
              </Tr>
            </Thead>
            {Object.keys(mockData).map((user) => (
              <Tbody>
                <Tr key={user} bg={theme.colors.background}>
                  <Td rowSpan={4} width="250px" bg="white">
                    {user}
                  </Td>
                  {firstCol.map((header) => (
                    <Th textAlign="center" fontSize="15px">
                      {header}
                    </Th>
                  ))}
                  <Td rowSpan={4} bg="white" textAlign="center">
                    100
                  </Td>
                </Tr>
                <Tr>
                  {Object.keys(mockData[user])
                    .slice(0, 9)
                    .map((hole) => (
                      <Td textAlign="center">{mockData[user][hole]}</Td>
                    ))}
                </Tr>
                <Tr bg={theme.colors.background}>
                  {secondCol.map((header) => (
                    <Th textAlign="center" fontSize="15px">
                      {header}
                    </Th>
                  ))}
                </Tr>
                <Tr>
                  {Object.keys(mockData[user])
                    .slice(9, 18)
                    .map((hole) => (
                      <Td textAlign="center">{mockData[user][hole]}</Td>
                    ))}
                </Tr>
              </Tbody>
            ))}
          </Table>
        </Box>
      </Flex>
    </Box>
  );
};

export default UserScoreTable;
