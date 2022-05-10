import { createSlice } from "@reduxjs/toolkit";

//step1
//instead of assigning the value directly to the initialState variable, we assign an object with a property name "value" to the initialState variable and then assign the actual value to the value property
const initialState = {
  value: [],
};
//step 2
export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  //these reducer object contains methods that run when a particular action type is called. it is equivalent to the switch in the regular redux
  //also action generators are created automatically for all the reducer action methods that you add to the reducer object
  reducers: {
    addReservation: (state, action) => {
      state.value.push(action.payload);
    },
    removeReservation: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});

//step 3
export default reservationSlice.reducer;

export const { addReservation, removeReservation } = reservationSlice.actions; //you need to export this, so you can call them from the component using the dispatch()


//For each state you want to track, you create a slice