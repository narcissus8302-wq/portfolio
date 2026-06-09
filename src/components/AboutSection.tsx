export function AboutSection() {
  return (
    <section className="flex flex-col gap-6 mt-4" id="about">
      <div className="font-bold mt-2"><span className="text-secondary-container">vedant</span><span className="text-outline">@</span><span className="text-link-blue">parmane</span><span className="text-secondary-fixed-dim">: ~/about</span></div>
      <div className="flex flex-col gap-4 pl-4">
        <div>
          <span><span className="text-secondary-container">vedant</span><span className="text-outline">@</span><span className="text-primary-container">parmane :~/about$</span></span>{' '}
          <span className="text-pure-white">whoami</span>
          <p className="mt-2 text-primary-container leading-relaxed">
            Vedant Parmane<br />
            AI & Machine Learning Developer<br />
            Computer Engineering Student<br />
            // Pune, Maharashtra, India
          </p>
        </div>
        <div className="mt-4">
          <span><span className="text-secondary-container">vedant</span><span className="text-outline">@</span><span className="text-primary-container">parmane :~/about$</span></span>{' '}
          <span className="text-pure-white">cat ./skills.txt</span>
          <div className="mt-2 text-primary-container leading-relaxed">
            <p className="text-outline font-bold mt-2">Languages</p>
            <ul className="list-none pl-4 mt-1">
              <li>→ Python</li>
              <li>→ C++</li>
              <li>→ SQL</li>
            </ul>
            <p className="text-outline font-bold mt-3">Frameworks & Libraries</p>
            <ul className="list-none pl-4 mt-1">
              <li>→ FastAPI</li>
              <li>→ Django</li>
              <li>→ TensorFlow</li>
              <li>→ PyTorch</li>
              <li>→ Scikit-Learn</li>
              <li>→ XGBoost</li>
              <li>→ OpenCV</li>
              <li>→ LangChain</li>
              <li>→ NumPy</li>
              <li>→ Pandas</li>
            </ul>
            <p className="text-outline font-bold mt-3">Databases</p>
            <ul className="list-none pl-4 mt-1">
              <li>→ MongoDB</li>
              <li>→ MySQL</li>
            </ul>
            <p className="text-outline font-bold mt-3">Tools</p>
            <ul className="list-none pl-4 mt-1">
              <li>→ Git</li>
              <li>→ GitHub</li>
              <li>→ Linux</li>
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <span><span className="text-secondary-container">vedant</span><span className="text-outline">@</span><span className="text-primary-container">parmane :~/about$</span></span>{' '}
          <span className="text-pure-white">cat ./background.txt</span>
          <p className="mt-2 text-primary-container leading-relaxed">
            Building systems that combine machine learning, backend services, and real-world problem solving.<br />
            Projects span machine learning research, legal AI, adaptive learning systems, geospatial AI, and backend API development.<br />
            Particularly interested in how AI systems can be deployed in practical applications beyond prototypes.
          </p>
        </div>
      </div>
    </section>
  );
}
