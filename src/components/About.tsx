import { motion } from 'motion/react';
import { CheckCircle, Target, Eye, Heart } from 'lucide-react';
import { TeamSection } from './TeamSection';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower Ugandan individuals and businesses with accessible, transparent, and affordable financial solutions that drive economic growth.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading financial services provider in Uganda, recognized for innovation, customer satisfaction, and community impact.',
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, transparency, customer-centricity, innovation, and commitment to community development guide everything we do.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full"
          >
            <div className="relative z-10 h-full">
              <img
                src="https://images.unsplash.com/photo-1693473280857-2d7465a27c1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMHVnYW5kYXxlbnwxfHx8fDE3NjkxNzc0OTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Uganda Credit Office"
                className="rounded-3xl shadow-2xl w-full h-full object-cover"
              />
            </div>

            {/* Background decorative element */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#E6F7F6] to-[#D4F1EF] rounded-3xl -z-10 translate-x-8 translate-y-8"></div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-[#E6F7F6] text-[#00A99D] rounded-full text-sm mb-4">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#00A99D] mb-6">
              Empowering Uganda's Financial Future
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              For over {new Date().getFullYear() - 2020} years, Accus Capital has been at the forefront of providing innovative financial solutions to Ugandan families and businesses. We understand the unique challenges and opportunities in our market, and we're committed to helping you achieve your financial goals.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              {[
                'Over 50,000 satisfied customers nationwide',
                'Transparent pricing with no hidden fees',
                'Quick approval process with minimal documentation',
                'Professional and confidential service',
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-[#00A99D] to-[#008B82] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <span className="text-gray-700">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mission, Vision, Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-[#00A99D] to-[#008B82] rounded-2xl flex items-center justify-center mb-6"
              >
                <value.icon className="text-white" size={32} />
              </motion.div>
              <h3 className="text-2xl font-bold text-[#00A99D] mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <TeamSection />
      </div>
    </section>
  );
}