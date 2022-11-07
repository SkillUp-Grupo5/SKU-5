import { configureStore } from "@reduxjs/toolkit";
import { act, renderHook } from "@testing-library/react";
import { Provider } from "react-redux";

import { authSlice } from "../../store/slices/authSlice";

import { useAuthStore } from "../../hooks/useAuthStore";

import { initialState, unAuthenticatedState } from "../fixtures/authStates";

import { axiosClient, axiosClientToken } from "../../helpers";

import mockAxios from "axios";

jest.mock("axios", () => ({
  create: () => jest.fn(),
  post: jest.fn(() => Promise.resolve({ data: { first_name: "asd" } })),
}));

jest.mock("../../helpers/axiosHelper.js", () => ({
  __esModule: true,
  default: {
    interceptors: {
      request: { use: jest.fn() },
      response: { use: jest.fn() },
    },
  },
}));

const getMockStore = (initialAuthState) => {
  return configureStore({
    reducer: {
      auth: authSlice.reducer,
    },
    preloadedState: {
      auth: { ...initialAuthState },
    },
  });
};

describe("Puebas en el hook useAuthStore", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  test("debe de regresar los valores por defecto", () => {
    const mockStore = getMockStore({
      id: null,
      email: "",
      first_name: "",
      last_name: "",
      roleId: null,
      points: null,
      checking: false,
    });
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });
    expect(result.current).toEqual({
      id: null,
      email: "",
      first_name: "",
      last_name: "",
      roleId: null,
      points: null,
      checking: false,
      StartLogin: expect.any(Function),
      StartRegister: expect.any(Function),
      StartChecking: expect.any(Function),
      StartLogout: expect.any(Function),
    });
  });

  test("startChecking debe de fallar si no hay token", async () => {
    const mockStore = getMockStore(initialState);

    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    const { StartChecking } = result.current;

    await act(async () => {
      await StartChecking();
    });

    const { id, last_name, checking } = result.current;
    expect({ id, last_name, checking }).toEqual({
      id: null,
      last_name: "",
      checking: false,
    });
  });
});
