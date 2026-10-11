import vedantImage from '../assets/vedant.jpeg';

const skillGroups: { label: string; items: string[] }[] = [
  { label: 'Languages', items: ['Python', 'C++', 'SQL'] },
  {
    label: 'Frameworks & Libraries',
    items: [
      'FastAPI',
      'Django',
      'TensorFlow',
      'PyTorch',
      'Scikit-Learn',
      'XGBoost',
      'OpenCV',
      'LangChain',
      'NumPy',
      'Pandas',
    ],
  },
  { label: 'Databases', items: ['MongoDB', 'MySQL'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'Linux'] },
];

export function AboutSection() {
  return (
    <section id="about" className="w-full">
      <div className="max-w-[1200px] mx-auto px-8 py-20 flex flex-col items-center gap-12">
        <div className="flex flex-col items-center text-center gap-6">
          <span className="pill-chip">About</span>
          <h2 className="display text-heading-lg text-pure">
            Who I <em>am</em>.
          </h2>
          <p className="font-light text-subheading text-ash max-w-[560px]">
            Computer Engineering student · AI & Machine Learning · Pune, India
          </p>
        </div>

        <div className="grid lg:grid-cols-[340px_minmax(0,1fr)] gap-6 items-start w-full">
          <div className="bg-graphite rounded-card p-8 flex flex-col gap-5">
            <img
              src={vedantImage}
              alt="Vedant Parmane"
              className="w-full aspect-square object-cover rounded-input"
            />
            <div className="flex flex-col gap-2">
              <span className="text-subheading text-pure font-normal">Vedant Parmane</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.182em] text-fog leading-[1.35]">
                Computer Engineering Student
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.182em] text-fog leading-[1.35]">
                Pune, India
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 text-body text-ash">
              <p>
                Building systems that combine machine learning, backend services, and
                real-world problem solving. Projects span machine learning research, legal AI,
                adaptive learning systems, geospatial AI, and backend API development.
              </p>
              <p>
                Particularly interested in how AI systems get deployed in practical
                applications beyond prototypes — and I prefer measurements over opinions when
                claiming something works.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {skillGroups.map((group) => (
                <div
                  key={group.label}
                  className="bg-graphite rounded-card p-8 flex flex-col gap-4"
                >
                  <span className="font-mono text-[12px] uppercase tracking-[0.02em] leading-[2] text-fog">
                    {group.label}
                  </span>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="font-mono text-[11px] uppercase tracking-[0.02em] text-cloud bg-white/[0.06] border border-white/10 rounded-full px-3 py-1 leading-[1.35]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}