import {
  Box,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { Link as LinkRouter } from 'react-router-dom';
import Buttom from '../../utils/Buttom';

export const TableHome = ({ transactions }) => {
  return (
    <Box marginTop={4}>
      <Box
        display="flex"
        alignItems="end"
        justifyContent="space-between"
        marginY={1}
      >
        <Typography variant="h5" color="#999">
          Ultimos Movimientos
        </Typography>
        <Link as={LinkRouter} to="/movements" underline="none">
          <Buttom text="Ver más movimientos" />
        </Link>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead bgcolor="#1976D2">
            <TableRow>
              <TableCell sx={{ color: 'white', fontWeight: '600' }}>
                Concepto
              </TableCell>

              <TableCell
                sx={{ color: 'white', fontWeight: '600' }}
                align="right"
              >
                Monto
              </TableCell>
              <TableCell
                sx={{ color: 'white', fontWeight: '600' }}
                align="right"
              >
                Tipo
              </TableCell>
              <TableCell
                sx={{ color: 'white', fontWeight: '600' }}
                align="right"
              >
                Fecha
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map(transaction => (
              <TableRow
                key={transaction.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {transaction.concept}
                </TableCell>
                <TableCell align="right" sx={{ paddingRight: '1rem' }}>
                  {transaction.amount}
                </TableCell>
                <TableCell align="right" sx={{ paddingRight: '1rem' }}>
                  {transaction.type === 'topup' ? 'Ingreso' : 'Egreso'}
                </TableCell>
                <TableCell align="right" sx={{ paddingRight: '1rem' }}>
                  {new Date(transaction.date).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
