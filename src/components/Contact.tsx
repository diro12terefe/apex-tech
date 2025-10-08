import { useState } from 'react';
import { Send, Mail, Github, Linkedin, Dribbble } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
  });

  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Build Your Next{' '}
            <span className="bg-gradient-to-r from-[#0A1A35] to-[#FFB32C] dark:from-[#FFB32C] dark:to-[#FFCC66] bg-clip-text text-transparent">
              Breakthrough
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to transform your vision into reality? Let's start the conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    className={`w-full px-4 py-3 glass-morphism-light dark:glass-morphism border rounded-xl transition-all duration-300 outline-none ${
                      focused === 'name'
                        ? 'border-[#FFB32C] shadow-lg shadow-[#FFB32C]/20'
                        : 'border-gray-200/50 dark:border-gray-800/50'
                    }`}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    className={`w-full px-4 py-3 glass-morphism-light dark:glass-morphism border rounded-xl transition-all duration-300 outline-none ${
                      focused === 'email'
                        ? 'border-[#FFB32C] shadow-lg shadow-[#FFB32C]/20'
                        : 'border-gray-200/50 dark:border-gray-800/50'
                    }`}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => setFocused('company')}
                  onBlur={() => setFocused(null)}
                  className={`w-full px-4 py-3 glass-morphism-light dark:glass-morphism border rounded-xl transition-all duration-300 outline-none ${
                    focused === 'company'
                      ? 'border-[#FFB32C] shadow-lg shadow-[#FFB32C]/20'
                      : 'border-gray-200/50 dark:border-gray-800/50'
                  }`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Idea</label>
                <textarea
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  onFocus={() => setFocused('project')}
                  onBlur={() => setFocused(null)}
                  rows={4}
                  className={`w-full px-4 py-3 glass-morphism-light dark:glass-morphism border rounded-xl transition-all duration-300 outline-none resize-none ${
                    focused === 'project'
                      ? 'border-[#FFB32C] shadow-lg shadow-[#FFB32C]/20'
                      : 'border-gray-200/50 dark:border-gray-800/50'
                  }`}
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  onFocus={() => setFocused('budget')}
                  onBlur={() => setFocused(null)}
                  className={`w-full px-4 py-3 glass-morphism-light dark:glass-morphism border rounded-xl transition-all duration-300 outline-none ${
                    focused === 'budget'
                      ? 'border-[#FFB32C] shadow-lg shadow-[#FFB32C]/20'
                      : 'border-gray-200/50 dark:border-gray-800/50'
                  }`}
                  required
                >
                  <option value="">Select a range</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>

              <button
                type="submit"
                className="group w-full px-8 py-4 bg-gradient-to-r from-[#FFB32C] to-[#E69500] text-[#0A1A35] rounded-xl font-semibold hover:shadow-2xl hover:shadow-[#FFB32C]/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Launch the Project
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="p-8 glass-morphism-light dark:glass-morphism rounded-2xl sticky top-24">
              <h3 className="text-xl font-bold mb-6">Get in Touch</h3>

              <div className="space-y-4 mb-8">
                <a
                  href="mailto:hello@apexdevs.com"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100/50 dark:hover:bg-[#162947]/50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FFB32C]/30 to-[#E69500]/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-[#FFB32C]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
                    <div className="font-medium">hello@apexdevs.com</div>
                  </div>
                </a>
              </div>

              <div className="border-t border-gray-200/50 dark:border-gray-800/50 pt-6">
                <h4 className="text-sm font-medium mb-4 text-gray-500 dark:text-gray-400">
                  CONNECT WITH US
                </h4>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, label: 'LinkedIn' },
                    { icon: Github, label: 'GitHub' },
                    { icon: Dribbble, label: 'Dribbble' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-12 h-12 glass-morphism-light dark:glass-morphism rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-[#FFB32C] hover:to-[#E69500] hover:text-[#0A1A35] transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-4 bg-gradient-to-br from-[#FFB32C]/10 to-[#E69500]/10 rounded-lg border border-[#FFB32C]/20">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Typical response time: <span className="font-semibold text-[#FFB32C]">24 hours</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
