import { TextField, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import { colors } from "../../../../utils/colors";
import { validationAmount, validationConcept } from "../../validations";

const TextFieldForm = (props) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const { label, form, setForm } = props;
  const [msgError, setmsgError] = React.useState(false);
  const dataChange = (data, value) => {
    switch (data) {
      case "Concepto":
        setForm({ ...form, concept: value });
        break;
      case "Monto":
        setForm({ ...form, amount: value });
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (form.amount.length > 0 && label === "Monto") {
      validationAmount(form.amount, setmsgError);
    }

    if (form.concept.length > 0 && label === "Concepto") {
      validationConcept(form.concept, setmsgError);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  return (
    <>
      <TextField
        error={msgError ? true : false}
        InputProps={{ style: { marginBottom: sm ? 30 : 0 } }}
        InputLabelProps={{
          style: {
            color: "#fff",
            fontWeight: 600,
          },
        }}
        inputProps={{
          style: { color: msgError ? colors.red : colors.white1 },
        }}
        id="outlined-basic"
        label={label}
        variant="filled"
        helperText={msgError ? msgError : ""}
        onChange={(event) => {
          dataChange(label, event.target.value);
        }}
        FormHelperTextProps={{
          style: {
            fontWeight: 600,
            marginTop: sm ? -25 : 0,
            marginBottom: sm ? 5 : 0,
          },
        }}
      />
    </>
  );
};

export default TextFieldForm;
