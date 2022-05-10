import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomerFood } from "../features/customerSlice";

const CustomerCard = ({ name, food,index }) => {
  const [foodInput, setFoodInput] = useState("");
  const dispatch = useDispatch();
  const handleFoodInputSubmit = (event) => {
    event.preventDefault();
    if (!foodInput) return false;
    dispatch(addCustomerFood({
        index,
        foodInput
    }));
    setFoodInput("");
  };
  return (
    <div className="customer-food-card-container">
      <h5>{name}</h5>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food) => {
            return <p>{food}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input
            value={foodInput}
            onChange={(e) => setFoodInput(e.target.value)}
          />
          <button onClick={handleFoodInputSubmit}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
