import React, { useEffect } from "react";
import { Paper, Container } from "@mui/material";
import { colors } from "../../../utils/colors";
import Title from "../../utils/Title";
import ButtonsContain from "../components/ButtonsContain";
import Display from "../components/Display";
import { useBalanceStore } from "../../../hooks/useBalanceStore";
import { useTheme } from "@mui/material/styles";
import { ChartGraphic } from "../components/ChartGraphic";
import useMediaQuery from "@mui/material/useMediaQuery";
import SkeletonBalance from "../components/SkeletonBalance";
import { useState } from "react";
const Balance = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const xl = useMediaQuery(theme.breakpoints.down("xl"));
  const [loaded, setloaded] = useState();
  const load = () => {
    setTimeout(() => {
      setloaded(!loaded);
    }, 1300);
  };
  const { addNewTotal } = useBalanceStore();
  useEffect(() => {
    addNewTotal();
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loaded ? (
        <Container
          className={"graphic"}
          sx={{
            width: "100%",
            height: sm ? "0%" : "100%",
            flexDirection: sm ? "column" : "row",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: sm ? -10 : "3%",
            paddingTop: sm ? "10%" : 0,
            borderRadius: 5,
            marginLeft: sm ? 0 : "8%",
          }}
        >
          {sm && <ChartGraphic />}
          <Paper
            elevation={0}
            square
            sx={{
              width: sm ? "78%" : "100%",
              height: "80%",
              marginLeft: sm ? 0 : xl ? 5 : 0,
              marginBottom: sm ? 15 : 0,
              borderRadius: 5,
              padding: 5,
              backgroundColor: "transparent",
            }}
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
          {!sm && <ChartGraphic />}
        </Container>
      ) : (
        <>
          <SkeletonBalance />
        </>
      )}
    </>
  );
};

export default Balance;
