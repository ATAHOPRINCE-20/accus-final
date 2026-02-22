import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export function CallToAction() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCalculatorClick = (e: MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/services') {
      navigate('/services');
      setTimeout(() => {
        const el = document.getElementById('calculator');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    } else {
      const el = document.getElementById('calculator');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00A99D] via-[#008B82] to-[#00A99D]"></div>

      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-[#00A99D] rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#33BAAF] rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-white/20 border border-white/30 rounded-full text-white text-sm mb-6">
              Ready to Get Started?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Get Your Loan Approved in
            <span className="block text-white">24 Hours</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
          >
            Join hundreds of satisfied Ugandans who have achieved their financial goals with our fast, reliable, and affordable loan solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link to="/apply">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-[#00A99D] px-10 py-6 rounded-full shadow-2xl hover:shadow-white/50 transition-all duration-300 group text-lg font-semibold"
              >
                Apply for a Loan Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <button
              onClick={handleCalculatorClick}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#00A99D] px-10 py-6 rounded-full transition-all duration-300 text-lg font-medium"
            >
              Calculate Your Loan
            </button>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 text-white bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Phone className="text-white" size={20} />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-300">Call Us</div>
                <div className="font-bold">+256 763 820 376</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Mail className="text-white" size={20} />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-300">Email Us</div>
                <div className="font-bold">info@accuscapital.com</div>
              </div>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-gray-300"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Member of the Uganda Microfinance Regulatory authority</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>{new Date().getFullYear() - 2020}+ Years of Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Secure & Confidential</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}