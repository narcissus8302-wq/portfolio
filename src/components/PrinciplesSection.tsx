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
      <div className="max-w-[1200px] mx-auto px-8 py-20 flex flex-col items-center gap-12">
        <div className="flex flex-col items-center text-center gap-6">
          <span className="pill-chip">Principles</span>
          <h2 className="display text-heading-lg text-pure">
            How I <em>build</em>.
          </h2>
          <p className="font-light text-subheading text-ash max-w-[560px]">
            Six rules I fall back on when intuition isn't enough.
          </p>
        </div>

        <div className="w-full bg-silver rounded-feature p-8 md:p-12">
          <ol className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {principles.map((principle, index) => (
              <li key={principle} className="flex items-baseline gap-4">
                <span className="font-mono text-[12px] tracking-[0.02em] text-void/60 leading-[2] shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-body text-void leading-[1.5]">{principle}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}