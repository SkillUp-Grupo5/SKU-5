import { useDispatch, useSelector } from "react-redux";
import { addDeposit, showDeposits } from "../api/balance";
import Swal from "sweetalert2";
import {addExpenses, addCharges, addTotal,} from "../store/slices/balanceSlice";
import { colors } from "../utils/colors";
import { useMediaQuery, useTheme } from "@mui/material";

export const useBalanceStore = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  // We will fetch the statuses of each of the data we will need in order to be able to send
  // and update the balance sheet.

  const { id } = useSelector((state) => state.auth);
  const { total, expenses, charges } = useSelector((state) => state.balance);

  // In this function we bring the data of the transfer that we want to make
  // and we use these to send them to the api by means of the imported function 'addDeposit'.

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

      // Once the transfer has been sent, an alert will be executed to inform about the status of the transfer.
      // of sending the transfer.
      // Depending on the case, it will have one configuration or another.

      Swal.fire({
        position: "center",
        icon: "success",
        background:
          "linear-gradient(10deg, #171fb36f, #1976d2b7, #1976d2, #0479ee)",
        iconColor: colors.white1,
        color: colors.white1,
        width: sm ? "80%" : "50%",
        text: `Carga de ${
          type === "topup" ? "saldo" : "gasto"
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
          type === "topup" ? "saldo" : "gasto"
        }`,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  // In this function we fetch the data of all the user's transfers (filtered)
  // so we can only use the data we need.
  // Then with the data of the uploads and downloads of money we will assign them to
  // their corresponding global states, dispatching each of the necessary actions.

  const addNewTotal = async () => {
    const deposits = await showDeposits();
    const { charges, expenses } = deposits;
    dispatch(addTotal(charges - expenses));
    dispatch(addExpenses(expenses));
    dispatch(addCharges(charges));
  };

  // We return the states and the functions so that they can be used
  // from any component that needs to evaluate, display or edit these states.
  // As well as those who wish to send a transfer or update the balance.

  return {
    charges,
    expenses,
    total,
    addNewCharge,
    addNewTotal,
  };
};
