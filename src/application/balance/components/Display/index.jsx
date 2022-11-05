import React from "react";
import { colors } from "../../../../utils/colors";
import Paper from "@mui/material/Paper";
import Title from "../../../utils/Title";
import { useBalanceStore } from "../../../../hooks/useBalanceStore";
import "./Display.css";
const Display = () => {
  const { total, expenses, charges } = useBalanceStore();

  return (
    <div className="display">
      <Paper
        elevation={1}
        square
        style={{
          paddingInline: 40,
          paddingBlock: 20,
          borderRadius: 20,
          marginTop: 10,
          marginBottom: 20,
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
          color={colors.white1}
          align="center"
        />
      </Paper>

      <div className="container">
        <div>
          <Paper
            elevation={1}
            square
            style={{
              paddingInline: 100,
              paddingBlock: 20,
              borderRadius: 20,
              marginBottom: 20,
            }}
            className="paper2"
          >
            <Title
              text={"Cargas"}
              font="h5"
              align="center"
              color={colors.white}
            />
            <Title
              text={charges ? `$${charges}` : 0}
              font="h3"
              color={colors.white1}
              align="center"
            />
          </Paper>
        </div>
        <div>
          <Paper
            elevation={1}
            square
            style={{
              paddingInline: 100,
              paddingBlock: 20,
              borderRadius: 20,
              marginBottom: 20,
            }}
            className="paper2"
          >
            <Title
              text={"Gastos"}
              font="h5"
              align="center"
              color={colors.white}
            />
            <Title
              text={expenses ? `$${expenses}` : 0}
              font="h3"
              color={colors.white1}
              align="center"
            />
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Display;
