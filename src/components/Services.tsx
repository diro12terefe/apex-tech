import {
  Code,
  Layout,
  Database,
  Figma,
  RefreshCw,
  Cloud,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Full-Stack Web Development',
      description:
        'Scalable systems built with React, Express, PostgreSQL, MongoDB, and TypeScript.',
      tags: ['React', 'Node.js', 'PostgreSQL'],
    },
    {
      icon: Layout,
      title: 'Frontend Engineering',
      description: 'Lightning-fast interfaces with React, Next.js, and Tailwind.',
      tags: ['React', 'Next.js', 'Tailwind'],
    },
    {
      icon: Database,
      title: 'Backend Architecture',
      description: 'APIs and databases optimized for growth and performance.',
      tags: ['Node.js', 'Express', 'MongoDB'],
    },
    {
      icon: Figma,
      title: 'UI/UX Design & Prototyping',
      description: 'Experience-first design systems that convert.',
      tags: ['Figma', 'Design Systems', 'Prototyping'],
    },
    {
      icon: RefreshCw,
      title: 'System Modernization',
      description: 'Transform outdated systems into high-performing modern web apps.',
      tags: ['Migration', 'Optimization', 'Modernization'],
    },
    {
      icon: Cloud,
      title: 'Deployment & DevOps',
      description: 'CI/CD pipelines, cloud hosting, and full-stack monitoring on AWS, Vercel, or Docker.',
      tags: ['AWS', 'Docker', 'CI/CD'],
    },
  ];

  return (
    <section id="services" className="py-32 px-6 bg-gray-100 dark:bg-[#050D1A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What We{' '}
            <span className="bg-gradient-to-r from-[#0A1A35] to-[#FFB32C] dark:from-[#FFB32C] dark:to-[#FFCC66] bg-clip-text text-transparent">
              Build
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From concept to deployment, we deliver end-to-end solutions that push boundaries and
            exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 glass-morphism-light dark:glass-morphism rounded-2xl hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FFB32C]/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFB32C]/5 to-[#0A1A35]/5 dark:from-[#FFB32C]/5 dark:to-[#162947]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFB32C]/30 to-[#E69500]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-[#FFB32C]" />
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-[#FFB32C] transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-[#FFB32C]/10 dark:bg-[#FFB32C]/20 text-[#0A1A35] dark:text-[#FFB32C] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFB32C] to-[#E69500] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
