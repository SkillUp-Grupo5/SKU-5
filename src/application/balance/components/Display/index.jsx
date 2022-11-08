import React from "react";
import { colors } from "../../../../utils/colors";
import Paper from "@mui/material/Paper";
import Title from "../../../utils/Title";
import { useBalanceStore } from "../../../../hooks/useBalanceStore";
import "./Display.css";
import { useMediaQuery, useTheme } from "@mui/material";
const Display = () => {
  const { total, expenses, charges } = useBalanceStore();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const xl = useMediaQuery(theme.breakpoints.down("xl"));
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <div
      style={{
        borderRadius: 20,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Paper
        elevation={3}
        square
        style={{
          width: sm ? "100%" : "100%",
          borderRadius: 20,
          marginTop: 10,
          marginBottom: 40,
        }}
        className="paper1"
      >
        <Title
          text={"Total disponible"}
          font={sm ? "h6" : "h4"}
          align="center"
          color={colors.white}
        />
        <Title
          text={total ? `$${total}.00` : 0.0}
          font={sm ? "h3" : "h2"}
          weight={600}
          color={colors.white1}
          align="center"
          shadow={true}
        />
      </Paper>

      <div
        style={{
          width: "100%",
          justifyContent: "space-between",
          display: "flex",
          flexDirection: sm ? "column" : "row",
        }}
      >
        <div
          className="paper2"
          style={{
            width: sm ? "100%" : "45%",
            borderRadius: 20,
            marginBottom: 20,
          }}
        >
          <Title
            text={"Cargas"}
            font={sm ? "h5" : "h4"}
            align="center"
            color={colors.white1}
          />
          <Title
            text={charges ? `$${charges}` : 0}
            font={sm ? "h4" : "h3"}
            weight={600}
            color={colors.white1}
            align="center"
            shadow={true}
          />
        </div>

        <div
          className="paper3"
          style={{
            width: sm ? "100%" : "45%",
            borderRadius: 20,
            marginBottom: 20,
          }}
        >
          <Title
            text={"Gastos"}
            font={sm ? "h5" : "h4"}
            align="center"
            color={colors.white1}
          />
          <Title
            text={expenses ? `$${expenses}` : 0}
            font={sm ? "h4" : "h3"}
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
