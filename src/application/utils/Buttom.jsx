import React from "react";
import { Button } from "@mui/material";

const Buttom = (props) => {
  const { color, variant, text, funct, href } = props;
  return (
    <Button
      color={color}
      variant={variant}
      href={href}
      onClick={() => {
        funct();
      }}
    >
      {text}
    </Button>
  );
};

export default Buttom;
