import React from "react";
import { Typography } from "@mui/material";
const Title = (props) => {
  const { text, font, color, align, weight } = props;
  return (
    <Typography
      variant={font}
      align={align}
      style={{ color: color, fontWeight: weight }}
    >
      {text}
    </Typography>
  );
};

export default Title;
