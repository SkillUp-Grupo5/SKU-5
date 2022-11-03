import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { SendMoneyModal } from "./SendMoneyModal";

const users = [
  {
    name: "Carlos",
    _id: 1,
  },
  {
    name: "Esteban",
    _id: 2,
  },
  {
    name: "Fernando",
    _id: 3,
  },
  {
    name: "Agustina",
    _id: 4,
  },
  {
    name: "Victoria",
    _id: 5,
  },
  {
    name: "Antonella",
    _id: 6,
  },
  {
    name: "jefferson",
    _id: 7,
  },
  {
    name: "Evaristo",
    _id: 8,
  },
  {
    name: "Valentin",
    _id: 9,
  },
  {
    name: "Santiago",
    _id: 10,
  },
  {
    name: "Marcos",
    _id: 11,
  },
  {
    name: "Tania",
    _id: 12,
  },
  {
    name: "Martin",
    _id: 13,
  },
  {
    name: "Lisandro",
    _id: 14,
  },
  {
    name: "Adrian",
    _id: 15,
  },
];

export const UsersTable = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const [activeUser, setActiveUser] = useState(null);

  return (
    <>
      <SendMoneyModal
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
        activeUser={activeUser}
      />
      <Box
        width="100%"
        height="100vh"
        display="flex"
        justifyContent="end"
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          overflow: "hidden",
        }}
      >
        <Box
          width="30vw"
          height="90vh"
          mt="10vh"
          border="1px solid gray"
          backgroundColor="#fff"
        >
          <Box
            width="30vw"
            height="7.5vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderBottom="1px solid gray"
            backgroundColor="#7D3C98"
          >
            <Typography color="#fff" variant="body2" fontSize="20px">
              Users list
            </Typography>
          </Box>
          <Box
            maxHeight="82.5vh"
            sx={{
              overflowX: "hidden",
              overflowY: "scroll",
            }}
          >
            {users.map((e, i) => (
              <Box
                key={e._id}
                width="30vw"
                height="7.5vh"
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                borderTop="1px solid gray"
                sx={{
                  backgroundColor: i % 2 === 0 ? "#fff" : "#21618C",
                  "& .MuiButton-root": {
                    visibility: "hidden",
                  },
                  ":hover": {
                    "& .MuiButton-root": {
                      visibility: "visible",
                    },
                  },
                }}
              >
                <Typography
                  color={i % 2 === 0 ? "#000" : "#fff"}
                  variant="body2"
                  fontSize="14px"
                >
                  {e.name}
                </Typography>
                <Button
                  variant={i % 2 === 0 ? "outlined" : "contained"}
                  onClick={() => {
                    setModalStatus(true);
                    setActiveUser(e);
                  }}
                >
                  Send Money
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};
