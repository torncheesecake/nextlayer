import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide comprehensive NetSuite support including system optimisation, custom configuration, and strategic consulting. Our services cover implementation, integration, and ongoing technical support for businesses across the UK.",
  },
  {
    question: "How quickly can you help?",
    answer:
      "Our team responds within 24 hours of initial contact. We understand how NetSuite impacts your business operations, so we prioritise rapid, efficient solutions.",
  },
  {
    question: "Are you UK-based?",
    answer:
      "Yes, we are a UK-based consultancy with deep understanding of local business landscapes. Our local presence means we provide personalised, context-aware NetSuite support.",
  },
  {
    question: "What is your pricing?",
    answer:
      "We offer transparent, flexible pricing tailored to your specific needs. Initial consultations are free, and we provide clear cost estimates before beginning any project.",
    hasLink: true,
  },
  {
    question: "Do you support all industries?",
    answer:
      "Our consultants have experience across multiple sectors including finance, retail, manufacturing, and technology. We adapt our NetSuite solutions to meet unique industry challenges.",
  },
  {
    question: "How do you ensure quality?",
    answer:
      "We maintain rigorous quality standards through continuous training, advanced certifications, and a commitment to staying ahead of NetSuite's evolving technologies.",
  },
];

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-bittersweet dark:hover:text-bittersweet-dark2"
        aria-expanded={isOpen}
      >
        <span className="text-techblack dark:text-seasalt text-xl font-semibold pr-8">
          {faq.question}
        </span>
        <ChevronDown
          className={`text-bittersweet dark:text-bittersweet-dark2 h-6 w-6 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-graphite dark:text-seasalt text-lg leading-relaxed">
          {faq.answer}
          {faq.hasLink && (
            <>
              {" "}
              <HashLink
                smooth
                to="/netsuite/support#pricing"
                className="text-bittersweet dark:text-bittersweet-dark2 underline hover:text-bittersweet-dark1 dark:hover:text-bittersweet-dark1 font-semibold transition-colors"
              >
                View our support pricing
              </HashLink>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-biscay dark:bg-techblack py-32 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-bittersweet/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-biscay/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-4xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-seasalt dark:text-seasalt mb-4 text-5xl font-bold">
            FAQs
          </h2>
          <p className="text-seasalt/90 dark:text-seasalt/90 text-lg max-w-2xl mx-auto">
            Get answers to the most common questions about NetSuite support and
            our consulting approach.
          </p>
        </div>

        <div className="group relative bg-white/90 dark:bg-graphite/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:border-bittersweet/40 hover:shadow-2xl transition-all duration-500">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-seasalt dark:text-seasalt text-2xl font-bold mb-4">
            Still have questions?
          </h3>
          <p className="text-seasalt/90 dark:text-seasalt/90 text-lg mb-6">
            We're ready to provide the clarity you need.
          </p>
          <Link
            to="/contact"
            className="bg-bittersweet text-seasalt hover:bg-bittersweet-dark1 dark:bg-bittersweet-dark2 dark:hover:bg-bittersweet-dark1 inline-block rounded-full px-8 py-4 text-lg font-semibold shadow-lg transition hover:scale-105"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Schema.org FAQ structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
