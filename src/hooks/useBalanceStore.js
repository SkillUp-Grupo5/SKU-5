import { useDispatch, useSelector } from "react-redux";
import { addDeposit } from "../api/balance";

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
    dispatch(addCharges(amount));
    const deposit = await addDeposit({
      amount: amount,
      concept: concept,
      date: date,
      type: type,
      accountId: roleId,
      userId: id,
      to_account_id: 5,
    });
    console.log(deposit);
  };

  const addNewExpense = async (data) => {
    const { concept, type, amount } = data;
    const date = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
    dispatch(addExpenses(amount));
    const deposit = await addDeposit({
      amount: amount,
      concept: concept,
      date: date,
      type: type,
      accountId: roleId,
      userId: id,
      to_account_id: 5,
    });
    console.log(deposit);
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
