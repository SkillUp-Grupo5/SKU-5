import { useDispatch, useSelector } from "react-redux";
import { addDeposit, deleteDeposit, showDeposits } from "../api/balance";

import {
  addExpenses,
  addCharges,
  addTotal,
} from "../store/slices/balanceSlice";

export const useBalanceStore = () => {
  const dispatch = useDispatch();
  const { total, expenses, charges } = useSelector((state) => state.balance);
  const { id, roleId } = useSelector((state) => state.auth);

  const addNewCharge = async (data) => {
    const { concept, type, amount } = data;
    const date = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
    await addDeposit({
      amount: amount,
      concept: concept,
      date: date,
      type: type,
      accountId: roleId,
      userId: id,
      to_account_id: 5,
    });
  };

  const addNewExpense = async (data) => {
    const { concept, type, amount } = data;
    const date = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
    await addDeposit({
      amount: amount,
      concept: concept,
      date: date,
      type: type,
      accountId: roleId,
      userId: id,
      to_account_id: 5,
    });
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
    addNewExpense,
    addNewCharge,
    addNewTotal,
  };
};
