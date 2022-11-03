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

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleClose = () => {

    setModalStatus(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(`Money to ${activeUser.name} has sended successfully!`)
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
          >
            <Box
              width="100%"
              height="7.5vh"
              display="flex"
              justifyContent="center"
              alignItems="end"
            >
              <Typography color="GrayText" variant="body2" fontSize="20px">
                Send Money to {activeUser?.name}
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
                  label="Amount"
                  name="amount"
                />

                <TextField
                  id="outlined-required"
                  select
                  required
                  disabled={true}
                  label="Currency"
                  value={currency}
                  onChange={handleChange}
                  helperText="Only 'ARS' currency allowed."
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
                label="Context"
                name="context"
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
              <Button type="submit" variant="contained" onClick={handleSubmit}>
                Send
              </Button>

              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
