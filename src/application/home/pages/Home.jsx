import React, { useEffect, useState } from 'react';
import '../../../styles/globals.css';
import '../../../styles/application/home/pages/Home.css';
import { UsersTable } from '../../utils';
import { Box, Container } from '@mui/material';
import { AccountActions } from '../components/AccountActions';
import { TableHome } from '../components/TableHome';
import { axiosClientToken } from '../../../helpers/axiosHelper';

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const getTransactions = async () => {
    try {
      const {
        data: { data },
      } = await axiosClientToken.get('/transactions');
      setTransactions(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);
  console.log(transactions);
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
              <TableHome transactions={transactions} />
            </Box>
          </Box>
        </Container>
        {/* <UsersTable /> */}
      </Box>
    </div>
  );
};

export default Home;
