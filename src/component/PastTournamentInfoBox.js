/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  HStack,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Spinner,
  Stack,
  StackDivider,
  Text,
  Icon,
  Spacer,
  Heading,
  VStack,
  IconButton,
  Tooltip,
} from '@chakra-ui/react';
import { IoQrCodeOutline, IoPeople } from 'react-icons/io5';
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import theme from '../core/theme';

const TournamentInfoBox = ({ tournamentId, data }) => {
  const history = useHistory();
  const firstCol = ['01', '02', '03', '04', '05', '06'];
  const secondCol = ['07', '08', '09', '10', '11', '12'];
  const thirdCol = ['13', '14', '15', '16', '17', '18'];

  const holeArray = [firstCol, secondCol, thirdCol];

  return (
    <Box
      key={tournamentId}
      position="relative"
      width="auto"
      my="20px"
      borderRadius="20px"
      align="center"
      justifyItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      <Box
        padding="5"
        position="relative"
        background={theme.colors.secondary}
        width="70vw"
        height="auto"
        borderRadius="20px"
        align="center"
        justifyItems="center"
        overflowY="auto"
        justifyContent="center"
      >
        <HStack textAlign="left" mb="20px" spacing={5}>
          <Tooltip label="User List" placement="left" hasArrow>
            <IconButton
              position="relative"
              colorScheme="blue"
              aria-label="Search database"
              icon={<Icon as={IoPeople} />}
              onClick={(e) => {
                e.preventDefault();
                history.push('/users');
              }}
            />
          </Tooltip>
          <Heading color="white" size="lg" textAlign="left">
            {' '}
            {tournamentId}{' '}
          </Heading>
        </HStack>
        <HStack
          spacing={5}
          align="center"
          justify="center"
          divider={<StackDivider borderColor="grey.200" size="30" />}
        >
          {holeArray.map((column) => (
            <Stack spacing={2} align="center">
              <Box bg="white" p="3px" borderRadius="10px">
                <Stack direction="row" spacing={0} color="white">
                  <Box
                    background={theme.colors.secondary}
                    width="75px"
                    borderTopLeftRadius="7px"
                    borderBottomLeftRadius="7px"
                  >
                    <Text>Hole</Text>
                  </Box>
                  <Box width="75px" background={theme.colors.secondary}>
                    <Text>Par</Text>
                  </Box>
                  <Box
                    background={theme.colors.secondary}
                    width="75px"
                    borderTopRightRadius="7px"
                    borderBottomRightRadius="7px"
                  >
                    <Text>SI</Text>
                  </Box>
                </Stack>
              </Box>
              {column.map((holeNum, idx) => (
                <Box bg="white" p="3px" borderRadius="10px">
                  <Stack direction="row" spacing={0} key={holeNum}>
                    <Box
                      background={theme.colors.background}
                      width="75px"
                      borderTopLeftRadius="7px"
                      borderBottomLeftRadius="7px"
                    >
                      <Text>{holeNum}</Text>
                    </Box>
                    <Box background={theme.colors.lightBackground} width="75px">
                      <Text>{data[tournamentId][holeNum].par}</Text>
                    </Box>
                    <Box
                      background={theme.colors.lightBackground}
                      width="75px"
                      borderTopRightRadius="7px"
                      borderBottomRightRadius="7px"
                    >
                      <Text>{data[tournamentId][holeNum].strokeIndex}</Text>
                    </Box>
                  </Stack>
                </Box>
              ))}
            </Stack>
          ))}
        </HStack>
      </Box>
    </Box>
  );
};

export default TournamentInfoBox;
