import { Link, useParams } from "react-router";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { dresses } from "../data/dresses";

function ProductDetailPage() {
  const { id } = useParams();

  const dress = dresses.find((dress) => dress.id === Number(id));

  if (!dress) {
    return (
      <>
        <Header />

        <main className="mx-auto max-w-6xl px-6 py-12">
          <h1 className="mb-4 text-3xl font-semibold text-stone-950">
            Dress not found
          </h1>

          <Link to="/shop" className="text-sm font-bold underline">
            Back to Shop
          </Link>
        </main>

        <Footer />
      </>
    );
  }

  const thumbnails = [
    {
      label: "Front",
      src: dress.images.front,
      alt: `${dress.name} front view`,
    },
    {
      label: "Back",
      src: dress.images.back,
      alt: `${dress.name} back view`,
    },
    {
      label: "Detail",
      src: dress.images.detail,
      alt: `${dress.name} detail`,
    },
    {
      label: "Flaw",
      src: dress.images.flaw,
      alt: `${dress.name} flaw`,
    },
  ].filter((image) => image.src);

  return (
    <>
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 text-xs uppercase tracking-wide text-stone-500">
          <Link to="/" className="hover:text-stone-900">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-stone-900">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span>{dress.name}</span>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="border border-stone-300 bg-stone-50">
              <img
                src={dress.images.main}
                alt={dress.name}
                className="h-[520px] w-full object-cover"
              />
            </div>

            {thumbnails.length > 0 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {thumbnails.map((image) => (
                  <div
                    key={image.label}
                    className="border border-stone-300 bg-stone-50"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-24 w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <h1 className="mb-4 text-3xl font-semibold text-stone-950">
              {dress.name}
            </h1>

            <p className="mb-8 text-sm leading-6 text-stone-700">
              {dress.description}
            </p>

            <div className="mb-8 border border-stone-300">
              <div className="border-b border-stone-300 px-4 py-3 text-sm font-bold uppercase tracking-wide text-stone-950">
                Measurements
              </div>

              <div className="space-y-2 px-4 py-4 text-sm text-stone-700">
                <p>Size: {dress.size}</p>
                <p>Bust: {dress.bust} cm</p>
                <p>Waist: {dress.waist} cm</p>
                <p>Hip: {dress.hip} cm</p>
                <p>Hollow to Hem: {dress.hollowToHem} cm</p>
              </div>
            </div>

            <p className="mb-8 text-sm text-stone-700">
              Detailed measurements: please see Notes to Tailor PDF.
            </p>

            <Link
              to={`/request-fitting/${dress.id}`}
              className="inline-block bg-stone-950 px-7 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-stone-700"
            >
              Request a Fitting
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ProductDetailPage;
