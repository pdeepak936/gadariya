import { configureStore } from '@reduxjs/toolkit';

// Import slices as they are created
// import authSlice from './slices/auth';
// import cartSlice from './slices/cart';
// import productSlice from './slices/product';

export const store = configureStore({
  reducer: {
    // auth: authSlice,
    // cart: cartSlice,
    // products: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
