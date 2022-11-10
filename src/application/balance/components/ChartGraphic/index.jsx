import { Paper, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";
import { useOperationsStore } from "../../../../hooks";
import Title from "../../../utils/Title";

export const ChartGraphic = () => {
  const { balance } = useOperationsStore();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  const xl = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <Paper
      elevation={0}
      square
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: 5,
        marginLeft: sm ? 0 : md ? 0 : lg ? 0 : 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "transparent",
        paddingTop: md ? 2 : 0,
      }}
    >
      <Title
        text={"Grafico de balance"}
        font={"h4"}
        weight={600}
        color={"#bcbcbb"}
      />
      <Chart
        style={{ marginBlock: sm ? 8 : 20 }}
        type="pie"
        width={sm ? "110%" : xl ? "120%" : "100%"}
        height={"100%"}
        series={[balance.expenses, balance.charges]}
        options={{
          colors: ["#c80f0f", "#0fc837"],
          labels: ["gastos", "cargas"],
        }}
      ></Chart>
    </Paper>
  );
};
