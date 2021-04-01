/* eslint-disable react/prop-types */
import { Flex, Heading, Image, Square } from '@chakra-ui/react';
import React from 'react';
import theme from '../core/theme';
import logo from '../assets/golf-logo.png';

const NormalBanner = ({ title }) => (
  <Flex bg={theme.colors.background}>
    <Square>
      <Image src={logo} boxSize="100px" objectFit="cover" />
    </Square>
    <Flex align="center" mx="10px">
      <Heading size="md">{title}</Heading>
    </Flex>
  </Flex>
);

export default NormalBanner;
