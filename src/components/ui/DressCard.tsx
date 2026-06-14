import { Link } from "react-router";
import type { Dress } from "../../types/dress";

type DressCardProps = {
  dress: Dress;
};

function DressCard({ dress }: DressCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-[#ead8c8] bg-white">
      <div className="border-b border-[#ead8c8] bg-[#fbf6ef]">
        <img
          src={dress.images.main}
          alt={dress.name}
          className="aspect-[4/5] w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="p-5">
        <h3 className="font-serif text-2xl italic leading-tight text-stone-950">
          {dress.name}
        </h3>

        <p className="mt-3 text-sm text-stone-700">Size: {dress.size}</p>

        <div className="mt-4 flex justify-end">
          <Link
            to={`/dresses/${dress.id}`}
            className="inline-block text-sm font-medium text-[#a8552f] hover:text-[#884326]"
          >
            View Details →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default DressCard;
