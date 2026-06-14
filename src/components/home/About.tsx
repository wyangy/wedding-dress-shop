function About() {
  return (
    <section id="about" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-[#ead8c8] bg-[#fbf6ef]">
        <div className="relative min-h-[780px] md:min-h-[560px]">
          <img
            src="/images/about/about.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-left md:object-center"
            loading="lazy"
            decoding="async"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#fbf6ef]/10 via-[#fbf6ef]/55 to-[#fbf6ef]/95 md:bg-gradient-to-r md:from-transparent md:via-[#fbf6ef]/35 md:to-[#fbf6ef]/92" />

          <div className="relative flex min-h-[780px] items-end px-6 py-10 md:min-h-[560px] md:items-center md:justify-end md:px-10 lg:px-16">
            <div className="w-full md:w-[46%] md:max-w-md lg:w-[52%] lg:max-w-xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#a8552f]">
                About the Archive
              </p>

              <h2 className="font-serif text-4xl font-normal leading-tight text-stone-950 md:text-4xl lg:text-5xl">
                Thoughtfully selected,
                <br />
                ready to be loved again.
              </h2>

              <p className="mt-6 text-sm leading-7 text-stone-700 md:text-sm md:leading-7 lg:text-base lg:leading-8">
                This bridal dress catalogue presents selected designer sample
                dresses for customers to browse before requesting a fitting.
                Each gown is shown with clear details so brides can explore the
                collection with confidence.
              </p>

              <p className="mt-4 text-sm leading-7 text-stone-700 md:text-sm md:leading-7 lg:mt-5 lg:text-base lg:leading-8">
                Version 1 focuses on dress discovery, product details, and
                fitting enquiries rather than full online checkout.
              </p>

              <div className="mt-7 border-l-2 border-[#a8552f] pl-5">
                <p className="font-serif text-2xl italic leading-snug text-stone-950">
                  Beautiful for today.
                  <br />
                  Better for tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
