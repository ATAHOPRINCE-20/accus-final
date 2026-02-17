import { motion } from 'motion/react';
import { useState } from 'react';
import { Header } from '../components/Header';
import { PageHero } from '../components/PageHero';
import { Footer } from '../components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { LoanInquiryForm } from '../components/LoanInquiryForm';

import { SEO } from '../components/SEO';

export function ContactPage() {
  const [showForm, setShowForm] = useState(false);

  const branches = [
    { name: 'Kampala Branch', address: <>Conrad Plaza, 1st floor<br/>Plot 22, Entebbe Road</>, phone: '+256 763 820 376' },
    // Future branches - Uncomment when operational:
    // { name: 'Entebbe Branch', address: 'Plot 45, Airport Road', phone: '+256 700 123 457' },
    // { name: 'Jinja Branch', address: 'Plot 78, Main Street', phone: '+256 700 123 458' },
    // { name: 'Mbarara Branch', address: 'Plot 90, High Street', phone: '+256 700 123 459' },
    // { name: 'Gulu Branch', address: 'Plot 34, Churchill Drive', phone: '+256 700 123 460' },
    // { name: 'Mbale Branch', address: 'Plot 56, Republic Street', phone: '+256 700 123 461' },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Contact Us - Accus Capital" 
        description="Get in touch with Accus Capital. Visit our Kampala office, call us, or send a message for personalized financial assistance."
        keywords="accus capital contact, loan inquiry, kampala loans, visit accus capital, customer service"
        canonical="https://accuscapital.com/contact"
      />
      <Header />
      <main>
        <PageHero 
          title="Contact Us" 
          subtitle="Get in touch with us - we're here to help you achieve your financial goals. TrustedFinance."
          backgroundImage="https://res.cloudinary.com/dywusgc6j/image/upload/v1771087820/woman-enjoys-cellphone-communication-uses-contact-application-talks-via-modern-device-wears-casual-turtleneck-poses-outside_1_px6dw0.jpg"
        />

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
            {/* Quick Contact Options */}
            <div className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#00A99D] mb-4">
                  How Can We Help You Today?
                </h2>
                {/* <p className="text-gray-600 mb-12 text-lg">
                  Choose the best way to reach our team
                </p> */}
                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <motion.button
                    onClick={() => setShowForm(true)}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-[#00A99D] to-[#008B82] text-white rounded-xl p-8 transition-all duration-300 group shadow-lg hover:shadow-xl"
                  >
                    <div className="text-5xl mb-4">💰</div>
                    <h3 className="font-bold text-xl mb-2">Apply for Loan</h3>
                    <p className="text-sm text-white/90">
                      Start your loan application
                    </p>
                  </motion.button>

                  <motion.a
                    href="tel:+256700123456"
                    whileHover={{ y: -5 }}
                    className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#00A99D] hover:bg-gray-50 transition-all duration-300 group shadow-lg"
                  >
                    <div className="text-5xl mb-4">📞</div>
                    <h3 className="font-bold text-xl mb-2 text-[#54585A]">Call/Whatsapp Us</h3>
                    <p className="text-sm text-gray-600">
                      +256 763 820 376
                    </p>
                  </motion.a>

                  <motion.a
                    href="mailto:info@accuscapital.ug"
                    whileHover={{ y: -5 }}
                    className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#00A99D] hover:bg-gray-50 transition-all duration-300 group shadow-lg"
                  >
                    <div className="text-5xl mb-4">✉️</div>
                    <h3 className="font-bold text-xl mb-2 text-[#54585A]">Email Us</h3>
                    <p className="text-sm text-gray-600">
                      info@accuscapital.ug
                    </p>
                  </motion.a>
                </div> */}
              </motion.div>
            </div>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Branches List */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-[#00A99D] mb-6">Head Office</h2>
                <p className="text-gray-600 mb-8">
                  Visit our head office for personalized service.
                </p>
                <div className="space-y-4">
                  {branches.map((branch, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="bg-gray-50 rounded-xl p-6 hover:bg-[#E6F7F6] transition-colors duration-300"
                    >
                      <h3 className="text-lg font-bold text-[#00A99D] mb-2">{branch.name}</h3>
                      <div className="flex items-start space-x-2 text-gray-600 mb-2">
                        <MapPin size={16} className="mt-1 flex-shrink-0" />
                        <span>{branch.address}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Phone size={16} className="flex-shrink-0" />
                        <span>{branch.phone}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Details Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-[#00A99D] mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions? Our team is here to help you.
                </p>
                <div className="bg-gray-50 rounded-xl p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00A99D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#00A99D]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#54585A] mb-2">Call Us</h4>
                      <p className="text-gray-600"> +256 763 820 376</p>
                      {/* <p className="text-gray-600">+256 800 123 456</p> */}
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00A99D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#00A99D]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#54585A] mb-2">Email Us</h4>
                      <p className="text-gray-600">info@accuscapital.com</p>
                      <p className="text-gray-600">accuscapital@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00A99D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#00A99D]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#54585A] mb-2">Working Hours</h4>
                      <p className="text-gray-600">Mon - Fri: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Sat: 9:00 AM - 3:00 PM</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="relative z-10 pt-20 pb-40 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-[#00A99D] mb-4">Find Us On The Map</h2>
              <p className="text-gray-600">Our head office location in Kampala</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-200 rounded-2xl overflow-hidden shadow-xl shadow-[#00A99D]/10 mb-20"
              style={{ height: '400px' }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7597054326648!2d32.5810852!3d0.3105744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbd53ff41aa21%3A0x220c25a5c0d8b17b!2sAccus%20Capital%20Limited!5e0!3m2!1sen!2sug!4v1770658380665!5m2!1sen!2sug" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </section>
      </main>
      
      {/* Show Form Modal */}
      {showForm && <LoanInquiryForm onClose={() => setShowForm(false)} />}
      
      <Footer />
    </div>
  );
}