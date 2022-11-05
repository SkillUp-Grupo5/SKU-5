import React, { useEffect, useState } from "react";

import { Box, Container, Typography } from "@mui/material";

import Tooltip from "@mui/material/Tooltip";

import IconButton from "@mui/material/IconButton";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { SendMoneyModal } from "./SendMoneyModal";

import { startGetUsers } from "../../../api/users";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#1976d2',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


export const UsersTable = () => {

  const [usersData, setUsersData] = useState([]);
  const [page, setPage] = useState(1);

  const [modalStatus, setModalStatus] = useState(false);
  const [activeUser, setActiveUser] = useState(null);

  const loadUsers = async (pagePath) => {
    const data = await startGetUsers(pagePath);

    setUsersData(data);
  };

  useEffect(() => {
    loadUsers(page);
  }, [page]);

  console.log(usersData);

  const handleNextPage = (e) => {
    e.preventDefault();

    setPage(page + 1);
  };

  const handlePreviusPage = (e) => {
    e.preventDefault();

    setPage(page - 1);
  };

  const handleSendMoney = (user) => {
    setActiveUser(user);
    setModalStatus(true);
  };

  return (
    <Box>
      <SendMoneyModal
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
        activeUser={activeUser}
      />
      <Container>
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Nombre</StyledTableCell>
                <StyledTableCell align="right">Apellido</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersData.users?.map((user) => (
                <StyledTableRow
                  key={user.id}
                  sx={{
                    "& .MuiSvgIcon-root": {
                      visibility: "hidden",
                    },
                    ":hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                      cursor: "pointer",
                      "& .MuiSvgIcon-root": {
                        visibility: "visible",
                      },
                    },
                  }}
                  onDoubleClick={() => handleSendMoney(user)}
                >
                  <StyledTableCell component="th" scope="row">
                    {user.first_name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {user.last_name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{user.email}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Tooltip title="Enviar dinero" arrow>
                      <IconButton
                        color="default"
                        component="span"
                        onClick={() => handleSendMoney(user)}
                      >
                        <AccountBalanceIcon />
                      </IconButton>
                    </Tooltip>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          width="100%"
          height="10vh"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ "& .MuiSvgIcon-root": { fontSize: "45px" } }}
        >
          <Tooltip title="Página anterior" arrow>
            <IconButton
              color="primary"
              component="span"
              disabled={usersData.previousPage === null ? true : false}
              onClick={handlePreviusPage}
            >
              <ArrowLeftIcon />
            </IconButton>
          </Tooltip>
          <Typography color="GrayText" fontSize="16px" variant="body2">
            Page {page}
          </Typography>
          <Tooltip title="Página siguiente" arrow>
            <IconButton
              color="primary"
              component="span"
              disabled={usersData.nextPage === null ? true : false}
              onClick={handleNextPage}
            >
              <ArrowRightIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Container>
    </Box>
  );
};
