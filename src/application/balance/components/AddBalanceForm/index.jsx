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
import { useBalanceStore } from "../../../../hooks/useBalanceStore";
import { useMediaQuery, useTheme } from "@mui/material";

const AddBalanceForm = (props) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const { addNewCharge, addNewTotal, total } = useBalanceStore();
  const { open, setOpen } = props;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    transform: "translate(-50%, -50%)",
    width: sm ? "70%" : "55%",
    height: "58%",
    bgcolor: "background.paper",
    borderRadius: 10,
    boxShadow: 24,
    p: 3,
  };
  const handleClose = () => {
    setOpen(false);
    setForm({
      amount: "",
      concept: "",
      currency: "",
      type: "topup",
    });
    setmsgError1(false);
    setmsgError2(false);
    setmsgError3(false);
  };
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
          <Title
            text="Cagar saldo"
            font="h3"
            align="center"
            color={colors.white1}
          />
          <Title
            text="Aqui puedes cargar dinero en tu cuenta"
            font={sm ? "h7" : "h6"}
            weight={sm ? 600 : 500}
            align="center"
            color={colors.white}
          />
          <div
            style={{
              flexDirection: sm ? "column" : "row",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <TextField
              InputProps={{ style: { marginBottom: sm ? 30 : 0 } }}
              InputLabelProps={{
                style: { color: "#fff", fontWeight: 600 },
              }}
              inputProps={{
                style: {
                  color: msgError1 ? colors.red : colors.white1,
                },
              }}
              error={msgError1 ? true : false}
              id="outlined-basic"
              label="Monto"
              variant="filled"
              helperText={msgError1 ? msgError1 : ""}
              onChange={(event) => {
                setForm({ ...form, amount: event.target.value });
              }}
              FormHelperTextProps={{
                style: {
                  fontWeight: 600,
                  marginTop: sm ? -25 : 0,
                  marginBottom: sm ? 5 : 0,
                },
              }}
            />
            <TextField
              error={msgError2 ? true : false}
              InputProps={{ style: { marginBottom: sm ? 30 : 0 } }}
              InputLabelProps={{
                style: { color: "#fff", fontWeight: 600 },
              }}
              inputProps={{
                style: { color: msgError2 ? colors.red : colors.white1 },
              }}
              id="outlined-basic"
              label="Concepto"
              variant="filled"
              helperText={msgError2 ? msgError2 : ""}
              onChange={(event) => {
                setForm({ ...form, concept: event.target.value });
              }}
              FormHelperTextProps={{
                style: {
                  fontWeight: 600,
                  marginTop: sm ? -25 : 0,
                  marginBottom: sm ? 5 : 0,
                },
              }}
            />
            <TextField
              error={msgError3 ? true : false}
              InputProps={{ style: { marginBottom: 30 } }}
              InputLabelProps={{
                style: { color: "#fff", fontWeight: 600 },
              }}
              SelectProps={{
                style: { color: colors.white1 },
              }}
              id="outlined-select-currency"
              select
              label="Moneda"
              variant="filled"
              value={currency}
              onChange={handleChange}
              helperText={
                msgError3 ? msgError3 : "Por favor, seleccione su moneda"
              }
              FormHelperTextProps={{
                style: { color: "#fff", fontWeight: 600 },
              }}
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
              text="Agregar dinero"
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
                addNewCharge({
                  amount: form.amount,
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

export default AddBalanceForm;
