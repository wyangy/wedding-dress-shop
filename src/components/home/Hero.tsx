function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="mb-6 text-4xl font-semibold leading-tight text-stone-950 md:text-5xl">
            Timeless Designer
            <br />
            Wedding Dresses
          </h1>

          <p className="mb-8 max-w-md text-base leading-7 text-stone-700">
            Beautiful one-of-a-kind wedding dresses from a refined designer&apos;s
            collection.
          </p>

          <a
            href="#shop"
            className="inline-block bg-stone-950 px-7 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-stone-700"
          >
            Shop Dresses
          </a>
        </div>

        <div className="border border-stone-300 p-4">
          <div className="flex h-72 items-center justify-center border border-stone-300 bg-stone-50">
            <div className="text-center text-sm text-stone-500">
              Hero dress image
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-stone-900" />
            <span className="h-2 w-2 rounded-full bg-stone-300" />
            <span className="h-2 w-2 rounded-full bg-stone-300" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;