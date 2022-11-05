import React from "react";

import { Box } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import Footer from "./Footer";
import { Navbar } from "./Navbar";

export const LayoutPage = ({ children }) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box bgcolor="#fff">
      {
        !sm ? <Navbar /> : <></> // Insert a movil navbar here
      }

      {children}
      <Footer />
    </Box>
  );
};
