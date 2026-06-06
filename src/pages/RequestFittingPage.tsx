import { Link, useParams } from "react-router";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { featuredDresses } from "../data/dresses";

function RequestFittingPage() {
  const { id } = useParams();

  const dress = featuredDresses.find((dress) => dress.id === Number(id));

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
          <Link to={`/dresses/${dress.id}`} className="hover:text-stone-900">
            {dress.name}
          </Link>
          <span className="mx-2">/</span>
          <span>Request a Fitting</span>
        </div>

        <h1 className="mb-10 text-3xl font-semibold text-stone-950">
          Request a Fitting
        </h1>

        <div className="grid gap-10 md:grid-cols-2">
          <section className="border border-stone-300 p-5">
            <div className="mb-5 flex h-72 items-center justify-center border border-stone-300 bg-stone-50 text-sm text-stone-500">
              Selected dress image
            </div>

            <h2 className="mb-4 text-xl font-semibold text-stone-950">
              {dress.name}
            </h2>

            <div className="space-y-2 text-sm text-stone-700">
              <p>Size: {dress.size}</p>
              <p>Bust: {dress.bust} cm</p>
              <p>Waist: {dress.waist} cm</p>
              <p>Hip: {dress.hip} cm</p>
              <p>Hollow to Hem: {dress.hollowToHem} cm</p>
            </div>

            <p className="mt-5 text-sm leading-6 text-stone-700">
              Detailed measurements: please see Notes to Tailor PDF.
            </p>
          </section>

          <form className="space-y-5 border border-stone-300 p-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-stone-950"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full border border-stone-300 px-4 py-3 text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-stone-950"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full border border-stone-300 px-4 py-3 text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-stone-950"
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full border border-stone-300 px-4 py-3 text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-stone-950"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full border border-stone-300 px-4 py-3 text-sm"
                placeholder="Tell us about your preferred fitting time or any questions."
              />
            </div>

            <button
              type="submit"
              className="bg-stone-950 px-7 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-stone-700"
            >
              Submit Request
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default RequestFittingPage;
