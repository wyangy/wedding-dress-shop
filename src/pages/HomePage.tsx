import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import FeaturedDresses from "../components/home/FeaturedDresses";
import HowItWorks from "../components/home/HowItWorks";
import ContactCTA from "../components/home/ContactCTA";

function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <FeaturedDresses />
        <HowItWorks />
        <ContactCTA />
      </main>
    </>
  );
}

export default HomePage;
