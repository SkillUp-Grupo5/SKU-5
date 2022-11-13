/** Libraries */
import React from 'react';
import { Box, Skeleton } from '@mui/material';

/** Components */
import { AccountActions } from '../components/AccountActions';
import { TableHome } from '../components/TableHome';

/** Custom hooks */
import { useOperationsStore } from '../../../hooks';

/** Styles */
import '../../../styles/globals.css';
import '../../../styles/application/home/pages/Home.css';

const Home = () => {
  const { transactions, balance } = useOperationsStore();

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
              <AccountActions balance={balance.total} />
              <TableHome transactions={transactions.data.slice(0, 5)} />
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
