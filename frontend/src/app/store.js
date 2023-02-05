import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import newsletterReducer from '../features/newsletter/newsletterSlice'

export const store = configureStore({
  reducer: {
   auth: authReducer,
   newsletter: newsletterReducer,
  },
});
