import React, { useEffect } from "react";
import { Paper, Box, Container, Tooltip } from "@mui/material";
import { colors } from "../../../utils/colors";
import Title from "../../utils/Title";
import ButtonsContain from "../components/ButtonsContain";
import Display from "../components/Display";
import "./Balance.css";
import { useBalanceStore } from "../../../hooks/useBalanceStore";
import { ChartGraphic } from "../components/ChartGraphic";
const Balance = () => {
  const { addNewTotal } = useBalanceStore();
  useEffect(() => {
    addNewTotal();
  }, []);

  return (
    <Container className="container">
      <Paper
        elevation={3}
        square
        style={{ borderRadius: 20, padding: 30 }}
        className="paper"
      >
        <Title
          text="Mi saldo"
          font="h4"
          align="start"
          weight={600}
          color={colors.grey2}
        />
        <Display />
        <ButtonsContain />
      </Paper>
      <Paper elevation={3} square className="graphic">
        <Title
          text="Grafico de balance"
          font="h4"
          weight={600}
          color={colors.grey2}
          align="center"
        />
        <ChartGraphic />
      </Paper>
    </Container>
  );
};

export default Balance;
