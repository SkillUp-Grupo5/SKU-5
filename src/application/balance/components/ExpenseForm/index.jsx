import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import MenuItem from "@mui/material/MenuItem";
import Button from "../../../utils/Buttom";
import Title from "../../../utils/Title";
import "./ExpenseForm.css";
import { colors } from "../../../../utils/colors";
import {
  validation,
  validationAmount,
  validationConcept,
  validationCurrency,
} from "../../validations";
import { useBalanceStore } from "../../../../hooks/useBalanceStore";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "column",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 400,
  bgcolor: "background.paper",
  borderRadius: 10,
  boxShadow: 24,
  p: 3,
};

const ExpenseForm = (props) => {
  const { addNewExpense, addNewTotal, total } = useBalanceStore();
  const { open, setOpen } = props;
  const handleClose = () => setOpen(false);
  const [currency, setCurrency] = React.useState("EUR");
  const [msgError1, setmsgError1] = React.useState(false);
  const [msgError2, setmsgError2] = React.useState(false);
  const [msgError3, setmsgError3] = React.useState(false);
  const [toSend, settoSend] = React.useState(false);
  const [form, setForm] = React.useState({
    amount: "",
    concept: "",
    currency: "",
    type: "payload",
  });
  const handleChange = (event) => {
    setCurrency(event.target.value);
    setForm({ ...form, currency: event.target.value });
  };
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];
  React.useEffect(() => {
    addNewTotal();
  }, [addNewExpense]);
  React.useEffect(() => {
    if (form.amount.length > 0) {
      validationAmount(form.amount, setmsgError1);
    }
    if (form.currency.length > 0) {
      validationCurrency(form.currency, setmsgError3);
    }
    if (form.concept.length > 0) {
      validationConcept(form.concept, setmsgError2);
    }
    if (total > 0) {
      validation({ ...form }, settoSend);
    }
  }, [form]);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="paperForm">
          <Title text="Add one expense" font="h3" align="center" />
          <Title
            text={
              total > 0
                ? "In this form you can add an expense from your salary"
                : "Your balance is 0 can't add expense"
            }
            font="h6"
            align="center"
            color={total > 0 ? colors.grey2 : colors.red}
          />

          <div className="inputGroup">
            <TextField
              error={msgError1 ? true : false}
              id="outlined-basic"
              label="Expense"
              variant="outlined"
              helperText={msgError1 ? msgError1 : ""}
              onChange={(event) => {
                setForm({ ...form, amount: event.target.value });
              }}
            />
            <TextField
              error={msgError2 ? true : false}
              id="outlined-basic"
              label="Concept"
              variant="outlined"
              helperText={msgError2 ? msgError2 : ""}
              onChange={(event) => {
                setForm({ ...form, concept: event.target.value });
              }}
            />
            <TextField
              error={msgError3 ? true : false}
              id="outlined-select-currency"
              select
              label="Currency"
              value={currency}
              onChange={handleChange}
              helperText={msgError3 ? msgError3 : "Please select your currency"}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="buttonSpace">
            <Button
              disabled={!toSend}
              color="primary"
              text=" Add Expense"
              variant="contained"
              size="large"
              width={300}
              funct={() => {
                setForm({
                  amount: "",
                  concept: "",
                  currency: "",
                  type: "payload",
                });
                handleClose();
                addNewExpense({
                  amount: Number(form.amount),
                  type: form.type,
                  concept: form.concept,
                });
              }}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ExpenseForm;
