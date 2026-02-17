import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronRight, ChevronLeft, Check } from "lucide-react";
import { ModalWrapper } from "./ui/ModalWrapper";
import { sendLoanInquiry } from "../utils/emailService";
import { toast } from "sonner";

interface FormData {
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

interface LoanInquiryFormProps {
  onClose?: () => void;
}

export function LoanInquiryForm({ onClose }: LoanInquiryFormProps) {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    loanAmount: "",
    purpose: "",
    incomeSource: "",
    timeline: "",
    contactMethod: "",
    message: "",
  });

  const totalSteps = 8;

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
      document.querySelector(".form-scroll")?.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

// ...

  const handleSubmit = async () => {
    // Defensive check: Ensure all required fields are filled
    const requiredFields: (keyof FormData)[] = [
      "fullName", "phoneNumber", "loanAmount", "purpose", 
      "incomeSource", "timeline", "contactMethod"
    ];
    
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      toast.error("Please fill in all required fields before submitting.");
      return;
    }

    // Validate phone number format
    const phone = formData.phoneNumber.trim();
    if (!phone.startsWith("0") && !phone.startsWith("+256")) {
      toast.error("Phone number must start with 0 or +256");
      return;
    }

    setIsSubmitting(true);
    const result = await sendLoanInquiry(formData);
    setIsSubmitting(false);

    if (result.success) {
      toast.success("Loan inquiry submitted successfully! We will contact you shortly.");
      onClose?.();
    } else {
      toast.error("Failed to submit inquiry. Please try again or contact us directly.");
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.fullName.trim() !== "";
      case 2:
        return formData.phoneNumber.trim() !== "";
      case 4:
        return formData.loanAmount !== "";
      case 5:
        return formData.purpose !== "";
      case 6:
        return formData.incomeSource !== "";
      case 7:
        return formData.timeline !== "";
      case 8:
        return formData.contactMethod !== "";
      default:
        return true;
    }
  };

  const inputStyle =
    "w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A99D]";

  const selectButton = (value: string, selected: string) =>
    `w-full border p-3 rounded-lg mb-2 transition ${
      value === selected
        ? "bg-[#00A99D] text-white border-[#00A99D]"
        : "hover:bg-gray-100"
    }`;

  return (
    <ModalWrapper isOpen={true} onClose={() => onClose?.()}>
      <div className="bg-white md:rounded-2xl shadow-2xl w-full max-w-4xl h-[90dvh] md:h-[500px] overflow-hidden grid md:grid-cols-2 relative">
        {/* LEFT IMAGE - HIDDEN ON MOBILE */}
        <div className="hidden md:block relative h-full">
          <img
            src="https://res.cloudinary.com/dywusgc6j/image/upload/v1770641848/afro-american-woman-holding-economy-credit-card-doing-online-shopping_cujhgk.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#00A99D]/20" />
        </div>

        {/* RIGHT PANEL */}
        <div className="h-full overflow-hidden grid grid-rows-[auto_auto_1fr_auto] bg-white">
          {/* HEADER */}
          <div className="p-6 border-b flex-shrink-0 z-20">
            <div className="flex justify-between mb-3">
              <p className="text-sm text-gray-600">
                Loan Inquiry - Step {currentStep} of {totalSteps}
              </p>

              <button onClick={() => onClose?.()}>
                <X />
              </button>
            </div>

            <div className="w-full bg-gray-200 h-2 rounded-full">
              <motion.div
                className="bg-[#00A99D] h-2 rounded-full"
                animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {/* BRAND */}
          <div className="px-6 pt-3 md:pt-4 flex-shrink-0 bg-white">
            <h3 className="font-bold text-lg text-[#54585A]">
              ACCUS CAPITAL
            </h3>
          </div>

          {/* FORM CONTENT */}
          <div className="overflow-y-auto px-6 py-6 pb-6 form-scroll">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
              >
                {/* STEP 1 */}
                {currentStep === 1 && (
                  <>
                    <h2 className="text-2xl font-bold mb-4">
                      Let's start with your name
                    </h2>

                    <input
                      autoFocus
                      className={inputStyle}
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) =>
                        updateFormData("fullName", e.target.value)
                      }
                    />
                  </>
                )}

                {/* STEP 2 */}
                {currentStep === 2 && (
                  <>
                    <h2 className="text-2xl font-bold mb-4">
                      Your phone number
                    </h2>

                    <input
                      className={inputStyle}
                      placeholder="+256 700 000 000"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        updateFormData("phoneNumber", e.target.value)
                      }
                    />
                  </>
                )}

                {/* STEP 3 */}
                {currentStep === 3 && (
                  <>
                    <h2 className="text-2xl font-bold mb-4">
                      Email (Optional)
                    </h2>

                    <input
                      className={inputStyle}
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        updateFormData("email", e.target.value)
                      }
                    />
                  </>
                )}

                {/* STEP 4 */}
                {currentStep === 4 && (
                  <>
                    <h2 className="text-2xl font-bold mb-4">
                      Loan Amount
                    </h2>

                    {[
                      "Below 500,000",
                      "500,000 – 2,000,000",
                      "2,000,000 – 5,000,000",
                      "Above 5,000,000",
                    ].map((option) => (
                      <button
                        key={option}
                        onClick={() =>
                          updateFormData("loanAmount", option)
                        }
                        className={selectButton(
                          option,
                          formData.loanAmount
                        )}
                      >
                        UGX {option}
                      </button>
                    ))}
                  </>
                )}

                {/* STEP 5 */}
                {currentStep === 5 && (
                  <>
                    <h2 className="text-2xl font-bold mb-4">
                      Loan Purpose
                    </h2>

                    {[
                      "Business",
                      "Personal",
                      "School Fees",
                      "Emergency",
                    ].map((option) => (
                      <button
                        key={option}
                        onClick={() =>
                          updateFormData("purpose", option)
                        }
                        className={selectButton(
                          option,
                          formData.purpose
                        )}
                      >
                        {option}
                      </button>
                    ))}
                  </>
                )}

                {/* STEP 6 */}
                {currentStep === 6 && (
                  <>
                    <h2 className="text-2xl font-bold mb-4">
                      Income Source
                    </h2>

                    {[
                      "Employment",
                      "Business",
                      "Farming",
                      "Other",
                    ].map((option) => (
                      <button
                        key={option}
                        onClick={() =>
                          updateFormData("incomeSource", option)
                        }
                        className={selectButton(
                          option,
                          formData.incomeSource
                        )}
                      >
                        {option}
                      </button>
                    ))}
                  </>
                )}

                {/* STEP 7 */}
                {currentStep === 7 && (
                  <>
                    <h2 className="text-2xl font-bold mb-4">
                      When do you need the loan?
                    </h2>

                    {[
                      "Immediately",
                      "Within 1 Week",
                      "Within 1 Month",
                    ].map((option) => (
                      <button
                        key={option}
                        onClick={() =>
                          updateFormData("timeline", option)
                        }
                        className={selectButton(
                          option,
                          formData.timeline
                        )}
                      >
                        {option}
                      </button>
                    ))}
                  </>
                )}

                {/* STEP 8 */}
                {currentStep === 8 && (
                  <>
                    <h2 className="text-2xl font-bold mb-4">
                      Preferred Contact
                    </h2>

                    {["Phone Call", "WhatsApp", "Email"].map(
                      (option) => (
                        <button
                          key={option}
                          onClick={() =>
                            updateFormData("contactMethod", option)
                          }
                          className={selectButton(
                            option,
                            formData.contactMethod
                          )}
                        >
                          {option}
                        </button>
                      )
                    )}

                    <textarea
                      className={`${inputStyle} mt-4`}
                      rows={3}
                      placeholder="Extra message..."
                      value={formData.message}
                      onChange={(e) =>
                        updateFormData("message", e.target.value)
                      }
                    />
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* FOOTER */}
          <div className="p-6 border-t bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-20">
            <div className="flex gap-3">
              {currentStep > 1 && (
                <button
                  onClick={prevStep}
                  className="flex-1 border rounded-lg h-12 flex items-center justify-center"
                >
                  <ChevronLeft className="mr-2" />
                  Back
                </button>
              )}

              {currentStep < totalSteps ? (
                <button
                  disabled={!canProceed()}
                  onClick={nextStep}
                  className="flex-1 bg-[#00A99D] text-white rounded-lg h-12 flex items-center justify-center disabled:opacity-50"
                >
                  Next
                  <ChevronRight className="ml-2" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex-1 bg-[#00A99D] text-white rounded-lg h-12 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Submit
                      <Check className="ml-2" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}
