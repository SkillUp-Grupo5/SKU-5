import React from "react";
import { Button } from "@mui/material";

const Buttom = (props) => {
  const { color, variant, text, funct, href, size, width } = props;
  return (
    <Button
      style={{ borderRadius: 10, width: width }}
      size={size}
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
