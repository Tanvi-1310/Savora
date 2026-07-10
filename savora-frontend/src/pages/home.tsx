import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/hero";
import Features from "../components/home/Features";
import PopularDishes from "../components/home/PopularDishes";
import WhyChooseUs from "../components/home/us";
import DashboardPreview from "../components/home/DashboardPreview";
import Pricing from "../components/home/Price";
import CTA from "../components/home/cta";



function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <PopularDishes />
      <WhyChooseUs />
      <DashboardPreview />
      <Pricing />
      <CTA />
    </>
  );
}

export default Home;