import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import DressCard from "../components/ui/DressCard";
import { featuredDresses } from "../data/dresses";

function ShopPage() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-10">
          <h1 className="mb-4 text-3xl font-semibold text-stone-950">
            Our Dress Collection
          </h1>

          <p className="max-w-2xl text-sm leading-6 text-stone-700">
            Browse selected designer wedding dresses. Each dress has basic size
            and measurement details. Detailed fitting information is available
            in the Notes to Tailor PDF on the product detail page.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {featuredDresses.map((dress) => (
            <DressCard key={dress.id} dress={dress} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ShopPage;
