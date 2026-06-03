function ContactCTA() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-8">
      <div className="flex flex-col items-center justify-between gap-6 border border-stone-300 px-8 py-6 text-center md:flex-row md:text-left">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-stone-950">
            Have questions?
          </h2>

          <p className="mt-1 text-sm text-stone-700">
            We&apos;re here to help. Send us a message.
          </p>
        </div>

        <a
          href="mailto:hello@example.com"
          className="border border-stone-900 px-8 py-3 text-xs font-bold uppercase tracking-wide text-stone-900 hover:bg-stone-950 hover:text-white"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}

export default ContactCTA;
