import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              Ready to take control of your finances? We're here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Contact Information
              </h2>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                Our team is available to answer your questions and discuss how
                we can help you achieve your financial goals.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Office Address
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      14b Connaught Mews<br />
                      Ilford<br />
                      IG1 1RN
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Phone
                    </h3>
                    <p className="text-slate-600">
                      Main: (+44) 208 4784344<br />                     
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Email
                    </h3>
                    <p className="text-slate-600">
                      General: Admins@hrjconsulting.eu<br />                    
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Business Hours
                    </h3>
                    <p className="text-slate-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                    <p className="text-sm text-slate-500 mt-2">
                      Extended hours available during tax season
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 md:p-12 rounded-2xl">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Schedule a Consultation
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                The first step to financial clarity starts with a conversation.
                We offer free initial consultations to discuss your needs and
                how we can help.
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border-2 border-emerald-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <Calendar className="h-6 w-6 text-emerald-600" />
                    <h3 className="text-xl font-semibold text-slate-800">
                      Free Consultation
                    </h3>
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    30-minute meeting to understand your needs and explain how
                    we can help.
                  </p>
                  <a
                    href="mailto:Admins@hrjconsulting?subject=Book Consultation&body=Hello, I would like to book a free 30-minute consultation. Please let me know your available times.%0D%0A%0D%0AName:%0D%0APhone:%0D%0APreferred Date/Time:%0D%0AReason for consultation:"
                    className="block w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors text-center"
                  >
                    Book Consultation
                  </a>
                </div>

                <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    Preferred Contact Method
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Call us directly at <strong>(+44) 208 4784344</strong> or email{' '}
                    <strong>Admin@hrjconsulting.eu</strong> with your questions.
                    We typically respond within one business day.
                  </p>
                </div>

                <div className="bg-emerald-600 p-6 rounded-lg text-white">
                  <h3 className="text-xl font-semibold mb-3">
                    Emergency Tax Assistance
                  </h3>
                  <p className="text-emerald-50 leading-relaxed">
                    Facing an urgent tax matter? Call our priority line at{' '}
                    <strong className="text-white">(+44) 208 4784344</strong> for
                    immediate assistance with HRMC notices, audits, or deadlines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-slate-600">
              Conveniently located in the heart of the financial district
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden h-96 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.486950236102!2d0.08259097533768707!3d51.55930610691177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a687a9f24fe5%3A0xbe390c4b2d47de2f!2sThe%20Manse%2C%2014b%20Connaught%20Rd%2C%20Ilford%20IG1%201RN!5e0!3m2!1sen!2suk!4v1763478829131!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl text-center">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Parking
              </h3>
              <p className="text-slate-600">
                Validated parking available in the building garage
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Public Transit
              </h3>
              <p className="text-slate-600">
                A walk alone from the bus stop
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Accessibility
              </h3>
              <p className="text-slate-600">
                Fully accessible office with elevator access
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
