import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDeposit, deleteDeposit, showDeposits } from "../api/balance";
import Swal from "sweetalert2";
import {
  addExpenses,
  addCharges,
  addTotal,
} from "../store/slices/balanceSlice";
import { colors } from "../utils/colors";
import { useMediaQuery, useTheme } from "@mui/material";

export const useBalanceStore = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const { id } = useSelector((state) => state.auth);
  const { total, expenses, charges } = useSelector((state) => state.balance);

  const addNewCharge = async (data) => {
    const { concept, type, amount } = data;
    try {
      await addDeposit({
        accountId: 132,
        amount: amount,
        concept: concept,
        date: new Date(),
        to_account_id: 2,
        type: type,
        userId: id,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        background:
          "linear-gradient(10deg, #171fb36f, #1976d2b7, #1976d2, #0479ee)",
        iconColor: colors.white1,
        color: colors.white1,
        width: sm ? "80%" : "50%",
        text: `Carga de ${
          type == "topup" ? "saldo" : "gasto"
        } realizada con exito!`,
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        width: sm ? "80%" : "50%",
        background:
          "linear-gradient(10deg, #171fb36f, #1976d2b7, #1976d2, #0479ee)",
        iconColor: colors.white1,
        color: colors.white1,
        text: `No sde pudo realizar la carga de ${
          type == "topup" ? "saldo" : "gasto"
        }`,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const addNewTotal = async () => {
    const deposits = await showDeposits();
    const { charges, expenses } = deposits;
    dispatch(addTotal(charges - expenses));
    dispatch(addExpenses(expenses));
    dispatch(addCharges(charges));
  };

  return {
    charges,
    expenses,
    total,

    addNewCharge,
    addNewTotal,
  };
};
