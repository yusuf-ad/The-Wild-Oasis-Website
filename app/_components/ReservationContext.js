"use client";

import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();

const initialState = {
  from: undefined,
  to: undefined,
};

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);

  function resetRange() {
    setRange(initialState);
  }

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const value = useContext(ReservationContext);

  if (value === undefined) {
    throw Error("Reservation context was used outside of ReservationProvider");
  }

  return value;
}

export { useReservation, ReservationProvider };
