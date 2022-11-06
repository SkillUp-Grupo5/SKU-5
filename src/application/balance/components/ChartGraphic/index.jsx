import React from "react";
import Chart from "react-apexcharts";
import { useBalanceStore } from "../../../../hooks/useBalanceStore";

export const ChartGraphic = () => {
  const { charges, expenses } = useBalanceStore();
  return (
    <Chart
      type="pie"
      width={449}
      height={380}
      series={[expenses, charges]}
      options={{
        colors: ["#c80f0f", "#0fc837"],
        labels: ["gastos", "cargas"],
      }}
    ></Chart>
  );
};
