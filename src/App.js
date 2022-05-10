import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {
  //Redux does not persist you data across page reload
  const [nameInput, setNameInput] = useState("");
  //the state here is the global state, the object formed in the store.js file,hence the reaseon we used the property name "reserve" to access the reservationsSlice state, which is a combination of all the slices
  //const reservations = useSelector((state) => state.reservations.value);

  const {
    reservations: { value: reservations },
    customers: { value: customers },
  } = useSelector((state) => state);

  const dispatch = useDispatch(); //calling the useDispatch hook returns a dispatch func, call that dispatch any time you want to change the state. remember reducer passes in the state to the reducer functions by default
  const handleNameInputSubmit = (event) => {
    console.log("here in handle");
    event.preventDefault();
    if (!nameInput) return false;
    dispatch(addReservation(nameInput));
    setNameInput("");
  };
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.length === 0 ? (
                <p>No Reservations has been placed</p>
              ) : (
                reservations.map((name, index) => (
                  <ReservationCard name={name} index={index} key={index} />
                ))
              )}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              type="text"
              value={nameInput}
              onChange={(event) => setNameInput(event.target.value)}
            />
            <button onClick={handleNameInputSubmit}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map(({ name, food }, index) => (
            <CustomerCard name={name} food={food} key={index} index={index}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
