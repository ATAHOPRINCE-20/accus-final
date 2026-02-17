import React from 'react';
import { motion } from 'motion/react';
import { User, Briefcase, Users, AlertCircle, Smartphone } from 'lucide-react';

interface ServicesProps {
  limit?: number;
}

export function Services({ limit }: ServicesProps) {
  const allServices = [
    {
      icon: User,
      title: 'Personal Loans',
      description: 'Designed to address individual needs such as education, medical emergencies, or personal projects, with structured repayment options.',
      image: 'https://res.cloudinary.com/dywusgc6j/image/upload/v1771275378/businessman-smiling-camera-office_l9r4xq_1_ikdww4.jpg',
      anchor: 'personal-loans',
    },
    {
      icon: Briefcase,
      title: 'Business Loans',
      description: 'Tailored to support entrepreneurs and businesses by providing capital for expansion, operations, or new ventures.',
      image: 'https://res.cloudinary.com/dywusgc6j/image/upload/v1770472088/Bussiness_loan_kdpmdi.jpg',
      anchor: 'business-loans',
    },
    {
      icon: Users,
      title: 'Group Loans',
      description: 'Structured credit solutions for cooperatives, savings groups, and associations.',
      image: 'https://res.cloudinary.com/dywusgc6j/image/upload/v1770472086/School_fees_loans_b1orws.jpg',
      anchor: 'group-loans',
    },
    {
      icon: AlertCircle,
      title: 'Emergency Loans',
      description: 'Timely and responsible financial assistance to meet urgent, unexpected needs.',
      image: 'https://res.cloudinary.com/dywusgc6j/image/upload/v1771012909/frustrated-young-african-american-businessman-having-bad-headache_gk4yry.jpg',
      anchor: 'emergency-loans',
    },
    {
      icon: Smartphone,
      title: 'Digital and Banking Solutions',
      description: 'Agent banking and mobile money services to increase accessibility and convenience for our clients.',
      image: 'https://res.cloudinary.com/dywusgc6j/image/upload/v1770473174/digital_banking_ma8l2j.jpg',
      anchor: 'digital-banking',
    },
  ];

  const displayServices = limit ? allServices.slice(0, limit) : allServices;

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <span className="inline-block px-4 py-2 bg-[#E6F7F6] text-[#00A99D] rounded-full text-sm mb-4 font-semibold">
            What We Offer
          </span> */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#54585A] mb-6">What We Offer</h2>
          {/* <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial solutions designed to meet diverse needs
          </p> */}
        </motion.div>
 
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service, index) => (
            <motion.div
              key={index}
              id={service.anchor}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Hero Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <service.icon className="w-7 h-7 text-[#00A99D]" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#54585A] mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
 
        {/* View All Link - Only show if limited */}
        {limit && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="/services"
              className="inline-block text-[#00A99D] font-semibold hover:text-[#008B82] transition-colors duration-300 border-b-2 border-[#00A99D] hover:border-[#008B82] pb-1"
            >
              View All Services Details →
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}