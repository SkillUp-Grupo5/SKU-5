import React, { useEffect } from "react";
import { Paper, Box, Container, Tooltip } from "@mui/material";
import { colors } from "../../../utils/colors";
import Title from "../../utils/Title";
import ButtonsContain from "../components/ButtonsContain";
import Display from "../components/Display";
import "./Balance.css";
import { useBalanceStore } from "../../../hooks/useBalanceStore";
const Balance = () => {
  const { addNewTotal } = useBalanceStore();
  useEffect(() => {
    addNewTotal();
  }, []);

  return (
    <Container className="container">
      <Paper
        elevation={2}
        square
        style={{ borderRadius: 20, padding: 30 }}
        className="paper"
      >
        <Title text="Mi saldo" font="h3" align="start" color={colors.white1} />
        <Display />
        <ButtonsContain />
      </Paper>
    </Container>
  );
};

export default Balance;
