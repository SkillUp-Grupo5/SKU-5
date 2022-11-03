import React from "react";
import { Typography } from "@mui/material";
const Title = (props) => {
  const { text, font, color, align } = props;
  return (
    <Typography variant={font} align={align} style={{ color: color }}>
      {text}
    </Typography>
  );
};

export default Title;
