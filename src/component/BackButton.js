/* eslint-disable react/prop-types */
import { Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import React from 'react';

const BackButton = ({ history }) => (
  <Button
    leftIcon={<ArrowBackIcon />}
    colorScheme="green"
    variant="ghost"
    onClick={(e) => {
      e.preventDefault();
      history.goBack();
    }}
  >
    Back
  </Button>
);

export default BackButton;
