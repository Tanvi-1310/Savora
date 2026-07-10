import { reservations } from "../../data/reservation";

function ReservationTable() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-xl font-semibold mb-6">
        Today's Reservations
      </h2>

      <div className="space-y-4">

        {reservations.map((reservation) => (

          <div
            key={reservation.id}
            className="flex justify-between items-center border-b pb-3 last:border-none"
          >

            <div>

              <h3 className="font-medium">
                {reservation.customer}
              </h3>

              <p className="text-sm text-gray-500">
                Table {reservation.table}
              </p>

            </div>

            <span className="font-semibold text-orange-500">
              {reservation.time}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ReservationTable;