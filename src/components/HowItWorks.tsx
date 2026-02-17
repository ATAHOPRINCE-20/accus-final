import { motion } from 'motion/react';
import { FileText, CheckCircle, Wallet } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      number: '01',
      title: 'Make an Inquiry',
      description: 'Contact us via phone, email, or visit our offices to discuss your financial needs.',
      color: 'from-[#00A99D] to-[#008B82]',
    },
    {
      icon: CheckCircle,
      number: '02',
      title: 'We Reach Out',
      description: 'Our team will contact you to discuss the best financial solution for you.',
      color: 'from-[#00A99D] to-[#008B82]',
    },
    {
      icon: Wallet,
      number: '03',
      title: 'Receive Funds',
      description: 'Once approved, money is deposited directly to your account or mobile money.',
      color: 'from-[#00A99D] to-[#008B82]',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#E6F7F6] text-[#00A99D] rounded-full text-sm mb-4 font-semibold">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#54585A] mb-6">How It Works</h2>
          {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting a loan has never been easier. Three simple steps to financial freedom.
          </p> */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection Line - Desktop Only */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-[#00A99D] via-[#00A99D] to-[#00A99D] opacity-20 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative z-10"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center group">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00A99D] to-[#008B82] rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4 shadow-lg`}
                >
                  <step.icon className="text-white" size={36} />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#54585A] mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>

                {/* Decorative Element */}
                <div className="mt-6 w-16 h-1 bg-gradient-to-r from-[#00A99D] to-[#008B82] mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#00A99D] to-[#008B82] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Us Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
