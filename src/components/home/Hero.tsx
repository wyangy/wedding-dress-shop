import { Link } from "react-router";

function Hero() {
  return (
    <section className="relative min-h-[620px] overflow-hidden border-b border-stone-200 bg-[#fbf6ef] md:min-h-[700px]">
      <img
        src="/images/hero/hero.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center md:object-top"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#fbf6ef] via-[#fbf6ef]/90 to-[#fbf6ef]/20" />

      <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-20 md:min-h-[700px] md:px-14 lg:px-20">
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl font-normal leading-[1.05] tracking-tight text-stone-950 md:text-6xl lg:text-7xl">
            Find the dress
            <br />
            that feels like <span className="italic text-[#a8552f]">you.</span>
          </h1>

          <p className="mt-8 max-w-md text-base leading-8 text-stone-800">
            Designer sample dresses, seriously loved. One-of-a-kind bridal
            pieces ready for a new moment.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/shop"
              className="inline-block bg-[#a8552f] px-8 py-4 text-center text-sm font-medium text-white hover:bg-[#884326]"
            >
              Shop the Archive
            </Link>

            <Link
              to="/#contact"
              className="inline-block border border-[#c47a55] bg-white/50 px-8 py-4 text-center text-sm font-medium text-stone-950 hover:bg-white"
            >
              Request a Fitting
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
