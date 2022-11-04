import { axiosClient } from "../helpers";

export const initDeposit = async (data) => {
  console.log(data);
  const deposit = await axiosClient.post("/fixeddeposits", data);
  return deposit;
};
export const updateDeposit = async (data) => {
  const { id } = data;
  axiosClient.put(`/fixeddeposits/${id}`, data);
};
