import { motion } from 'motion/react';
import { Shield, Award, Users, Lock, Clock, CheckCircle } from 'lucide-react';

export function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: 'Licensed & Regulated',
      description: 'Member of UMRA',
    },
    {
      icon: Award,
      title: `${new Date().getFullYear() - 2020}+ Years`,
      description: 'Serving Uganda',
    },
    {
      icon: Users,
      title: '10,000+',
      description: 'Happy Clients',
    },
    {
      icon: Lock,
      title: 'Secure',
      description: 'Data Protection',
    },
    {
      icon: Clock,
      title: '24-Hour',
      description: 'Approval Time',
    },
    {
      icon: CheckCircle,
      title: 'Trusted',
      description: 'A+ Rating',
    },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#54585A] mb-3">
            Trusted by Thousands Across Uganda
          </h3>
          <p className="text-gray-600">
            Licensed, regulated, and committed to your financial success
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 text-center border border-gray-100 hover:border-[#00A99D]/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#00A99D] to-[#008B82] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <badge.icon className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-[#54585A] text-sm mb-1">{badge.title}</h4>
              <p className="text-xs text-gray-500">{badge.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Certification Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-8"
        >
          <div className="flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-lg border border-gray-200">
            <Shield className="text-[#00A99D]" size={28} />
            <div>
              <p className="text-xs text-gray-500">Regulated by</p>
              <p className="font-bold text-[#54585A] text-sm">Uganda Microfinance Regulatory Authority</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-lg border border-gray-200">
            <Lock className="text-[#00A99D]" size={28} />
            <div>
              <p className="text-xs text-gray-500">Certified</p>
              <p className="font-bold text-[#54585A] text-sm">ISO 27001 Data Security</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
