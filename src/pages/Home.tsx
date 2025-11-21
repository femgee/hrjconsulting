import { TrendingUp, Shield, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Expert Accounting Services for Your Success
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-50 leading-relaxed">
              Connect with certified professionals who understand your financial
              goals and deliver results that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-colors flex items-center justify-center space-x-2 shadow-lg">
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Financial Growth',
                description: 'Strategic planning to maximize your financial potential',
              },
              {
                icon: Shield,
                title: 'Tax Protection',
                description: 'Comprehensive tax strategies and compliance',
              },
              {
                icon: Users,
                title: 'Dedicated Team',
                description: 'Experienced professionals committed to your success',
              },
              {
                icon: Award,
                title: 'Proven Results',
                description: 'Track record of excellence in accounting services',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform"
              >
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-600 transition-colors">
                  <feature.icon className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
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

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
              Why Choose HRJ Consulting?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We combine expertise, technology, and personalized service to
              deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                'Chartered Certified Accountant with 20+ years of experience',
                'Comprehensive financial planning and analysis',
                'Cutting-edge accounting software and tools',
                'Personalized service tailored to your needs',
                'Proactive tax planning and optimization',
                'Year-round support and consultation',
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-8 md:p-12 rounded-2xl text-white shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Ready to Transform Your Finances?
              </h3>
              <p className="text-emerald-50 mb-8 leading-relaxed text-lg">
                Join hundreds of satisfied clients who trust us with their
                accounting needs. Let's discuss how we can help you achieve
                your financial goals.
              </p>
              <a
                href="mailto:Admins@hrjconsulting.eu?subject=Consultation Request&body=Hello, I would like to schedule a consultation to discuss my accounting needs."
                className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-colors w-full sm:w-auto flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
              Trusted by Businesses Nationwide
            </h2>
            <p className="text-xl text-slate-600 mb-12">
              From startups to established enterprises, we deliver results.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: '500+', label: 'Clients Served' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '20+', label: 'Years Experience' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="text-5xl md:text-6xl font-bold text-emerald-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xl text-slate-700 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
