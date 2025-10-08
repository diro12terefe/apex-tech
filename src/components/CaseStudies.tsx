import { useState } from 'react';
import { ExternalLink, Users, Building2, Rocket, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: 'TalkASTU',
      subtitle: 'University Social Platform',
      description:
        'End-to-end platform connecting students — from concept to scalable system.',
      icon: Users,
      gradient: 'from-[#FFB32C] to-[#E69500]',
      tags: ['React', 'Node.js', 'PostgreSQL'],
    },
    {
      title: 'Clinic Management System',
      subtitle: 'Wollega University',
      description:
        'A digital transformation for healthcare operations with modern design and robust backend.',
      icon: Building2,
      gradient: 'from-[#0A1A35] to-[#162947]',
      tags: ['TypeScript', 'Express', 'MongoDB'],
    },
    {
      title: 'YC Directory',
      subtitle: 'Startup Listing Platform',
      description:
        'Elegant platform for showcasing and managing early-stage startups.',
      icon: Rocket,
      gradient: 'from-[#FFB32C] to-[#FFCC66]',
      tags: ['Next.js', 'Tailwind', 'Supabase'],
    },
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-[#0A1A35] to-[#FFB32C] dark:from-[#FFB32C] dark:to-[#FFCC66] bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real projects. Real impact. See how we've helped organizations reach their digital apex.
          </p>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative glass-morphism-light dark:glass-morphism rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FFB32C]/10"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`}></div>
              </div>

              <div className="relative p-8">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <project.icon className="w-10 h-10 text-white dark:text-[#0A1A35]" />
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-[#FFB32C] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">
                  {project.subtitle}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-[#FFB32C]/10 dark:bg-[#FFB32C]/20 text-[#0A1A35] dark:text-[#FFB32C] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-[#FFB32C] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span className="mr-2">View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} blur-3xl`}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden relative">
          <div className="glass-morphism-light dark:glass-morphism rounded-3xl overflow-hidden p-8">
            <div
              className={`w-20 h-20 bg-gradient-to-br ${projects[currentIndex].gradient} rounded-2xl flex items-center justify-center mb-6`}
            >
              {(() => {
                const IconComponent = projects[currentIndex].icon;
                return <IconComponent className="w-10 h-10 text-white dark:text-[#0A1A35]" />;
              })()}
            </div>

            <h3 className="text-2xl font-bold mb-2">{projects[currentIndex].title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">
              {projects[currentIndex].subtitle}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {projects[currentIndex].description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {projects[currentIndex].tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium bg-[#FFB32C]/10 dark:bg-[#FFB32C]/20 text-[#0A1A35] dark:text-[#FFB32C] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevProject}
              className="p-3 glass-morphism-light dark:glass-morphism rounded-full hover:scale-110 transition-all"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6 text-[#FFB32C]" />
            </button>
            <button
              onClick={nextProject}
              className="p-3 glass-morphism-light dark:glass-morphism rounded-full hover:scale-110 transition-all"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6 text-[#FFB32C]" />
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 glass-morphism-light dark:glass-morphism rounded-full font-semibold hover:scale-105 transition-all duration-300">
            Explore More Projects
          </button>
        </div>
      </div>
    </section>
  );
}
