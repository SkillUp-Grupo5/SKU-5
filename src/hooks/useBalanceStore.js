import { useDispatch, useSelector } from "react-redux";
import { initDeposit } from "../api/balance";
import { axiosClient } from "../helpers/axiosHelper";
import {
  addExpenses,
  addCharges,
  addTotal,
} from "../store/slices/balanceSlice";

export const useBalanceStore = () => {
  const dispatch = useDispatch();
  const { total, expenses, charges } = useSelector((state) => state.balance);
  const { id, roleId } = useSelector((state) => state.auth);

  const addNewCharge = async (amount) => {
    dispatch(addCharges(amount));
  };

  const addNewExpense = async (amount) => {
    dispatch(addExpenses(amount));
  };
  const addNewTotal = async (amount) => {
    dispatch(addTotal(amount));
  };

  return {
    charges,
    expenses,
    total,
    addNewExpense,
    addNewCharge,
    addNewTotal,
  };
};
