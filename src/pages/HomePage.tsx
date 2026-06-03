import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import FeaturedDresses from "../components/home/FeaturedDresses";

function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <FeaturedDresses />
      </main>
    </>
  );
}

export default HomePage;