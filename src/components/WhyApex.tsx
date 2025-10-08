import { Zap, Layers, Shield, Heart } from 'lucide-react';

export default function WhyApex() {
  const reasons = [
    {
      icon: Zap,
      title: 'Speed, Scale, and Stability',
      description: 'We build for speed, scale, and stability.',
    },
    {
      icon: Layers,
      title: 'Holistic Process',
      description: 'Our process fuses design, code, and business logic.',
    },
    {
      icon: Shield,
      title: 'Transparent Workflow',
      description: 'Transparent workflow with milestone-based delivery.',
    },
    {
      icon: Heart,
      title: 'Trusted by All',
      description: 'Trusted by startups, loved by engineers.',
    },
  ];

  return (
    <section className="py-32 px-6 bg-gray-100 dark:bg-[#050D1A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFB32C]/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0A1A35]/20 dark:bg-[#FFCC66]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-[#0A1A35] to-[#FFB32C] dark:from-[#FFB32C] dark:to-[#FFCC66] bg-clip-text text-transparent">
              APEX
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We don't just build websites. We craft digital experiences that drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-8 glass-morphism-light dark:glass-morphism rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFB32C]/10"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#FFB32C]/30 to-[#E69500]/30 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <reason.icon className="w-8 h-8 text-[#FFB32C]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#FFB32C] transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-12 bg-gradient-to-r from-[#0A1A35] to-[#162947] dark:from-[#FFB32C] dark:to-[#E69500] rounded-3xl text-center text-white dark:text-[#0A1A35] relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 dark:bg-white/10"></div>
          <div className="relative z-10">
            <div className="w-1 h-16 bg-white/30 dark:bg-[#0A1A35]/30 mx-auto mb-6"></div>
            <p className="text-2xl md:text-3xl font-bold leading-relaxed max-w-3xl mx-auto">
              "Excellence isn't a destination. It's a commitment we bring to every line of code, every pixel, every project."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
