import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "How can I adopt a pet from Pawmart?",
    answer:
      "Browse listings, click 'Adopt / Order Now', fill out the form, and our team will contact you shortly.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept credit/debit cards, PayPal, and cash-on-delivery depending on product and location.",
  },
  {
    question: "Can I return a product if unsatisfied?",
    answer:
      "Yes, a 7-day return policy applies to eligible products. Check each listing for details.",
  },
  {
    question: "How do you ensure pets are healthy?",
    answer:
      "All pets are checked by certified veterinarians and come with health certifications.",
  },
  {
    question: "Is customer support available?",
    answer:
      "Yes! Our support team is available 24/7 via email, chat, or phone.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

  return (
    <section className="py-20 mb-20 w-11/12 mx-auto rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 text-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-purple-800 dark:text-purple-300 mb-6 text-center">
          Frequently Asked Questions
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div
                onClick={() => toggleFAQ(idx)}
                className="flex justify-between items-center cursor-pointer select-none"
              >
                <h3 className="font-semibold text-lg">{faq.question}</h3>
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    activeIndex === idx ? "rotate-180 text-purple-600" : "text-gray-400"
                  }`}
                />
              </div>
              <p
                className={`mt-4 text-gray-600 transition-all duration-300 ${
                  activeIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
