"use client";

const faqs = [
  {
    question: "What's the event format?",
    answer:
      "DAV CodeFest 2025 is a hybrid hackathon. Participate in-person at our Jawalakhel campus or join virtually with full access to mentors, workshops, and judging sessions.",
  },
  {
    question: "How does team formation work?",
    answer:
      "Register individually and we'll match you with like-minded participants, or bring your own team of 1-4 members. We facilitate team formation through our Discord community.",
  },
  {
    question: "What's the judging criteria?",
    answer:
      "Projects are evaluated on innovation, technical execution, impact potential, and presentation quality. Submit via GitHub with a demo video and pitch deck.",
  },
  {
    question: "What support is provided?",
    answer:
      "Full meals, 24/7 mentorship, technical workshops, API access, cloud credits, and accommodation assistance for outstation participants.",
  },
];

export function FAQsSection() {
  return (
    <section className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Common Questions
          </h2>
          <p className="text-xl text-stone-100/80">
            Everything you need to know
          </p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              <div className="bg-[#030615]/80 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {faq.question}
                </h3>
                <p className="text-stone-100/80 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
