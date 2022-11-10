import { Button, Card, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';

export const AccountActions = ({ balance }) => {
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
            ${balance}
          </Typography>
        </Box>
        <Box display="flex" alignItems="end" gap={2} paddingTop={2}>
          <Link as={LinkRouter} to="/balance" underline="none">
            <Button variant="contained" sx={{ fontSize: { xs: 12, md: 14 } }}>
              Ingresar Dinero
            </Button>
          </Link>
          <Link as={LinkRouter} to="/users" underline="none">
            <Button variant="contained" sx={{ fontSize: { xs: 12, md: 14 } }}>
              Enviar Dinero
            </Button>
          </Link>
        </Box>
      </Box>
    </Card>
  );
};
