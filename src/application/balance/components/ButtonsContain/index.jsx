import React from "react";
import { Container, Fab, useMediaQuery, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Button from "../../../utils/Buttom";
import AddBalanceForm from "../AddBalanceForm";
import ExpenseForm from "../ExpenseForm";
import { colors } from "../../../../utils/colors";
const ButtonsContain = () => {
  const [openCharge, setopenCharge] = React.useState(false);
  const [openExpense, setopenExpense] = React.useState(false);
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const xl = useMediaQuery(theme.breakpoints.down("xl"));
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
      <AddBalanceForm open={openCharge} setOpen={setopenCharge} />
      <ExpenseForm open={openExpense} setOpen={setopenExpense} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Button
          text="Agregar dinero"
          bgcolor="#21d749"
          width={"45%"}
          textColor={colors.white1}
          variant="contained"
          funct={() => setopenCharge(true)}
        />

        <Button
          text="Agregar gasto"
          bgcolor="#d32f2f"
          width={"45%"}
          textColor={colors.white1}
          variant="contained"
          funct={() => setopenExpense(true)}
        />
      </div>
    </>
  );
};

export default ButtonsContain;
