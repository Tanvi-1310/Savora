import { useState } from "react";
import ReservationSuccess from "./ReservationSuccess";

function ReservationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    specialRequest: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  console.log(formData);

  setSuccess(true);
};

  return (
    <section
      id="reservation-form"
      className="bg-gray-50 py-20"
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-4xl font-bold text-center">
            Reserve Your Table
          </h2>

          <p className="text-gray-500 text-center mt-3 mb-10">
            Fill in your details and we'll confirm your reservation shortly.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="border rounded-xl p-4 focus:ring-2 focus:ring-orange-500"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded-xl p-4 focus:ring-2 focus:ring-orange-500"
                required
              />

            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-orange-500"
              required
            />

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="border rounded-xl p-4 focus:ring-2 focus:ring-orange-500"
                required
              />

              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="border rounded-xl p-4 focus:ring-2 focus:ring-orange-500"
                required
              />

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="border rounded-xl p-4"
              >
                {[1,2,3,4,5,6,7,8].map((num) => (
                  <option key={num} value={num}>
                    {num} Guest{num > 1 ? "s" : ""}
                  </option>
                ))}
              </select>

              <select
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                className="border rounded-xl p-4"
              >
                <option value="">Select Occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Business Meeting</option>
                <option>Date Night</option>
                <option>Family Dinner</option>
              </select>

            </div>

            <textarea
              rows={5}
              name="specialRequest"
              placeholder="Special Requests"
              value={formData.specialRequest}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
            />

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl transition"
            >
              Reserve Table
            </button>

          </form>

        </div>

      </div>

      <ReservationSuccess
    open={success}
    onClose={() => setSuccess(false)}
  />
    </section>
  );
}

export default ReservationForm;