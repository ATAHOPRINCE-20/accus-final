import { motion } from 'motion/react';

interface PageHeroProps {
  title: string;
  subtitle?: React.ReactNode;
  backgroundImage?: string;
}

export function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative h-[50vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <>
            <img
              src={backgroundImage}
              alt={title}
              className="w-full h-full object-cover"
            />
            {/* Subtle dark overlay for better text readability */}
            {/* Subtle dark overlay for better text readability */}
            <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#00A99D] via-[#008B82] to-[#00A99D]"></div>
        )}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <div className="text-xl text-white max-w-3xl mx-auto">
              {subtitle}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}