export const initialState = {
  id: null,
  email: "",
  first_name: "",
  last_name: "",
  roleId: null,
  points: null,
  checking: true,
  transactions: [],
};

export const demoUser = {
  checking: false,
  id: 123,
  email: "",
  first_name: "Lucas",
  last_name: "Ojeda",
  roleId: 1,
  points: 1000,
  transactions: [],
};

export const authenticatedState = {
  checking: false,
  uid: "123",
  name: "Lucas Ojeda",
};

export const unAuthenticatedState = {
  id: null,
  email: "",
  first_name: "",
  last_name: "",
  roleId: null,
  points: null,
  checking: false,
  transactions: [],
};

export const transactions = [
  {
    id: 567,
    amount: "40",
    concept: "asdsads",
    date: "2022-11-06T02:45:16.000Z",
    type: "topup",
    accountId: 132,
    userId: 586,
    to_account_id: 2,
    createdAt: "2022-11-06T02:45:17.000Z",
    updatedAt: "2022-11-06T02:45:17.000Z",
  },
  {
    id: 566,
    amount: "12",
    concept: "sdsdsdsd",
    date: "2022-11-06T02:44:53.000Z",
    type: "topup",
    accountId: 132,
    userId: 586,
    to_account_id: 2,
    createdAt: "2022-11-06T02:44:54.000Z",
    updatedAt: "2022-11-06T02:44:54.000Z",
  },
  {
    id: 565,
    amount: "12",
    concept: "fdfdsd",
    date: "2022-11-06T02:44:25.000Z",
    type: "topup",
    accountId: 132,
    userId: 586,
    to_account_id: 2,
    createdAt: "2022-11-06T02:44:26.000Z",
    updatedAt: "2022-11-06T02:44:26.000Z",
  },
];
