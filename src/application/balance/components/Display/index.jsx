import React from "react";
import { colors } from "../../../../utils/colors";
import Paper from "@mui/material/Paper";
import Title from "../../../utils/Title";
import { useBalanceStore } from "../../../../hooks/useBalanceStore";
import "./Display.css";
import { ChartGraphic } from "../ChartGraphic";
const Display = () => {
  const { total, expenses, charges } = useBalanceStore();

  return (
    <div className="display">
      <Paper
        elevation={3}
        square
        style={{
          paddingInline: 10,
          paddingBlock: 10,
          borderRadius: 20,
          marginTop: 10,
          marginBottom: 40,
        }}
        className="paper1"
      >
        <Title
          text={"Total disponible"}
          font="h4"
          align="center"
          color={colors.white}
        />
        <Title
          text={total ? `$${total}.00` : 0.0}
          font="h1"
          weight={600}
          color={colors.white1}
          align="center"
          shadow={true}
        />
      </Paper>

      <div className="container">
        <div className="paper2">
          <Title
            text={"Cargas"}
            font="h5"
            align="center"
            color={colors.white1}
          />
          <Title
            text={charges ? `$${charges}` : 0}
            font="h3"
            weight={600}
            color={colors.white1}
            align="center"
            shadow={true}
          />
        </div>

        <div className="paper3">
          <Title
            text={"Gastos"}
            font="h5"
            align="center"
            color={colors.white1}
          />
          <Title
            text={expenses ? `$${expenses}` : 0}
            font="h3"
            weight={600}
            color={colors.white1}
            align="center"
            shadow={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Display;
