"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can participate in the hackathon?",
    answer: "This hackathon is exclusively for undergraduate students.",
  },
  {
    question: "Do I need to be from a specific academic background to join?",
    answer:
      "Nope! Students from any academic background are welcome to participate.",
  },
  {
    question: "Will travel expenses be covered by the hackathon?",
    answer:
      "Unfortunately, travel expenses will not be covered by the organizers.",
  },
  {
    question: "I'm a beginner. Can I still join?",
    answer:
      "Yes! Beginners are encouraged to participate — it's a great opportunity to learn and grow.",
  },
  {
    question: "Will we have any mentors or guidance during the event?",
    answer:
      "Definitely! Every team will be assigned a mentor to guide and support them throughout the hackathon.",
  },
  {
    question: "How many teams will be selected for the final hackathon?",
    answer:
      "A total of 20 teams will be selected after the initial screening round.",
  },
  {
    question: "Can I participate alone? What's the team size?",
    answer:
      "Teams must have 3 to 5 members. Solo participation is not allowed.",
  },
];

export function FAQsSection() {
  return (
    <section className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
      <div className="relative max-w-4xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-stone-100/80">
            Everything you need to know
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="bg-[#030615]/80 backdrop-blur-xl rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
            >
              <AccordionTrigger className="text-xl font-semibold text-stone-100 px-8 py-6 no-underline hover:no-underline focus:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-stone-100/80 text-lg leading-relaxed px-8 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
