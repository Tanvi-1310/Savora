import {
  MapPin,
  Phone,
  Mail,
  Clock3,
} from "lucide-react";

function Location() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold">
            Visit Savora
          </h2>

          <p className="mt-4 text-gray-600">
            We'd love to welcome you.
            Find us easily and enjoy an unforgettable dining experience.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Information */}

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h3 className="text-2xl font-semibold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">

                <MapPin className="text-orange-500" />

                <div>
                  <h4 className="font-semibold">
                    Address
                  </h4>

                  <p className="text-gray-600">
                    Savora Restaurant
                  </p>

                  <p className="text-gray-600">
                    MG Road,
                    Mumbai,
                    Maharashtra
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Phone className="text-orange-500" />

                <div>

                  <h4 className="font-semibold">
                    Phone
                  </h4>

                  <p className="text-gray-600">
                    +91 98765 43210
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Mail className="text-orange-500" />

                <div>

                  <h4 className="font-semibold">
                    Email
                  </h4>

                  <p className="text-gray-600">
                    info@savora.com
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Clock3 className="text-orange-500" />

                <div>

                  <h4 className="font-semibold">
                    Opening Hours
                  </h4>

                  <p className="text-gray-600">
                    Monday - Sunday
                  </p>

                  <p className="text-gray-600">
                    11:00 AM - 11:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Google Map */}

          <div className="overflow-hidden rounded-2xl shadow-lg">

            <iframe
              title="Savora Location"
              src="https://www.google.com/maps?q=Mumbai&output=embed"
              className="w-full h-full min-h-[450px]"
              loading="lazy"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Location;