import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import FeaturedDresses from "../components/home/FeaturedDresses";
import HowItWorks from "../components/home/HowItWorks";

function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <FeaturedDresses />
        <HowItWorks />
      </main>
    </>
  );
}

export default HomePage;
