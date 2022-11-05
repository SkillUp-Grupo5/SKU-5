import { axiosClient, axiosClientToken } from "../helpers";

export const startGetUsers = async (page = 1) => {
  try {
    const data = await axiosClientToken.get(`/users/?page=${page}`);

    const users = data.data.data;

    return {
      users,
      nextPage: data.data.nextPage,
      previousPage: data.data.previousPage,
    };
  } catch (error) {
    console.log(error);
  }
};

export const startSendMoney = async (transaction, id) => {
  try {
    console.log(transaction, id);

    const data = await axiosClientToken.post(`/accounts/${id}`, transaction);
    // const data = await axiosClientToken.get(`/accounts/${id}`);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
