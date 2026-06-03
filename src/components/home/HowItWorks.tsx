const steps = [
  {
    title: "Browse the collection",
    icon: "♡",
  },
  {
    title: "Pick a dress",
    icon: "♥",
  },
  {
    title: "Check measurements",
    icon: "▭",
  },
  {
    title: "Request a fitting",
    icon: "□",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-8">
      <div className="border border-stone-300 px-6 py-8">
        <h2 className="mb-8 text-center text-sm font-bold uppercase tracking-wide text-stone-950">
          How It Works
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              <div className="mb-3 text-3xl text-stone-900">{step.icon}</div>
              <p className="text-xs font-bold text-stone-900">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
