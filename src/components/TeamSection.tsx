import { motion } from 'motion/react';
// import { Users, Shield, Target, Linkedin } from 'lucide-react';

export function TeamSection() {
  const teamMembers = [
    {
      name: 'Ms Phiona Kebikomi',
      position: 'Chair of the Board',
      image: 'https://res.cloudinary.com/dywusgc6j/image/upload/v1771272246/PHOTO-2026-02-16-16-21-51_b5jpbi.jpg',
      bio: 'Leads the Board in setting strategic direction, ensuring good governance, and driving the institution\'s long-term growth and sustainability.',
      email: 'kebikomi.phiona@accuscapital.com'
    },
    {
      name: 'Dr.Allen Kiconco',
      position: 'Director,Operations',
      image: 'https://res.cloudinary.com/dywusgc6j/image/upload/v1771313184/PHOTO-2026-02-17-09-19-18_ldpxa4.jpg',
      bio: 'Oversees daily operations, ensuring efficiency and excellence in service delivery across all branches.',
      email: 'allen.kiconco@accuscapital.com'
    },
    {
      name: 'Counsel Pitson Abaasa',
      position: 'Director,Legal Affairs',
      image: 'https://res.cloudinary.com/dywusgc6j/image/upload/v1771312010/PHOTO-2026-02-17-09-16-53_kykstj.jpg',
      bio: 'Provides expert legal counsel, ensuring regulatory compliance and safeguarding the institution\'s interests.',
      email: 'abaasa.pitson@accuscapital.com'
    },
    
    {
      name: 'Ms Brenda Izagiire',
      position: 'Administrator',
      image: 'https://res.cloudinary.com/dywusgc6j/image/upload/v1771312084/PHOTO-2026-02-17-09-26-02_hx9uks.jpg',
      bio: 'Coordinates administrative functions to ensure smooth organizational workflow and effective resource management.',
      email: 'brenda.izagiire@accuscapital.com'
    },
    {
      name: 'Ms Tracy Busenze',
      position: 'Credit Manager',
      image: 'https://res.cloudinary.com/dywusgc6j/image/upload/v1771272222/PHOTO-2026-02-16-16-21-07_laxrfp.jpg',
      bio: 'Leads the credit department, overseeing portfolio quality and implementing robust lending strategies.',
      email: 'tracy.busenze@accuscapital.com'
    },
    {
      name: 'Mr Cosmas Rwothumiyu',
      position: 'Credit Officer',
      image: 'https://res.cloudinary.com/dywusgc6j/image/upload/v1771312034/PHOTO-2026-02-17-09-17-21_gxfztc.jpg',
      bio: 'Evaluates loan applications and manages client relationships to maintain a healthy credit portfolio.',
      email: 'cosmas.rwothumiyu@accuscapital.com'
    },
    {
      name: 'Mr Peter Tukundane',
      position: 'Agent Banking and Mobile Money Officer',
      image: 'https://res.cloudinary.com/dywusgc6j/image/upload/v1771312048/PHOTO-2026-02-17-09-17-35_arhbuv.jpg',
      bio: 'Drives digital financial inclusion through agent banking expansion and mobile lending solutions.',
      email: 'peter.tukundane@accuscapital.com'
    },
    
  ];
  const showIndividualMembers = true; // Set to true next month when individual pics are available

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#E6F7F6] text-[#00A99D] rounded-full text-sm mb-4 font-semibold">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#00A99D] mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced professionals committed to your financial success
          </p>
        </motion.div>

        {/* Group Photo - Temporary for now */}
        {!showIndividualMembers && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] bg-gray-100"
          >
            <img
              src="https://res.cloudinary.com/dywusgc6j/image/upload/v1770643263/PHOTO-2026-02-09-15-23-34_nlbrct.jpg"
              alt="Accus Capital Team"
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}

        {/* Team Members Grid - Hidden until next month */}
        {showIndividualMembers && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col"
              >
                {/* Image */}
                <div className="relative h-96 overflow-hidden shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Name and Position Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-[#00A99D] font-semibold">{member.position}</p>
                  </div>
                </div>

                {/* Bio and Email */}
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white flex-grow flex flex-col justify-between">
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">{member.bio}</p>
                  
                  <a 
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center text-[#00A99D] hover:text-[#008B82] transition-colors text-sm font-medium mt-auto"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {member.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}

{/* Team Values/Strengths - Hidden as per request */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-[#54585A] mb-4">Our Team Values</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Guided by strong internal controls and a shared commitment to trust, responsibility, and discipline
          </p>
        </motion.div> */}

        {/* Team Strengths */}
        {/* <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#00A99D] to-[#008B82] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#54585A] mb-3">Collaborative Approach</h3>
            <p className="text-gray-600 leading-relaxed">
              Working together across departments to ensure seamless service delivery
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#00A99D] to-[#008B82] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#54585A] mb-3">Strong Controls</h3>
            <p className="text-gray-600 leading-relaxed">
              Maintaining institutional integrity through disciplined processes
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#00A99D] to-[#008B82] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#54585A] mb-3">Client-Focused</h3>
            <p className="text-gray-600 leading-relaxed">
              Supporting clients' financial needs with professionalism and care
            </p>
          </motion.div>
        </div> */}
      </div>
    </section>
  );
}