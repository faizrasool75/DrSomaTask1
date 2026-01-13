const FAQSection = () => {
  const faqs = [
    {
      question: "1) What is a tummy tuck?",
      answer: "A tummy tuck is a surgical procedure that removes excess abdominal skin and fat while tightening weakened abdominal muscles to create a flatter abdomen."
    },
    {
      question: "2) Is a tummy tuck the same as liposuction?",
      answer: "No. Liposuction removes fat only, while a tummy tuck also removes loose skin and tightens muscles."
    },
    {
      question: "3) Is tummy tuck surgery safe?",
      answer: "When performed by a certified plastic surgeon in a regulated facility, it is considered a safe and well-established procedure."
    },
    {
      question: "4) How long does recovery take?",
      answer: "Most patients return to daily activities within 2–4 weeks, with final results visible over 3–6 months."
    },
    {
      question: "5) Will there be a scar?",
      answer: "Yes, but it is placed low on the abdomen and typically hidden by underwear or swimwear."
    },
    {
      question: "6) Are tummy tuck results permanent?",
      answer: "Results are long-lasting if body weight remains stable."
    },
    {
      question: "7) Can pregnancy affect tummy tuck results?",
      answer: "Yes. Pregnancy can stretch the abdomen again, so surgery is best after completing childbearing."
    },
    {
      question: "8) Who should consider a tummy tuck?",
      answer: "Patients with loose abdominal skin, muscle laxity, stable weight, and realistic expectations."
    },
    {
      question: "9) Can a tummy tuck improve posture?",
      answer: "Yes. Muscle repair can enhance core support and posture."
    },
    {
      question: "10) Can it be combined with other procedures?",
      answer: "Yes. It is commonly combined with liposuction for enhanced contouring."
    }
  ];

  return (
    <section className="py-24 container mx-auto px-6 max-w-4xl">
      <h2 className="text-4xl font-bold text-center mb-16">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="faq-details group bg-white border border-gray-200 rounded-xl overflow-hidden"
          >
            <summary className="flex justify-between items-center p-6 cursor-pointer font-bold bg-white hover:bg-gray-50">
              {faq.question}
              <i className="fas fa-plus text-orange-brand group-open:rotate-45 transition-transform"></i>
            </summary>
            <div className="p-6 pt-0 text-gray-600">{faq.answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
