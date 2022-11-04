import * as yup from "yup";

const schemaAmount = yup
  .string()
  .required("Is required")
  .matches(/^\d+$/, "Value not a number")
  .min(2, "Must be at least 2 digits")
  .max(6, "Must not exceed 6 digits");

const schemaConcept = yup
  .string()
  .required("Is required")
  .matches(/^[aA-zZ]+$/, "Must contain only letters")
  .min(5, "Must be at least 5 digits")
  .max(10, "Must not exceed 10 digits");

const schemaCurrency = yup.string().required("Is required");
const schemaForm = yup.object().shape({
  amount: schemaAmount,
  concept: schemaConcept,
  currency: schemaCurrency,
});

export const validationConcept = async (value, error) => {
  await schemaConcept
    .validate(value)
    .then(() => {
      error(false);
      console.log("true");
    })
    .catch((err) => {
      error(err.errors[0]);
      console.log(err.errors[0]);
    });
};
export const validationCurrency = async (value, error) => {
  await schemaCurrency
    .validate(value)
    .then(() => {
      error(false);
      console.log("true");
    })
    .catch((err) => {
      error(err.errors[0]);
      console.log(err.errors[0]);
    });
};
export const validationAmount = async (value, error) => {
  await schemaAmount
    .validate(value)
    .then(() => {
      error(false);
      console.log("true");
    })
    .catch((err) => {
      error(err.errors[0]);
      console.log(err.errors[0]);
    });
};

export const validation = async (formValues, state) => {
  await schemaForm
    .validate(formValues)
    .then(() => {
      state(true);

      console.log("true");
    })
    .catch((err) => {
      state(false);
    });
};
