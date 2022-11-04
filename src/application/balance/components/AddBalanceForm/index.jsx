import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Button from "../../../utils/Buttom";
import TextField from "@mui/material/TextField";
import Title from "../../../utils/Title";
import Modal from "@mui/material/Modal";
import "./AddBalance.css";
import { colors } from "../../../../utils/colors";
import {
  validation,
  validationAmount,
  validationConcept,
  validationCurrency,
} from "../../validations";
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
const AddBalanceForm = (props) => {
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
    type: "topup",
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
    if (form.amount.length > 0) {
      validationAmount(form.amount, setmsgError1);
    }
    if (form.currency.length > 0) {
      validationCurrency(form.currency, setmsgError3);
    }
    if (form.concept.length > 0) {
      validationConcept(form.concept, setmsgError2);
    }
    validation({ ...form }, settoSend);
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
          <Title text="Add one charge" font="h3" align="center" />
          <Title
            text="In this form you can add a charge on your salary"
            font="h6"
            align="center"
            color={colors.grey2}
          />
          <div className="inputGroup">
            <TextField
              error={msgError1}
              id="outlined-basic"
              label="Charge"
              variant="outlined"
              helperText={msgError1 ? msgError1 : ""}
              onChange={(event) => {
                setForm({ ...form, amount: event.target.value });
              }}
            />
            <TextField
              error={msgError2}
              id="outlined-basic"
              label="Concept"
              variant="outlined"
              helperText={msgError2 ? msgError2 : ""}
              onChange={(event) => {
                setForm({ ...form, concept: event.target.value });
              }}
            />
            <TextField
              error={msgError3}
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
              text=" Add Charge"
              variant="contained"
              size="large"
              width={300}
              funct={() => {
                setForm({
                  amount: "",
                  concept: "",
                  currency: "",
                  type: "topup",
                });
                handleClose();
              }}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddBalanceForm;
