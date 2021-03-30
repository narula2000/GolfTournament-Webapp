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
} from '@chakra-ui/react';
import { IoQrCodeOutline, IoPeople } from 'react-icons/io5';
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import theme from '../core/theme';

const TournamentInfoBox = ({
  tournamentId,
  data,
  qrCode,
  deleteTournament,
}) => {
  const history = useHistory();

  const [deleteLoading, setDeleteLoading] = useState(false);
  const firstCol = ['01', '02', '03', '04', '05', '06'];
  const secondCol = ['07', '08', '09', '10', '11', '12'];
  const thirdCol = ['13', '14', '15', '16', '17', '18'];

  const holeArray = [firstCol, secondCol, thirdCol];

  return (
    <Box
      key={tournamentId}
      padding="5"
      position="relative"
      background="#7FD661"
      width="auto"
      height="auto"
      my="20px"
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
            {column.map((holeNum) => (
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
                  <Box background="#F3FDF1" width="75px">
                    <Text>{data[tournamentId]['000'].holes[holeNum].par}</Text>
                  </Box>
                  <Box
                    background="#F3FDF1"
                    width="75px"
                    borderTopRightRadius="7px"
                    borderBottomRightRadius="7px"
                  >
                    <Text>
                      {data[tournamentId]['000'].holes[holeNum].strokeIndex}
                    </Text>
                  </Box>
                </Stack>
              </Box>
            ))}
          </Stack>
        ))}
        <Stack spacing={3} align="center">
          <Popover placement="left">
            <PopoverTrigger>
              <Button
                width="150px"
                background="#80D2F1"
                borderRadius="20px"
                color="white"
                leftIcon={<Icon as={IoQrCodeOutline} />}
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
            leftIcon={<CheckIcon />}
          >
            Completed
          </Button>
          <Button
            width="150px"
            background="#80D2F1"
            borderRadius="20px"
            color="white"
            leftIcon={<Icon as={IoPeople} />}
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
          <Popover placement="left">
            <PopoverTrigger>
              <Button
                width="150px"
                colorScheme="red"
                borderRadius="20px"
                leftIcon={<DeleteIcon />}
              >
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
                      setDeleteLoading(true);
                      deleteTournament(tournamentId).then(() => {
                        setDeleteLoading(false);
                      });
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
