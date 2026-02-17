import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-gradient-to-br from-[#00A99D] to-[#008B82]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dywusgc6j/image/upload/v1771095327/business-entrepreneur-signing-contracts-documents-approve-activity_1_edebbm.jpg"
          alt="Accus Capital"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-20 max-w-[1400px] relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Trusted Finance for Your Growth
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed"
          >
            Responsible and accessible financial solutions for individuals, groups, and businesses across Uganda.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/apply">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-[#00A99D] px-8 py-6 rounded-full shadow-2xl hover:shadow-white/30 transition-all duration-300 group text-lg font-semibold"
              >
                Apply for a Loan
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <Link to="/#calculator">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 bg-transparent px-8 py-6 rounded-full transition-all duration-300 text-lg"
              >
                Calculate Loan
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}