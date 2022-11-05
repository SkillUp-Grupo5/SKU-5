import { useDispatch, useSelector } from "react-redux";
import { addDeposit, deleteDeposit, showDeposits } from "../api/balance";

import {
  addExpenses,
  addCharges,
  addTotal,
} from "../store/slices/balanceSlice";

export const useBalanceStore = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.auth);
  const { total, expenses, charges } = useSelector((state) => state.balance);

  const addNewCharge = async (data) => {
    const { concept, type, amount } = data;
    await addDeposit({
      accountId: 132,
      amount: amount,
      concept: concept,
      date: new Date(),
      to_account_id: 2,
      type: type,
      userId: id,
    });
  };

  const addNewExpense = async (data) => {
    const { concept, type, amount } = data;
    await addDeposit({
      amount: amount,
      concept: concept,
      date: new Date(),
      type: type,
      accountId: 132,
      userId: id,
      to_account_id: 2,
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
