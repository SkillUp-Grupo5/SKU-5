import React, { useEffect, useState } from "react";
import "../../../styles/globals.css";
import "../../../styles/application/home/pages/Home.css";
import { Box } from "@mui/material";
import { AccountActions } from "../components/AccountActions";
import { TableHome } from "../components/TableHome";
import { useOperationsStore } from "../../../hooks";
const Home = () => {
  const { transactions, balance } = useOperationsStore();

  if (!transactions.data || !balance.total) return;

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
          sx={{ width: { xs: "95%", sm: "80%" } }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <AccountActions balance={balance.total} />
          <TableHome transactions={transactions.data.slice(0, 5)} />
        </Box>
      </Box>
    </div>
  );
};

export default Home;
