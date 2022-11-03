import React from "react";
import { colors } from "../../../../utils/colors";
import Paper from "@mui/material/Paper";
import Title from "../../../utils/Title";
const Display = (props) => {
  const { charges, expenses } = props;
  return (
    <>
      <div className="container">
        <Paper elevation={3} square style={{ padding: 20, borderRadius: 20 }}>
          <Title text={"Charges"} font="h6" align="center" />
          <Title text={charges} font="h4" color={colors.green} align="center" />
        </Paper>

        <Paper elevation={3} square style={{ padding: 20, borderRadius: 20 }}>
          <Title text={"Expenses"} font="h6" align="center" />
          <Title text={expenses} font="h4" color={colors.red} align="center" />
        </Paper>
      </div>
      <div className="container">
        <Paper
          elevation={3}
          square
          style={{ paddingInline: 50, paddingBlock: 20, borderRadius: 20 }}
        >
          <Title text={"Total"} font="h5" align="center" />
          <Title
            text={charges - expenses}
            font="h2"
            color={colors.blue}
            align="center"
          />
        </Paper>
      </div>
    </>
  );
};

export default Display;
