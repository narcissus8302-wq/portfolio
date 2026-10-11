const principles = [
  'Understand the abstraction before using the library.',
  'Rebuild important systems from first principles.',
  'Measure before claiming improvement.',
  'Prefer experiments over opinions.',
  'Build systems that expose their failure modes.',
  'Learn mathematics when intuition stops being sufficient.',
];

export function PrinciplesSection() {
  return (
    <section id="principles" className="w-full bg-abyss">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8 py-20 md:py-24 flex flex-col items-center gap-12">
        <div className="flex flex-col items-center text-center gap-4">
          <span className="eyebrow">Principles</span>
          <h2 className="display text-heading-lg text-bone">
            How I <em>build</em>.
          </h2>
          <p className="font-light text-subheading text-mist max-w-[560px]">
            Six rules I fall back on when intuition isn't enough.
          </p>
        </div>

        <div className="w-full bg-graphite border border-line rounded-feature p-6 md:p-10">
          <ol className="grid md:grid-cols-2 gap-x-12 gap-y-7">
            {principles.map((principle, index) => (
              <li key={principle} className="flex items-baseline gap-4">
                <span className="label text-sage text-[13px] shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-body text-bone leading-relaxed">{principle}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}