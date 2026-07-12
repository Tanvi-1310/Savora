import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  open: boolean;
  onClose: () => void;
}

function ReservationSuccess({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl">

        <CheckCircle2
          size={80}
          className="mx-auto text-green-500"
        />

        <h2 className="mt-6 text-3xl font-bold">
          Reservation Confirmed!
        </h2>

        <p className="mt-4 text-gray-600">
          Thank you for choosing Savora.
          Your reservation request has been received successfully.
        </p>

        <div className="my-8 rounded-xl bg-orange-50 p-5">

          <p className="text-gray-500 text-sm">
            Reservation ID
          </p>

          <h3 className="text-xl font-bold text-orange-600">
            #SVR10245
          </h3>

        </div>

        <div className="space-y-3">

          <button
            onClick={onClose}
            className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600 transition"
          >
            Book Another Table
          </button>

          <Link
            to="/"
            className="block w-full rounded-xl border border-orange-500 py-3 font-semibold text-orange-500 hover:bg-orange-50 transition"
          >
            Back to Home
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ReservationSuccess;