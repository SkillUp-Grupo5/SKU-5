import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "./slices/authSlice";
import { operationsSlice } from "./slices/operationsSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    operations: operationsSlice.reducer,
  },
});
