import {
  Clock3,
  CalendarClock,
  MapPin,
  Phone,
  Car,
  Wifi,
  Utensils,
  ShieldCheck,
} from "lucide-react";

const timeSlots = [
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
];

function ReservationInfo() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Reservation Information
          </h2>

          <p className="mt-4 text-gray-500">
            Everything you need to know before reserving your table.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Opening Hours */}

          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">

            <Clock3
              size={40}
              className="text-orange-500 mb-5"
            />

            <h3 className="text-xl font-semibold mb-4">
              Opening Hours
            </h3>

            <p className="text-gray-600">
              Monday - Sunday
            </p>

            <p className="text-gray-600">
              11:00 AM - 11:00 PM
            </p>

          </div>

          {/* Time Slots */}

          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">

            <CalendarClock
              size={40}
              className="text-orange-500 mb-5"
            />

            <h3 className="text-xl font-semibold mb-5">
              Reservation Slots
            </h3>

            <div className="grid grid-cols-3 gap-3">

              {timeSlots.map((slot) => (

                <button
                  key={slot}
                  className="rounded-lg border border-orange-300 py-2 text-sm hover:bg-orange-500 hover:text-white transition"
                >
                  {slot}
                </button>

              ))}

            </div>

          </div>

          {/* Contact */}

          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">

            <Phone
              size={40}
              className="text-orange-500 mb-5"
            />

            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <p className="text-gray-600">
              +91 98765 43210
            </p>

            <p className="text-gray-600">
              info@savora.com
            </p>

          </div>

          {/* Address */}

          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">

            <MapPin
              size={40}
              className="text-orange-500 mb-5"
            />

            <h3 className="text-xl font-semibold mb-4">
              Address
            </h3>

            <p className="text-gray-600">
              Savora Restaurant
            </p>

            <p className="text-gray-600">
              MG Road,
            </p>

            <p className="text-gray-600">
              Mumbai, Maharashtra
            </p>

          </div>

          {/* Facilities */}

          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">

            <h3 className="text-xl font-semibold mb-6">
              Facilities
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">

                <Utensils className="text-orange-500" />

                <span>Fine Dining</span>

              </div>

              <div className="flex items-center gap-3">

                <Car className="text-orange-500" />

                <span>Free Parking</span>

              </div>

              <div className="flex items-center gap-3">

                <Wifi className="text-orange-500" />

                <span>Free Wi-Fi</span>

              </div>

            </div>

          </div>

          {/* Reservation Policy */}

          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">

            <ShieldCheck
              size={40}
              className="text-orange-500 mb-5"
            />

            <h3 className="text-xl font-semibold mb-4">
              Reservation Policy
            </h3>

            <ul className="space-y-3 text-gray-600 list-disc ml-5">

              <li>
                Reservations are held for 15 minutes.
              </li>

              <li>
                Maximum 10 guests per booking.
              </li>

              <li>
                Cancellation allowed up to 2 hours before.
              </li>

              <li>
                Contact us for private dining events.
              </li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ReservationInfo;