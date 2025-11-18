import {
  Calculator,
  FileText,
  TrendingUp,
  Building2,
  Users,
  PieChart,
  ClipboardCheck,
  DollarSign,
  BarChart3,
  Shield,
  Wallet,
  BookOpen,
} from 'lucide-react';

export default function Services() {
  return (
    <div>
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-emerald-50 leading-relaxed">
              Comprehensive accounting solutions tailored to your business and
              personal financial needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
              For Businesses
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Strategic financial services to help your business thrive and grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Calculator,
                title: 'Bookkeeping Services',
                description:
                  'Accurate and timely recording of all financial transactions. Monthly reconciliations and financial statements to keep your books in perfect order.',
              },
              {
                icon: FileText,
                title: 'Tax Preparation & Planning',
                description:
                  'Strategic tax planning to minimize liability. Complete preparation of business tax returns with attention to all deductions and credits.',
              },
              {
                icon: TrendingUp,
                title: 'Financial Analysis',
                description:
                  'In-depth analysis of your financial performance. Identify trends, opportunities, and areas for improvement with detailed reporting.',
              },
              {
                icon: Building2,
                title: 'Business Formation',
                description:
                  'Expert guidance on entity selection and setup. LLC, S-Corp, C-Corp formation and compliance assistance.',
              },
              {
                icon: PieChart,
                title: 'CFO Advisory Services',
                description:
                  'Strategic financial leadership for growing businesses. Budgeting, forecasting, and financial planning without the full-time cost.',
              },
              {
                icon: ClipboardCheck,
                title: 'Payroll Management',
                description:
                  'Complete payroll processing and tax filing. Ensure compliance with all federal and state regulations.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-xl hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="bg-emerald-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
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
              For Individuals
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Personal financial services to secure your future and maximize
              your wealth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: 'Individual Tax Preparation',
                description:
                  'Expert preparation of personal income tax returns. Maximize deductions and credits while ensuring full compliance.',
              },
              {
                icon: BarChart3,
                title: 'Tax Planning',
                description:
                  'Proactive strategies to reduce your tax burden. Year-round planning to optimize your financial situation.',
              },
              {
                icon: Shield,
                title: 'HRMC Representation',
                description:
                  'Professional representation during audits and disputes. Navigate complex HRMC issues with confidence.',
              },
              {
                icon: Wallet,
                title: 'Wealth Management',
                description:
                  'Comprehensive financial planning and investment guidance. Build and protect your wealth for long-term success.',
              },
              {
                icon: BookOpen,
                title: 'Estate Planning',
                description:
                  'Strategic planning for wealth transfer and legacy. Minimize estate taxes and ensure your wishes are fulfilled.',
              },
              {
                icon: Users,
                title: 'Retirement Planning',
                description:
                  'Optimize retirement savings and distribution strategies. Plan for a secure and comfortable retirement.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="bg-emerald-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Industry Specializations
            </h2>
            <p className="text-xl text-emerald-50 mb-12 max-w-3xl mx-auto leading-relaxed">
              We have deep expertise serving clients across various industries,
              understanding the unique challenges and opportunities each sector
              presents.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                'Healthcare',
                'Technology',
                'Retail',
                'Real Estate',
                'Manufacturing',
                'Professional Services',
                'Non-Profit',
                'E-Commerce',
              ].map((industry, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm py-4 px-6 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <span className="font-medium text-lg">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Our team is here to help you identify the right solutions for your
              specific situation. Schedule a consultation to discuss your needs.
            </p>
            <a
              href="mailto:Admins@hrjconsulting.eu?subject=Free Consultation Request&body=Hello, I'm interested in learning more about your services and would like to schedule a free consultation."
              className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors shadow-lg"
            >
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
