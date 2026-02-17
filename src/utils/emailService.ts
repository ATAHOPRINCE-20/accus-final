import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

interface LoanInquiryData {
  fullName: string;
  phoneNumber: string;
  email: string;
  loanAmount: string;
  purpose: string;
  incomeSource: string;
  timeline: string;
  contactMethod: string;
  message: string;
}

export const sendLoanInquiry = async (data: LoanInquiryData) => {
  try {
    const templateParams = {
      from_name: data.fullName,
      to_name: 'Accus Capital Team',
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      email: data.email || 'Not provided',
      loanAmount: data.loanAmount,
      purpose: data.purpose,
      incomeSource: data.incomeSource,
      timeline: data.timeline,
      contactMethod: data.contactMethod,
      message: data.message || 'No additional message',
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error };
  }
};
