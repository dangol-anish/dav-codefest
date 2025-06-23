import { Trophy, Award, Zap, Crown, Medal } from "lucide-react";

const prizes = [
  {
    place: "2nd",
    amount: "NPR 30,000",
    color: "[#a8a29e]",
    icon: Medal,
  },
  {
    place: "1st",
    amount: "NPR 50,000",
    color: "[#fad601]",
    icon: Crown,
  },
  {
    place: "3rd",
    amount: "NPR 20,000",
    color: "[#cd7f32]",
    icon: Award,
  },
];

const benefits = [
  { icon: Award, title: "Premium Swag", desc: "Exclusive merchandise" },
  {
    icon: Trophy,
    title: "Participation Certificates",
    desc: "Blockchain verified",
  },

  { icon: Zap, title: "All-inclusive", desc: "Food & networking" },
];

export function PrizesSection() {
  return (
    <section id="prizes" className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Rewards & Recognition
          </h2>
          <p className="text-xl text-stone-100/60">
            Celebrating innovation with substantial rewards
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => {
            const Icon = prize.icon;
            let bg = "";
            let hoverShadow = "";
            if (prize.place === "1st") {
              bg = "bg-[#fad601]/80";
              hoverShadow = "group-hover:shadow-[0_0_20px_0_#fad601cc]";
            } else if (prize.place === "2nd") {
              bg = "bg-[#f4f4f5]/80";
              hoverShadow = "group-hover:shadow-[0_0_20px_0_#f4f4f5cc]";
            } else if (prize.place === "3rd") {
              bg = "bg-[#cd7f32]/80";
              hoverShadow = "group-hover:shadow-[0_0_20px_0_#cd7f32cc]";
            }
            return (
              <div key={index} className="group relative ">
                <div
                  className={`relative ${bg} rounded-3xl p-8 border border-blue-500/20 transition-all duration-300 ${hoverShadow} group-hover:scale-105`}
                >
                  <div className="text-center">
                    <Icon className="h-16 w-16 mx-auto mb-6 text-stone-100" />
                    <h3 className="text-2xl font-bold text-stone-100 mb-2">
                      {prize.place} Place
                    </h3>
                    <div className="text-4xl font-bold text-stone-100 mb-4">
                      {prize.amount}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-12 text-stone-100 ">
            Additional Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-[#030615]/50 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 flex flex-col items-center justify-between h-full"
                >
                  <Icon className="h-10 w-10 text-stone-100 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-stone-100 mb-2 text-center">
                    {benefit.title}
                  </h4>
                  <p className="text-stone-100/60 text-sm text-center">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
