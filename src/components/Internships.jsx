import { internshipsList } from '../data/portfolioData';

function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between shadow-xl"
    >
      <div>
        {/* Top Row: Duration & Mini Badge */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="font-mono text-xs uppercase tracking-wider text-white/40">
            {intern.duration}
          </span>
          <span className="px-3 py-1 rounded-full bg-black/40 border border-white/10 text-white text-xs font-mono uppercase tracking-widest">
            Internship
          </span>
        </div>

        {/* Role & Organization */}
        <h3 className="text-2xl font-black text-white tracking-tight">
          {intern.role}
        </h3>
        <p className="uppercase text-red-200 text-sm font-bold tracking-wide mt-1">
          {intern.organization}
        </p>

        {/* Skills Gained Bulleted List */}
        {intern.skills && intern.skills.length > 0 && (
          <div className="my-6">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-white/60 mb-3">
              Skills Gained:
            </p>
            <ul className="space-y-2">
              {intern.skills.map((skill, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-white/90">
                  <span className="text-red-300 mt-1 shrink-0">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Technologies Row at Bottom */}
      {intern.tech && intern.tech.length > 0 && (
        <div className="border-t border-white/10 pt-5 mt-auto">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-white/60 mb-3">
            Technologies:
          </p>
          <div className="flex flex-wrap gap-2">
            {intern.tech.map((t, i) => (
              <span
                key={i}
                className="font-mono text-xs px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Internships() {
  if (!internshipsList || internshipsList.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Top Edge Inverted Torn-Paper Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none -translate-y-[1px]">
        <svg
          className="relative block w-full h-12 md:h-20 rotate-180"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#0a0a0a"
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"
          />
        </svg>
      </div>

      {/* Decorative Pulsing Black Star (Bottom-Left) */}
      <svg
        className="absolute bottom-12 left-10 w-10 h-10 text-black opacity-20 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight mb-4">
            Work Experience
          </h2>
          <p className="text-red-100 text-sm md:text-base font-semibold">
            Practical industry exposure, full-stack training, and collaborative engineering experience.
          </p>
        </div>

        {/* Grid of Internship Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {internshipsList.map((intern, index) => (
            <InternshipCard
              key={`${intern.organization}-${index}`}
              intern={intern}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

