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
    <section className="flex flex-col gap-8" id="principles">
      <div className="font-bold mt-2 text-lg"><span className="text-secondary-container">vedant</span><span className="text-outline">@</span><span className="text-link-blue">parmane</span><span className="text-secondary-fixed-dim">: ~/principles</span></div>
      <div className="pl-4">
        <span><span className="text-secondary-container">vedant</span><span className="text-outline">@</span><span className="text-primary-container">parmane :~/principles$</span></span>{' '}
        <span className="text-pure-white">cat principles.txt</span>
        <ol className="mt-6 flex flex-col gap-4">
          {principles.map((principle, index) => (
            <li key={principle} className="flex items-baseline gap-4">
              <span className="text-primary-container font-bold">{String(index + 1).padStart(2, '0')}.</span>
              <span className="text-body-lg text-pure-white">{principle}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}