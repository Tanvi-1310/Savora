import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import ReservationHero from "../../components/customer/ReservationHero";
import ReservationForm from "../../components/customer/ReservationForm";
import ReservationInfo from "../../components/customer/ReservationInfo";
import Gallery from "../../components/customer/Gallery";
import Location from "../../components/customer/Location";

function Reservation() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50">
        {/* Hero Section */}
        <ReservationHero />

        {/* Reservation Form */}
        <section id="reservation-form">
          <ReservationForm />
        </section>

        {/* Restaurant Information */}
        <ReservationInfo />

        {/* Restaurant Gallery */}
        <Gallery />

        {/* Location & Google Map */}
        <Location />
      </main>

      <Footer />
    </>
  );
}

export default Reservation;