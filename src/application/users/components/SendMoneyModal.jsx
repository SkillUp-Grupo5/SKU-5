import React, { useState } from "react";
import {
  Button,
  Container,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { startSendMoney } from "../../../api/users";
import { useFormik } from "formik";
import { YupSendMoneyValidations } from "../../../helpers";

const currencies = [
  {
    value: "ARS",
    label: "AR$",
  },
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

export const SendMoneyModal = ({ modalStatus, setModalStatus, activeUser }) => {


  const [currency, setCurrency] = useState("ARS");

  const formik = useFormik({
    initialValues: {
      amount: 1,
      context: "",
    },

    validationSchema: YupSendMoneyValidations,
    onSubmit: (values, { resetForm }) => {
      try {
        startSendMoney({
          type: "payment",
          concept: values.context,
          amount: values.amount,
        }, activeUser.id);
      } catch (error) {
        console.log(error);
      }
      resetForm();
    },
  });

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleClose = () => {
    setModalStatus(false);
  };

  return (
    <Box minWidth="100vh">
      <Modal
        open={modalStatus}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          container
          width="100%"
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            component="form"
            container
            width="60%"
            height="45vh"
            display="flex"
            justifyContent="space-between"
            flexDirection="column"
            bgcolor="#fff"
            borderRadius="5px"
            border="none"
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}
          >
            <Box
              width="100%"
              height="7.5vh"
              display="flex"
              justifyContent="center"
              alignItems="end"
            >
              <Typography color="GrayText" variant="body2" fontSize="20px">
                Enviar dinero a {activeUser?.first_name}
              </Typography>
            </Box>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              gap="10px"
            >
              <Box
                width="100%"
                heigth="30vh"
                display="flex"
                justifyContent="center"
                alignItems="flex-start"
                flexDirection="row"
                gap="10px"
              >
                <TextField
                  required
                  id="outlined-required"
                  type="number"
                  variant="outlined"
                  label="Monto"
                  name="amount"
                  value={formik.values.amount}
                  onChange={formik.handleChange}
                  error={formik.touched.amount && Boolean(formik.errors.amount)}
                  helperText={formik.touched.amount && formik.errors.amount}
                />

                <TextField
                  id="outlined-required"
                  select
                  required
                  disabled={true}
                  label="Moneda"
                  value={currency}
                  onChange={handleChange}
                  helperText="Solo pesos permitidos (ARS)."
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>

              <TextField
                required
                id="outlined-required"
                type="text"
                variant="outlined"
                label="Contexto"
                name="context"
                value={formik.values.context}
                onChange={formik.handleChange}
                error={formik.touched.context && Boolean(formik.errors.context)}
                helperText={formik.touched.context && formik.errors.context}
              />
            </Box>

            <Box
              width="100%"
              height="10vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="20px"
            >
              <Button type="submit" variant="contained">
                Enviar
              </Button>

              <Button variant="outlined" onClick={handleClose}>
                Cancelar
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
