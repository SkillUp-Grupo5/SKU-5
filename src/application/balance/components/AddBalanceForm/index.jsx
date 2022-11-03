import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Button from "../../../utils/Buttom";
import TextField from "@mui/material/TextField";
import Title from "../../../utils/Title";
import Modal from "@mui/material/Modal";
import "./AddBalance.css";
import { colors } from "../../../../utils/colors";
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
  const [form, setForm] = React.useState({
    amount: "",
    concept: "",
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
              id="outlined-basic"
              label="Charge"
              variant="outlined"
              onChange={(event) => {
                setForm({ ...form, amount: event.target.value });
              }}
            />
            <TextField
              id="outlined-basic"
              label="Concept"
              variant="outlined"
              onChange={(event) => {
                setForm({ ...form, concept: event.target.value });
              }}
            />
            <TextField
              id="outlined-select-currency"
              select
              label="Currency"
              value={currency}
              onChange={handleChange}
              helperText="Please select your currency"
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
              color="primary"
              text=" Add Charge"
              variant="contained"
              size="large"
              width={300}
              funct={() => {
                console.log(form);
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
