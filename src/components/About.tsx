import { Code2, Palette, Zap, User } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const leads = [
    {
      name: 'Firomsa Guteta',
      role: 'Full-Stack Lead',
      skills: [
        { name: 'React/Node.js', level: 95 },
        { name: 'System Design', level: 90 },
        { name: 'DevOps', level: 85 },
      ],
    },
    {
      name: 'Natnael Esayas',
      role: 'Frontend Engineer',
      skills: [
        { name: 'React/Next.js', level: 98 },
        { name: 'UI/UX Design', level: 92 },
        { name: 'TypeScript', level: 95 },
      ],
    },
  ];

  const teamMembers = [
    { initial: 'D1', role: 'Backend' },
    { initial: 'D2', role: 'UI/UX' },
    { initial: 'D3', role: 'Full-Stack' },
    { initial: 'D4', role: 'DevOps' },
    { initial: 'D5', role: 'Designer' },
    { initial: 'D6', role: 'Architect' },
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-[#0A1A35] to-[#FFB32C] dark:from-[#FFB32C] dark:to-[#FFCC66] bg-clip-text text-transparent">APEX</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At APEX, we believe innovation happens where design meets engineering. Our 8+ member
            team blends creative thinking with technical mastery to craft web experiences that feel
            effortless and perform flawlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Code2,
              title: 'Technical Excellence',
              desc: 'Built on modern frameworks and best practices for scalable, maintainable code.',
            },
            {
              icon: Palette,
              title: 'Design-First Approach',
              desc: 'Every pixel matters. We craft interfaces that users love and remember.',
            },
            {
              icon: Zap,
              title: 'Lightning Performance',
              desc: 'Optimized for speed with sub-second load times and flawless interactions.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group p-8 glass-morphism-light dark:glass-morphism rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-[#FFB32C]/10"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#FFB32C] to-[#E69500] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-[#0A1A35]" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-12 text-center">Leadership Team</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {leads.map((lead, idx) => (
              <div
                key={idx}
                className="perspective-card p-8 glass-morphism-light dark:glass-morphism rounded-3xl"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FFB32C] to-[#E69500] flex items-center justify-center flex-shrink-0">
                    <User className="w-10 h-10 text-[#0A1A35]" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-1">{lead.name}</h4>
                    <p className="text-[#FFB32C] font-semibold">{lead.role}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {lead.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm font-bold text-[#FFB32C]">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-[#162947] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#FFB32C] to-[#E69500] transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${idx * 200 + skillIdx * 100}ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <h3 className="text-2xl font-bold mb-8 text-center">+6 Talented Developers & Designers</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0A1A35] to-[#162947] dark:from-[#FFB32C] dark:to-[#E69500] flex flex-col items-center justify-center text-white dark:text-[#0A1A35] font-bold hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#FFB32C]/30">
                  <div className="text-lg">{member.initial}</div>
                  <div className="text-xs opacity-80">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
