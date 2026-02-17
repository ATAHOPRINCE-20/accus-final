import { motion } from 'motion/react';
import { TrendingUp, Users, Globe } from 'lucide-react';

export function OurFuture() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#00A99D]/5 to-[#00A99D]/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#54585A] mb-6">Our Future</h2>
          <div className="max-w-4xl mx-auto">
            {/* <p className="text-lg text-gray-700 leading-relaxed">
              Accus Capital continues to strengthen its systems, expand access responsibly, and invest in technology and partnerships that support inclusive and sustainable financial services in Uganda.
            </p> */}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl p-8 shadow-md text-center"
          >
            <div className="w-14 h-14 bg-[#00A99D]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-7 h-7 text-[#00A99D]" />
            </div>
            <h3 className="text-xl font-bold text-[#54585A] mb-3">Strengthening Systems</h3>
            <p className="text-gray-600">
              Building robust infrastructure for secure and efficient service delivery
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-8 shadow-md text-center"
          >
            <div className="w-14 h-14 bg-[#00A99D]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-7 h-7 text-[#00A99D]" />
            </div>
            <h3 className="text-xl font-bold text-[#54585A] mb-3">Expanding Access</h3>
            <p className="text-gray-600">
              Reaching more communities while maintaining responsible lending practices
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl p-8 shadow-md text-center"
          >
            <div className="w-14 h-14 bg-[#00A99D]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="w-7 h-7 text-[#00A99D]" />
            </div>
            <h3 className="text-xl font-bold text-[#54585A] mb-3">Technology & Partnerships</h3>
            <p className="text-gray-600">
              Leveraging innovation to deliver inclusive financial services
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
