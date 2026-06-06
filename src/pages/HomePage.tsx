import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import FeaturedDresses from "../components/home/FeaturedDresses";
import About from "../components/home/About";
import HowItWorks from "../components/home/HowItWorks";
import ContactCTA from "../components/home/ContactCTA";
import Footer from "../components/layout/Footer";

function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <FeaturedDresses />
        <About />
        <HowItWorks />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
