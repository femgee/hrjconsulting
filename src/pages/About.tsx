import { Target, Eye, Heart, Award, Users, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              About HRJ Consulting
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              Your trusted partner in financial excellence since 2003.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Founded in 2003, HRJ Consulting has grown from a small local
                  practice to a trusted accounting firm serving businesses and
                  individuals across the nation. Our journey began with a simple
                  mission: to provide honest, transparent, and expert financial
                  guidance.
                </p>
                <p>
                  For over 20 years, we’ve guided hundreds of clients 
                  through complex financial challenges, 
                  optimized their tax strategies, and helped them achieve
                  their business objectives. 
                  Our success stems from strong relationships, 
                  deep technical expertise, and an unwavering commitment to client satisfaction.
                </p>
                <p>
                  Today, we continue to evolve with the changing financial world,
                  embracing new technologies and methodologies while maintaining
                  the personal touch that has always defined our service.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 md:p-12 rounded-2xl">
              <div className="space-y-8">
                {[
                  {
                    icon: Target,
                    title: 'Our Mission',
                    description:
                      'To empower clients with clear financial insights and strategic guidance that drives sustainable growth and success.',
                  },
                  {
                    icon: Eye,
                    title: 'Our Vision',
                    description:
                      'To be the most trusted accounting partner, known for excellence, integrity, and innovative solutions.',
                  },
                  {
                    icon: Heart,
                    title: 'Our Values',
                    description:
                      'Integrity, excellence, transparency, and client-focused service guide everything we do.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="bg-emerald-600 p-3 rounded-lg h-fit">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
              Why We Stand Out
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our commitment to excellence sets us apart in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Certified Excellence',
                description:
                  'All our accountants are certified CPAs with advanced credentials and continuous professional education.',
              },
              {
                icon: Users,
                title: 'Client-Centered Approach',
                description:
                  'We take time to understand your unique situation and tailor our services to your specific needs.',
              },
              {
                icon: Briefcase,
                title: 'Industry Expertise',
                description:
                  'Deep knowledge across various sectors including retail, technology, healthcare, and professional services.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your financial success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Mitchell',
                role: 'Managing Partner, CPA',
                description:
                  '25 years of experience in corporate accounting and tax strategy. Specializes in business optimization.',
              },
              {
                name: 'David Chen',
                role: 'Senior Partner, CPA',
                description:
                  'Expert in individual tax planning and wealth management. 20 years helping clients maximize returns.',
              },
              {
                name: 'Jennifer Torres',
                role: 'Partner, CPA',
                description:
                  'Specialist in small business accounting and startup advisory. Passionate about entrepreneurship.',
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow text-center"
              >
                <div className="bg-emerald-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-emerald-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
