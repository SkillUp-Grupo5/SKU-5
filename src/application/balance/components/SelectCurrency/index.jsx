import { MenuItem, TextField, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { colors } from "../../../../utils/colors";

const SelectCurrency = (props) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const { label, form, setForm } = props;
  const [currency, setCurrency] = useState("EUR");
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
    <>
      <TextField
        InputProps={{ style: { marginBottom: sm ? 30 : 0 } }}
        id="outlined-select-currency"
        select
        label={label}
        InputLabelProps={{
          style: { color: "#fff", fontWeight: 600 },
        }}
        SelectProps={{
          style: { color: colors.white1 },
        }}
        FormHelperTextProps={{
          style: {
            color: "#fff",
            fontWeight: 600,
          },
        }}
        variant="filled"
        value={currency}
        onChange={handleChange}
        helperText={"Por favor, seleccione su moneda"}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default SelectCurrency;
