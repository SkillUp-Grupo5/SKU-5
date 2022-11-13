/** Libraries */
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useMediaQuery, useTheme } from "@mui/material";

/** Components */
import Button from "../../../utils/Buttom";
import Title from "../../../utils/Title";
import TextFieldForm from "../TextFieldForm";
import SelectCurrency from "../SelectCurrency";

/** Custom hooks  */
import { useOperationsStore } from "../../../../hooks";

/** Validations */
import { validation } from "../../validations";

/** Utils */
import { colors } from "../../../../utils/colors";

/** Styles */
import style from "./style";

const AddBalanceForm = (props) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const { StartAddNewCharge, balance } = useOperationsStore();
  const { open, setOpen, type } = props;

  const handleClose = () => {
    setOpen(false);
    setForm({
      amount: "",
      concept: "",
      currency: "",
      type: type,
    });
  };

  const [toSend, settoSend] = React.useState(false);
  const [form, setForm] = React.useState({
    amount: "",
    concept: "",
    currency: "",
    type: "",
  });

  React.useEffect(() => {
    if (balance.total > 0) {
      validation({ ...form }, settoSend);
    }
    // eslint-disable-next-line
  }, [form]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Title
            text={type === "topup" ? "Cagar saldo" : "Cargar gasto"}
            font="h3"
            align="center"
            color={colors.white1}
          />
          <Title
            text={
              type === "topup"
                ? "Aqui puedes cargar dinero en tu cuenta"
                : balance.total > 0
                ? "Aqui puedes añadir un gasto de tu salario"
                : "Su saldo es 0, no puede añadir gastos"
            }
            font={sm ? "h7" : "h6"}
            weight={sm ? 600 : 500}
            align="center"
            color={colors.white}
          />
          <div
            style={{
              flexDirection: sm ? "column" : "row",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <TextFieldForm label={"Monto"} form={form} setForm={setForm} />
            <TextFieldForm label={"Concepto"} form={form} setForm={setForm} />
            <SelectCurrency label={"Moneda"} form={form} setForm={setForm} />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              disabled={!toSend}
              color="primary"
              text={type === "topup" ? "Agregar dinero" : "Agregar gasto"}
              variant="contained"
              size="large"
              width={300}
              funct={() => {
                setForm({
                  amount: "",
                  concept: "",
                  currency: "",
                  type: type,
                });

                handleClose();
                StartAddNewCharge({
                  amount: form.amount,
                  type: type,
                  concept: form.concept,
                });
              }}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddBalanceForm;
