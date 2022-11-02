import { Box, Container } from '@mui/material';
import React from 'react';

export const LayoutPage = ({ children }) => {
  return (
    <Box minHeight="100vh" bgcolor="#fff">
      <Container maxWidth="xl">{children}</Container>
    </Box>
  );
};
