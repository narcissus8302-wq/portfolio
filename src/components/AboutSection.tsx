import vedantImage from '../assets/vedant.jpeg';

const capabilityGroups: { label: string; items: string[] }[] = [
  {
    label: 'ML systems',
    items: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-Learn', 'XGBoost', 'OpenCV', 'LangChain'],
  },
  {
    label: 'Backend engineering',
    items: ['FastAPI', 'Django', 'SQL', 'MongoDB', 'MySQL', 'C++'],
  },
  { label: 'Research tools', items: ['NumPy', 'Pandas', 'Git', 'GitHub', 'Linux'] },
];

export function AboutSection() {
  return (
    <section id="about" className="w-full">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8 py-20 md:py-24 flex flex-col items-center gap-12">
        <div className="flex flex-col items-center text-center gap-4">
          <span className="eyebrow">About</span>
          <h2 className="display text-heading-lg text-bone">
            Who I <em>am</em>.
          </h2>
          <p className="font-light text-subheading text-mist max-w-[560px]">
            Computer Engineering student · AI & Machine Learning · Pune, India
          </p>
        </div>

        <div className="grid lg:grid-cols-[340px_minmax(0,1fr)] gap-5 items-start w-full">
          <div className="bg-graphite border border-line rounded-card p-6 flex flex-col gap-4">
            <img
              src={vedantImage}
              alt="Vedant Parmane"
              className="w-full aspect-square object-cover rounded-input border border-line"
            />
            <div className="flex flex-col gap-1.5">
              <span className="text-subheading text-bone font-normal">Vedant Parmane</span>
              <span className="label">Computer Engineering Student</span>
              <span className="label">Pune, India</span>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 text-body text-mist">
              <p>
                I build AI, machine learning, and backend systems — research experiments,
                production APIs, and the infrastructure that connects models to real users.
              </p>
              <p>
                My interest is how AI performs beyond the prototype: deployed, measured, and
                observable. I prefer measurements over opinions when claiming something works.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {capabilityGroups.map((group) => (
                <div
                  key={group.label}
                  className="bg-graphite border border-line rounded-card p-6 flex flex-col gap-3"
                >
                  <span className="label text-sage">{group.label}</span>
                  <p className="text-body-sm text-mist leading-relaxed">
                    {group.items.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}