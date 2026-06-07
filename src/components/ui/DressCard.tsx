import { Link } from "react-router";
import type { Dress } from "../../types/dress";

type DressCardProps = {
  dress: Dress;
};

function DressCard({ dress }: DressCardProps) {
  return (
    <article className="border border-stone-300 bg-white">
      <div className="flex h-72 items-center justify-center border-b border-stone-300 bg-stone-50">
        <img
          src={dress.images.main}
          alt={dress.name}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="p-4">
        <h3 className="mb-3 text-sm font-bold text-stone-950">{dress.name}</h3>

        <div className="space-y-1 text-xs text-stone-700">
          <p>Size: {dress.size}</p>
          <p>Bust: {dress.bust} cm</p>
          <p>Waist: {dress.waist} cm</p>
          <p>Hip: {dress.hip} cm</p>
          <p>Hollow to Hem: {dress.hollowToHem} cm</p>
        </div>

        <p className="mt-4 text-xs leading-5 text-stone-600">
          {dress.description}
        </p>

        <Link
          to={`/dresses/${dress.id}`}
          className="mt-4 inline-block border border-stone-900 px-5 py-2 text-xs font-bold uppercase tracking-wide text-stone-900 hover:bg-stone-950 hover:text-white"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}

export default DressCard;
