import { Button, Card, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link as LinkRouter } from 'react-router-dom';
import Buttom from '../../utils/Buttom';

export const AccountActions = () => {
  const { total, charges, expenses } = useSelector(state => state.balance);

  return (
    <Card width="100%">
      <Box
        padding={2}
        display="flex"
        justifyContent="space-between"
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box display="flex" flexDirection="column" textAlign="left">
          <Typography variant="h6" color="#999">
            Saldo:
          </Typography>
          <Typography variant="h4" color="primary">
            ${total}
          </Typography>
        </Box>
        <Box display="flex" alignItems="end" gap={2} paddingTop={2}>
          <Link as={LinkRouter} to="/balance" underline="none">
            <Button variant="contained" sx={{ fontSize: { xs: 12, md: 14 } }}>
              Depositar
            </Button>
          </Link>
          <Link as={LinkRouter} to="/transactions" underline="none">
            <Button variant="contained" sx={{ fontSize: { xs: 12, md: 14 } }}>
              Transferir
            </Button>
          </Link>
        </Box>
      </Box>
    </Card>
  );
};
