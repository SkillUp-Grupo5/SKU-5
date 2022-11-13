/** Libraries */
import {
  Box,
  Button,
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
import { Link as LinkRouter } from 'react-router-dom';

export const TableHome = ({ transactions }) => {
  return (
    <Box marginY={4}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        marginY={1}
      >
        <Typography
          variant="h5"
          color="#999"
          sx={{ fontSize: { xs: 15, lg: 20 } }}
        >
          Ultimos Movimientos
        </Typography>
        <Link as={LinkRouter} to="/movements" underline="none">
          <Button sx={{ fontSize: { xs: 12, lg: 16 } }}>Más movimientos</Button>
        </Link>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead bgcolor="#1976D2">
            <TableRow>
              <TableCell
                sx={{ color: 'white', fontWeight: '600', paddingX: '0.5rem' }}
              >
                Concepto
              </TableCell>

              <TableCell
                sx={{ color: 'white', fontWeight: '600', paddingX: '0.5rem' }}
                align="center"
              >
                Monto
              </TableCell>
              <TableCell
                sx={{ color: 'white', fontWeight: '600', paddingX: '0.5rem' }}
                align="center"
              >
                Tipo
              </TableCell>
              <TableCell
                sx={{ color: 'white', fontWeight: '600', paddingY: '1rem' }}
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
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ padding: '0.5rem' }}
                >
                  {transaction.concept}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ paddingX: '0.5rem', paddingY: '0.8rem' }}
                >
                  {transaction.amount}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ paddingX: '0.5rem', paddingY: '0.8rem' }}
                >
                  {transaction.type === 'topup' ? 'Ingreso' : 'Egreso'}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ paddingX: '0.5rem', paddingY: '0.8rem' }}
                >
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
