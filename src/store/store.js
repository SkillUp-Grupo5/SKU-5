import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './slices/authSlice';
import { balanceSlice } from './slices/balanceSlice';
import { operationsSlice } from './slices/operationsSlice';

export const store = configureStore({
  reducer: {
    
      auth: authSlice.reducer,
      balance: balanceSlice.reducer,
      operations: operationsSlice.reducer,
  },
})