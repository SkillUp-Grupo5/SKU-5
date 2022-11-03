import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

export const LayoutPage = ({ children }) => {
  return (
    <Box minWidth="100vh" bgcolor="#fff">
      {children}
    </Box>
  );
};
