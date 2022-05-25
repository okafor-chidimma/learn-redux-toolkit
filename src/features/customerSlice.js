import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};
/*
const initialState ={
value:[
    {
        name:"Selena Gomez",
        food:[]
    },
    {
        name:"Chika",
        food:["rice","yam"]
    }
]
}
*/
export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      /*
        action.payload ={
            name:"Selena",
            food:[]
        }
        */
      state.value.push(action.payload);
    },
    removeCustomer: () => {},
    addCustomerFood: (state, action) => {
      /*
      anything passed into dispatch is added as a value to payload property of action object
            action.payload = {
                index:0,
                foodName:"Rice"
            }
        */
      state.value[action.payload.index].food.push(action.payload.foodInput);
    },
  },
});

export default customerSlice.reducer;

export const { addCustomer, removeCustomer,addCustomerFood } = customerSlice.actions;
