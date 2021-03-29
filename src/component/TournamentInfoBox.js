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
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebaseFunction from '../firebase/functions';

const TournamentInfoBox = ({
  tournamentId,
  data,
  qrCode,
  deleteTournament,
}) => {
  const history = useHistory();

  const [deleteLoading, setDeleteLoading] = useState(false);
  const firstNine = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];
  const secondNine = ['10', '11', '12', '13', '14', '15', '16', '17', '18'];

  return (
    <Box
      key={tournamentId}
      padding="5"
      position="relative"
      background="#7FD661"
      width="auto"
      height="auto"
      mt="20"
      borderRadius="20px"
      align="center"
      justifyItems="center"
      overflowY="auto"
      justifyContent="center"
    >
      <Text color="white" fontSize="26px" mb="5">
        {' '}
        {data[tournamentId].name}{' '}
      </Text>
      <HStack
        spacing={5}
        align="center"
        justify="center"
        divider={<StackDivider borderColor="grey.200" size="30" />}
      >
        <Stack spacing={3} align="center">
          {firstNine.map((holeNum) => (
            <Stack direction="row" spacing={3} key={holeNum}>
              <Box background="white" width="100px">
                <Text>Hole: {holeNum}</Text>
              </Box>
              <Box background="white" width="100px">
                <Text>
                  Par:
                  {data[tournamentId]['000'].holes[holeNum].par}
                </Text>
              </Box>
              <Box background="white" width="100px">
                <Text>
                  SI: {data[tournamentId]['000'].holes[holeNum].strokeIndex}
                </Text>
              </Box>
            </Stack>
          ))}
        </Stack>
        <Stack spacing={3} align="center">
          {secondNine.map((holeNum) => (
            <Stack direction="row" spacing={3} key={holeNum}>
              <Box background="white" width="100px">
                <Text>Hole: {holeNum}</Text>
              </Box>
              <Box background="white" width="100px">
                <Text>
                  Par:
                  {data[tournamentId]['000'].holes[holeNum].par}
                </Text>
              </Box>
              <Box background="white" width="100px">
                <Text>
                  SI: {data[tournamentId]['000'].holes[holeNum].strokeIndex}
                </Text>
              </Box>
            </Stack>
          ))}
        </Stack>
        <Stack spacing={3} align="center">
          <Popover>
            <PopoverTrigger>
              <Button
                width="150px"
                background="#80D2F1"
                borderRadius="20px"
                color="white"
              >
                View QR Code
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>
                  QR Code for {data[tournamentId].name}
                </PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody align="center">
                  <Image src={qrCode} alt="QR Code" />
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
          <Button
            width="150px"
            background="#80D2F1"
            borderRadius="20px"
            color="white"
          >
            Completed
          </Button>
          <Button
            width="150px"
            background="#80D2F1"
            borderRadius="20px"
            color="white"
            onClick={(e) => {
              e.preventDefault();
              history.push({
                pathname: '/admin/tournamentuser',
                state: { detail: data, tournamentId: tournamentId },
              });
            }}
          >
            User List
          </Button>
          <Popover>
            <PopoverTrigger>
              <Button width="150px" colorScheme="red" borderRadius="20px">
                Delete
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>
                  Do you want to delete {data[tournamentId].name} ?
                </PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody align="center">
                  <Button
                    width="200px"
                    colorScheme="red"
                    borderRadius="20px"
                    disabled={deleteLoading}
                    onClick={(e) => {
                      e.preventDefault();
                      // setDeleteLoading(true);
                      // deleteTournament.then(() => {
                      //   setDeleteLoading(false);
                      // });
                    }}
                  >
                    {deleteLoading ? <Spinner /> : 'Yes'}
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
        </Stack>
      </HStack>
    </Box>
  );
};

export default TournamentInfoBox;
