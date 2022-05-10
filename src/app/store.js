import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "../features/customerSlice";
import reservationsReducer from "../features/reservationSlice";

export const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    customers: customerSlice
  },
});
//ps you have to create app folder and add store.js to it. recommended format for configuration. likewise, the slices need to be in the features folder