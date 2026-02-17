import { motion } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is Accus Capital a licensed financial institution?',
      answer: 'Yes. Accus Capital Limited operates under Uganda’s Tier 4 Microfinance Institutions and Money Lenders Act. We maintain structured policies, internal controls, and responsible lending standards in line with regulatory requirements.',
    },
    {
      question: 'What type of loans does Accus Capital provide?',
      answer: 'We provide secured loans only. All loan facilities require acceptable collateral as part of our responsible lending framework.',
    },
    {
      question: 'What loan amounts do you offer?',
      answer: 'We provide loans ranging from UGX 100,000 to UGX 100,000,000, depending on collateral value, repayment capacity, and internal assessment.',
    },
    {
      question: 'What repayment periods do you offer?',
      answer: 'Loan durations range from 1 month to 12 months. The approved term depends on the loan amount, collateral value, and repayment capacity.',
    },
    {
      question: 'What types of collateral do you accept?',
      answer: (
        <>
          We may accept:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Motor vehicle and cycle logbooks</li>
            <li>Land titles</li>
            <li>Selected valuable assets (subject to assessment)</li>
          </ul>
          <p className="mt-2">Collateral must be legally owned and verifiable.</p>
        </>
      ),
    },
    {
      question: 'How do you determine the loan amount?',
      answer: (
        <>
          Loan amounts are determined by:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Collateral value</li>
            <li>Repayment capacity</li>
            <li>Loan purpose</li>
            <li>Existing financial obligations</li>
          </ul>
          <p className="mt-2">We aim to approve sustainable amounts aligned with your capacity.</p>
        </>
      ),
    },
    {
      question: 'How do you assess repayment capacity?',
      answer: (
        <>
          We conduct a structured financial review. Depending on your situation, we may request:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Bank statements</li>
            <li>Proof of income</li>
            <li>Company books (for registered businesses)</li>
            <li>Evidence of trading activity</li>
          </ul>
          <p className="mt-2">This ensures responsible lending.</p>
        </>
      ),
    },
    {
      question: 'Who can apply for a loan?',
      answer: 'Individuals, registered businesses, and organised groups may apply, subject to eligibility and documentation requirements.',
    },
    {
      question: 'What documents are required?',
      answer: (
        <>
          Typically:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Valid national ID</li>
            <li>Proof of income or business activity</li>
            <li>Business or group registration documents (where applicable)</li>
          </ul>
          <p className="mt-2">Specific requirements depend on the loan type.</p>
        </>
      ),
    },
    {
      question: 'Do I need to visit the office?',
      answer: 'Yes. Applicants MUST visit our office in person for identity verification, collateral assessment, and documentation. We do not approve loans remotely without proper verification.',
    },
    {
      question: 'How does the application process work?',
      answer: (
        <>
          The process includes:
          <ol className="list-decimal pl-5 mt-2 space-y-1">
            <li>Application submission</li>
            <li>Document and collateral verification</li>
            <li>Financial assessment</li>
            <li>Approval decision</li>
            <li>Agreement signing and disbursement</li>
          </ol>
          <p className="mt-2">Clear communication is maintained throughout.</p>
        </>
      ),
    },
    {
      question: 'How long does approval take?',
      answer: 'We aim to disburse within 24 hours. However, processing time depends on documentation completeness and collateral verification. Complete and accurate submissions help speed up the process.',
    },
    {
      question: 'What are your interest rates and fees?',
      answer: 'We lend at 2.8% interest rate per month. However, added fees vary by loan product and duration. All terms are clearly explained before signing. We do not apply hidden charges.',
    },
    {
      question: 'What happens if I experience repayment difficulties?',
      answer: 'Clients should communicate early. Delays may attract penalties as stated in the agreement. Structured solutions may be considered in certain circumstances.',
    },
    {
      question: 'Why should I choose Accus Capital?',
      answer: 'We combine regulatory compliance, disciplined risk management, transparent processes, and professional service delivery to build trusted financial relationships.',
    },
  ];

  return (
    <section id="faqs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#E6F7F6] text-[#00A99D] rounded-full text-sm mb-4 font-semibold">
            Got Questions?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#54585A] mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about our loan services
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white rounded-xl p-6 text-left hover:shadow-lg transition-all duration-300 group border border-gray-100 hover:border-[#00A99D]/30"
              >
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg font-bold text-[#54585A] group-hover:text-[#00A99D] transition-colors duration-300 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <div className="w-8 h-8 bg-gradient-to-br from-[#00A99D] to-[#008B82] rounded-full flex items-center justify-center">
                        <Minus className="text-white" size={18} />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-[#00A99D] group-hover:to-[#008B82] rounded-full flex items-center justify-center transition-all duration-300">
                        <Plus className="text-gray-600 group-hover:text-white transition-colors duration-300" size={18} />
                      </div>
                    )}
                  </div>
                </div>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 leading-relaxed pt-4 pr-12">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-block text-[#00A99D] font-semibold hover:text-[#008B82] transition-colors duration-300 border-b-2 border-[#00A99D] hover:border-[#008B82]"
          >
            Contact our support team →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
