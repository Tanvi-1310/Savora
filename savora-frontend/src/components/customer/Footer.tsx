import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">

        {/* Logo */}

        <div>
          <h2 className="text-3xl font-bold text-orange-500">
            🍽️ Savora
          </h2>

          <p className="mt-4 text-sm leading-7">
            Experience exceptional dining with premium cuisine,
            elegant ambience, and unforgettable hospitality.
          </p>
        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-white font-semibold mb-5">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3">

            <Link to="/">Home</Link>

            <Link to="/menu">Menu</Link>

            <Link to="/reservation">Reservation</Link>

            <Link to="/contact">Contact</Link>

          </div>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-white font-semibold mb-5">
            Contact
          </h3>

          <p>📍 Mumbai</p>

          <p>📞 +91 98765 43210</p>

          <p>✉ info@savora.com</p>

        </div>

        {/* Social */}

        <div>

          <h3 className="text-white font-semibold mb-5">
            Follow Us
          </h3>

          <div className="flex gap-4">

            <Facebook />

            <Instagram />

            <Twitter />

            <Mail />

          </div>

        </div>

      </div>

      <div className="border-t border-gray-700 py-5 text-center text-sm">

        © 2026 Savora Restaurant.
        All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;