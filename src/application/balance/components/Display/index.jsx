import React from "react";
import { colors } from "../../../../utils/colors";
import Paper from "@mui/material/Paper";
import Title from "../../../utils/Title";
import { useBalanceStore } from "../../../../hooks/useBalanceStore";

const Display = () => {
  const { total, expenses, charges } = useBalanceStore();
  return (
    <>
      <div className="container">
        <Paper elevation={3} square style={{ padding: 20, borderRadius: 20 }}>
          <Title text={"Charges"} font="h6" align="center" />
          <Title
            text={charges ? charges : 0}
            font="h4"
            color={colors.green}
            align="center"
          />
        </Paper>

        <Paper elevation={3} square style={{ padding: 20, borderRadius: 20 }}>
          <Title text={"Expenses"} font="h6" align="center" />
          <Title
            text={expenses ? expenses : 0}
            font="h4"
            color={colors.red}
            align="center"
          />
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
            text={total ? total : 0}
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
