import React from "react";
import { Paper, Box, Container, Tooltip } from "@mui/material";
import { colors } from "../../../utils/colors";
import Title from "../../utils/Title";
import ButtonsContain from "../components/ButtonsContain";
import Display from "../components/Display";
import "./Balance.css";
const Balance = () => {
  return (
    <Container className="container">
      <Paper
        elevation={3}
        square
        style={{ borderRadius: 20, padding: 40 }}
        className="paper"
      >
        <Title text="Balance" font="h1" align="center" />
        <Display charges={600} expenses={200} />
        <ButtonsContain />
      </Paper>
    </Container>
  );
};

export default Balance;
