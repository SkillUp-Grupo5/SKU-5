import React from "react";
import { Container } from "@mui/material";
import Button from "../../../utils/Buttom";
import "./ButtonsContain.css";
import AddBalanceForm from "../AddBalanceForm";
import ExpenseForm from "../ExpenseForm";
const ButtonsContain = () => {
  const [openCharge, setopenCharge] = React.useState(false);
  const [openExpense, setopenExpense] = React.useState(false);

  return (
    <>
      <AddBalanceForm open={openCharge} setOpen={setopenCharge} />
      <ExpenseForm open={openExpense} setOpen={setopenExpense} />
      <div className="container">
        <Button
          text="add charge"
          color="success"
          variant="contained"
          funct={() => setopenCharge(true)}
        />
        <Button
          text="add expense"
          color="error"
          variant="contained"
          funct={() => setopenExpense(true)}
        />
      </div>
    </>
  );
};

export default ButtonsContain;
