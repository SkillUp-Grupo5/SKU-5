import { Paper, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";
import { useBalanceStore } from "../../../../hooks/useBalanceStore";
import { colors } from "../../../../utils/colors";
import Title from "../../../utils/Title";

export const ChartGraphic = () => {
  const { charges, expenses } = useBalanceStore();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Paper
      elevation={0}
      square
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: 5,
        marginLeft: sm ? 0 : 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <Title
        text="Grafico de balance"
        font={"h4"}
        weight={600}
        color={"#bcbcbb"}
        align="center"
      />
      <Chart
        style={{ marginBlock: sm ? 8 : 30 }}
        type="pie"
        width={sm ? "110%" : "180%"}
        height={"100%"}
        series={[expenses, charges]}
        options={{
          colors: ["#c80f0f", "#0fc837"],
          labels: ["gastos", "cargas"],
        }}
      ></Chart>
    </Paper>
  );
};
