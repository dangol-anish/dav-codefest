import { Trophy, Award, Target, Zap } from "lucide-react";

const prizes = [
  {
    place: "1st",
    amount: "NPR 50,000",
    color: "from-yellow-400 to-yellow-600",
    bonus: "Internship Opportunities",
  },
  {
    place: "2nd",
    amount: "NPR 30,000",
    color: "from-gray-300 to-gray-500",
    bonus: "Mentorship Program",
  },
  {
    place: "3rd",
    amount: "NPR 20,000",
    color: "from-orange-400 to-orange-600",
    bonus: "Tech Vouchers",
  },
];

const benefits = [
  { icon: Award, title: "Premium Swag", desc: "Exclusive merchandise" },
  { icon: Trophy, title: "Digital Certificates", desc: "Blockchain verified" },
  { icon: Target, title: "Special Categories", desc: "Innovation awards" },
  { icon: Zap, title: "All-inclusive", desc: "Food & networking" },
];

export function PrizesSection() {
  return (
    <section className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Rewards & Recognition
          </h2>
          <p className="text-xl text-stone-100/80">
            Celebrating innovation with substantial rewards
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <div key={index} className="group relative">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${prize.color} opacity-20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`}
              />
              <div className="relative bg-[#030615]/80 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 group-hover:transform group-hover:scale-105">
                <div className="text-center">
                  <Trophy
                    className={`h-16 w-16 mx-auto mb-6 bg-gradient-to-br ${prize.color} bg-clip-text text-transparent`}
                  />
                  <h3 className="text-2xl font-bold text-stone-100 mb-2">
                    {prize.place} Place
                  </h3>
                  <div className="text-4xl font-bold text-primary mb-4">
                    {prize.amount}
                  </div>
                  <p className="text-stone-100/80">{prize.bonus}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-12 text-primary">
            Additional Benefits
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-[#030615]/50 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                >
                  <Icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-stone-100 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-stone-100/80 text-sm">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
