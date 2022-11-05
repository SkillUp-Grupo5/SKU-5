import React from "react";
import { Container, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Button from "../../../utils/Buttom";
import "./ButtonsContain.css";
import AddBalanceForm from "../AddBalanceForm";
import ExpenseForm from "../ExpenseForm";
import { colors } from "../../../../utils/colors";
const ButtonsContain = () => {
  const [openCharge, setopenCharge] = React.useState(false);
  const [openExpense, setopenExpense] = React.useState(false);

  return (
    <>
      <AddBalanceForm open={openCharge} setOpen={setopenCharge} />
      <ExpenseForm open={openExpense} setOpen={setopenExpense} />
      <div className="container">
        <Button
          text="Agregar dinero"
          color="inherit"
          width={250}
          textColor="#1976d2"
          variant="contained"
          bgcolor={colors.white1}
          funct={() => setopenCharge(true)}
        />

        <Button
          text="Agregar gasto"
          textColor="#1976d2"
          color="inherit"
          width={250}
          variant="contained"
          bgcolor={colors.white1}
          funct={() => setopenExpense(true)}
        />
      </div>
    </>
  );
};

export default ButtonsContain;
