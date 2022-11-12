import React from "react";
import AddBalanceForm from "../AddBalanceForm";
import Button from "../../../utils/Buttom";
import { colors } from "../../../../utils/colors";

const ButtonsContain = () => {
  // We create the state that allows us to visualize the modal used to load the transfers

  const [openCharge, setopenCharge] = React.useState(false);

  // By means of this status we define the type of loading to be performed

  const [typeForm, settypeForm] = React.useState();

  return (
    <>
      <AddBalanceForm
        open={openCharge}
        setOpen={setopenCharge}
        type={typeForm}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Button
          text="Agregar dinero"
          bgcolor="#21d749"
          width={"45%"}
          textColor={colors.white1}
          variant="contained"
          funct={() => {
            setopenCharge(true);
            settypeForm("topup");
          }}
        />

        <Button
          text="Agregar gasto"
          bgcolor="#d32f2f"
          width={"45%"}
          textColor={colors.white1}
          variant="contained"
          funct={() => {
            setopenCharge(true);
            settypeForm("payment");
          }}
        />
      </div>
    </>
  );
};

export default ButtonsContain;
