import React from 'react';
import '../../../styles/globals.css';
import '../../../styles/application/home/pages/Home.css';
import { UsersTable } from '../../utils';
import { Box, Container } from '@mui/material';
import { AccountActions } from '../components/AccountActions';
import { TableHome } from '../components/TableHome';

const Home = () => {
  return (
    <div className="App">
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Container maxWidth="md">
          <Box height="90vh" padding={4}>
            <Box width="100%">
              <AccountActions />
              <TableHome />
            </Box>
          </Box>
        </Container>
        {/* <UsersTable /> */}
      </Box>
    </div>
  );
};

export default Home;
