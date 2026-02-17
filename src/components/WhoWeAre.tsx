import { motion } from 'motion/react';
import { Shield, Target, Compass } from 'lucide-react';

export function WhoWeAre() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#54585A] mb-6">Who We Are</h2>
          <h3 className="text-2xl md:text-3xl text-[#00A99D] font-semibold mb-6">
            A Financial Partner You Can Trust
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Accus Capital Limited is a regulated financial services provider operating under Uganda's Tier 4 Microfinance Institutions and Money Lenders Act.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mt-4">
            We provide structured financial solutions designed to support both immediate needs and long-term financial stability.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 px-4 md:px-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#00A99D]/5 to-[#00A99D]/10 rounded-2xl p-8 border border-[#00A99D]/20"
          >
            <div className="w-14 h-14 bg-[#00A99D]/10 rounded-full flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-[#00A99D]" />
            </div>
            <h3 className="text-2xl font-bold text-[#54585A] mb-4">Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be the most trusted provider of financial services in Uganda.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-[#00A99D]/5 to-[#00A99D]/10 rounded-2xl p-8 border border-[#00A99D]/20"
          >
            <div className="w-14 h-14 bg-[#00A99D]/10 rounded-full flex items-center justify-center mb-6">
              <Compass className="w-7 h-7 text-[#00A99D]" />
            </div>
            <h3 className="text-2xl font-bold text-[#54585A] mb-4">Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To deliver responsible, accessible, and trusted financial solutions in Uganda.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl"
        >
          <h3 className="text-3xl font-bold text-[#54585A] mb-10 text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00A99D] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#54585A] mb-3">Trust</h4>
              <p className="text-gray-700 leading-relaxed">
                We build confidence through transparency, fairness, and consistency in every client relationship.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#00A99D] rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#54585A] mb-3">Responsibility</h4>
              <p className="text-gray-700 leading-relaxed">
                We provide financial solutions that are carefully assessed, responsibly structured, and aligned with real needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#00A99D] rounded-full flex items-center justify-center mx-auto mb-6">
                <Compass className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#54585A] mb-3">Discipline</h4>
              <p className="text-gray-700 leading-relaxed">
                We operate with strong controls, clear processes, and accountability to protect capital and ensure sustainability.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
