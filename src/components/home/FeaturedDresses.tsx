import { featuredDresses } from "../../data/dresses";
import DressCard from "../ui/DressCard";

function FeaturedDresses() {
  return (
    <section id="shop" className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="mb-8 text-center text-sm font-bold uppercase tracking-wide text-stone-950">
        Featured Dresses
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {featuredDresses.map((dress) => (
          <DressCard key={dress.id} dress={dress} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedDresses;