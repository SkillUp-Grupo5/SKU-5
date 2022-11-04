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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export const TableHome = () => {
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
            {rows.map(row => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right" sx={{ paddingRight: '1.5rem' }}>
                  {row.calories}
                </TableCell>
                <TableCell align="right" sx={{ paddingRight: '1.5rem' }}>
                  {row.fat}
                </TableCell>
                <TableCell align="right" sx={{ paddingRight: '1.5rem' }}>
                  {row.carbs}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
