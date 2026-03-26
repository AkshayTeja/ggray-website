import { useState } from "react";

const faqs = [
  {
    q: "Where are you located?",
    a: "Ulubari, Guwahati, Assam. Visit us Mon–Sat, 9 AM–6 PM.",
  },
  {
    q: "Do you serve outside Guwahati?",
    a: "Yes — all Northeast India: Assam, Meghalaya, Manipur, Nagaland, Tripura, Mizoram, Arunachal Pradesh & Sikkim.",
  },
  {
    q: "How much does a pallet rack cost?",
    a: "Prices vary by size and capacity. WhatsApp us for a free custom quote.",
  },
  {
    q: "Do you offer custom sizes?",
    a: "Yes, all products are fully customizable to your exact warehouse dimensions.",
  },
  {
    q: "How long does installation take?",
    a: "Most standard installations complete in 1–3 days.",
  },
  {
    q: "Do you provide a warranty?",
    a: "Yes, all products come with a manufacturer warranty on materials and workmanship.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-3">
      {faqs.map(({ q, a }, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-lg overflow-hidden bg-white"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
          >
            <span>{q}</span>
            <span className="text-orange-600 text-2xl leading-none ml-4">
              {openIndex === i ? "−" : "+"}
            </span>
          </button>
          {openIndex === i && (
            <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
              {a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
