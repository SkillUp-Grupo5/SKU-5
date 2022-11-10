import React, { useEffect, useState } from 'react';
import '../../../styles/globals.css';
import '../../../styles/application/home/pages/Home.css';
import { Box, Skeleton } from '@mui/material';
import { AccountActions } from '../components/AccountActions';
import { TableHome } from '../components/TableHome';
import { axiosClientToken } from '../../../helpers/axiosHelper';
import { showDeposits } from '../../../api/balance';
import { useSelector } from 'react-redux';

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const { total } = useSelector(state => state.balance);

  const [balance, setBalance] = useState(0);
  const getTransactions = async () => {
    try {
      const { data } = await axiosClientToken.get('/transactions');
      const allMovements = data.data;
      setTransactions(allMovements.slice(0, 5));
    } catch (error) {
      console.log(error);
    }
  };
  const getBalance = async () => {
    try {
      const deposits = await showDeposits();
      const { charges, expenses } = deposits;
      const totalBalance = charges - expenses;
      setBalance(totalBalance);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBalance();
    getTransactions();
  }, [total]);
  return (
    <div className="App">
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          height="80vh"
          sx={{ width: { xs: '95%', sm: '80%' } }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          {balance ? (
            <>
              <AccountActions balance={balance} />
              <TableHome transactions={transactions} />
            </>
          ) : (
            <>
              <Skeleton
                variant="rectangular"
                sx={{ height: { xs: '150px', md: '105px' }, display: 'flex' }}
              />
              <Skeleton
                variant="rectangular"
                sx={{ minHeight: '300px', marginTop: '4rem' }}
              />
            </>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default Home;
