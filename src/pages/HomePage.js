import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  VStack,
} from '@chakra-ui/react';
import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import NormalBanner from '../component/NormalBanner';
import PastTournamentInfoBox from '../component/PastTournamentInfoBox';

const HomePage = () => {
  const [searchText, setSearchText] = useState('');

  const mockData = {
    Tournament1: {
      '01': { par: 1, strokeIndex: 1 },
      '02': { par: 2, strokeIndex: 2 },
      '03': { par: 3, strokeIndex: 3 },
      '04': { par: 4, strokeIndex: 4 },
      '05': { par: 5, strokeIndex: 5 },
      '06': { par: 6, strokeIndex: 6 },
      '07': { par: 7, strokeIndex: 7 },
      '08': { par: 8, strokeIndex: 8 },
      '09': { par: 9, strokeIndex: 9 },
      10: { par: 10, strokeIndex: 10 },
      11: { par: 11, strokeIndex: 11 },
      12: { par: 12, strokeIndex: 12 },
      13: { par: 13, strokeIndex: 13 },
      14: { par: 14, strokeIndex: 14 },
      15: { par: 15, strokeIndex: 15 },
      16: { par: 16, strokeIndex: 16 },
      17: { par: 17, strokeIndex: 17 },
      18: { par: 18, strokeIndex: 18 },
    },
    Tournament2: {
      '01': { par: 1, strokeIndex: 1 },
      '02': { par: 2, strokeIndex: 2 },
      '03': { par: 3, strokeIndex: 3 },
      '04': { par: 4, strokeIndex: 4 },
      '05': { par: 5, strokeIndex: 5 },
      '06': { par: 6, strokeIndex: 6 },
      '07': { par: 7, strokeIndex: 7 },
      '08': { par: 8, strokeIndex: 8 },
      '09': { par: 9, strokeIndex: 9 },
      10: { par: 10, strokeIndex: 10 },
      11: { par: 11, strokeIndex: 11 },
      12: { par: 12, strokeIndex: 12 },
      13: { par: 13, strokeIndex: 13 },
      14: { par: 14, strokeIndex: 14 },
      15: { par: 15, strokeIndex: 15 },
      16: { par: 16, strokeIndex: 16 },
      17: { par: 17, strokeIndex: 17 },
      18: { par: 18, strokeIndex: 18 },
    },
    Tournament3: {
      '01': { par: 1, strokeIndex: 1 },
      '02': { par: 2, strokeIndex: 2 },
      '03': { par: 3, strokeIndex: 3 },
      '04': { par: 4, strokeIndex: 4 },
      '05': { par: 5, strokeIndex: 5 },
      '06': { par: 6, strokeIndex: 6 },
      '07': { par: 7, strokeIndex: 7 },
      '08': { par: 8, strokeIndex: 8 },
      '09': { par: 9, strokeIndex: 9 },
      10: { par: 10, strokeIndex: 10 },
      11: { par: 11, strokeIndex: 11 },
      12: { par: 12, strokeIndex: 12 },
      13: { par: 13, strokeIndex: 13 },
      14: { par: 14, strokeIndex: 14 },
      15: { par: 15, strokeIndex: 15 },
      16: { par: 16, strokeIndex: 16 },
      17: { par: 17, strokeIndex: 17 },
      18: { par: 18, strokeIndex: 18 },
    },
  };

  return (
    <Box background="white" overflow="hidden">
      <NormalBanner title="Past Tournaments" />
      <Flex direction="column">
        <Box p="20px">
          <Box mx="25vw" mb="20px">
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
            {Object.keys(mockData).map((tournament) => (
              <PastTournamentInfoBox
                tournamentId={tournament}
                data={mockData}
              />
            ))}
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default HomePage;
