"use client";

import { useOptimistic } from "react";

import { deleteReservation } from "../_lib/actions";

import ReservationCard from "./ReservationCard";

function ReservationList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    // initial state
    bookings,
    // updateFn
    (currentBookings, bookingId) => {
      // merge and return new state with optimistic value
      return currentBookings.filter((booking) => booking.id !== bookingId);
    },
  );

  async function handleDelete(bookingId) {
    // optimistic operation
    optimisticDelete(bookingId);

    // real operation
    await deleteReservation(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          onDelete={handleDelete}
          key={booking.id}
        />
      ))}
    </ul>
  );
}

export default ReservationList;
