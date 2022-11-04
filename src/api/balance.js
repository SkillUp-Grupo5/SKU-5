import { axiosClientToken } from "../helpers";

export const addDeposit = async (data) => {
  console.log(data);
  const deposit = await axiosClientToken.post("/transactions", { ...data });
  return deposit;
};
export const updateDeposit = async (data) => {
  const { id } = data;
  axiosClientToken.put(`/transactions/${id}`, data);
};
