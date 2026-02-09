import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { Users, TrendingUp, Clock, Award } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function Counter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const [isInView, setIsInView] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2.5,
        ease: 'easeOut',
      });

      return controls.stop;
    }
  }, [isInView, count, value]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(latest.toLocaleString());
    });

    return unsubscribe;
  }, [rounded]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-[#00A99D] mb-1">
      {prefix}{displayValue}{suffix}
    </div>
  );
}

export function StatsStrip() {
  const yearsOfService = new Date().getFullYear() - 2020;
  const stats = [
    { 
      icon: Users, 
      value: 5000, 
      suffix: '+',
      label: 'Happy Clients' 
    },
    { 
      icon: TrendingUp, 
      value: 10, 
      suffix: 'B+',
      prefix: 'UGX ',
      label: 'Loans Disbursed' 
    },
    { 
      icon: Clock, 
      value: 24, 
      suffix: ' Hours',
      label: 'Quick Processing' 
    },
    { 
      icon: Award, 
      value: yearsOfService, 
      suffix: '+ Years',
      label: 'Industry Experience' 
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-3">
                <div className="w-14 h-14 rounded-full bg-[#00A99D]/10 flex items-center justify-center">
                  <stat.icon className="text-[#00A99D]" size={28} />
                </div>
              </div>
              <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              <div className="text-sm md:text-base text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}