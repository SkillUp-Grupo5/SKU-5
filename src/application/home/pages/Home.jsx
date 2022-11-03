import React from "react";
import "../../../styles/globals.css";
import "../../../styles/application/home/pages/Home.css";
import { LayoutPage, UsersTable } from "../../utils";
import { Box } from "@mui/material";

export const Home = () => {
  return (
    <div className="App">
      <LayoutPage>
        <Box
          width="100%"
          height="50vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <UsersTable />
        </Box>
      </LayoutPage>
    </div>
  );
};
