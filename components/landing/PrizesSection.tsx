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
    desc: "Award Recognition",
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
        <div className="grid md:grid-cols-3 gap-8 mb-16 items-end">
          {/* Podium order: 2nd, 1st, 3rd */}
          <div className="flex flex-col items-center justify-end h-full">
            {prizes
              .filter((p) => p.place === "2nd")
              .map((prize, index) => {
                const Icon = prize.icon;
                return (
                  <div key={index} className="group relative w-full">
                    <div
                      className={`relative bg-[#030615]/80 rounded-3xl p-4 md:p-8 border-2 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_24px_4px_#a8a29e55]`}
                      style={{ borderColor: "#a8a29e" }}
                    >
                      <div className="text-center">
                        <Icon
                          className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-6"
                          style={{ color: "#a8a29e" }}
                        />
                        <h3
                          className="text-2xl font-bold mb-2"
                          style={{ color: "#a8a29e" }}
                        >
                          2nd Place
                        </h3>
                        <div
                          className="text-4xl font-bold mb-4"
                          style={{ color: "#a8a29e" }}
                        >
                          NPR 30,000
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="flex flex-col items-center justify-end h-full">
            {prizes
              .filter((p) => p.place === "1st")
              .map((prize, index) => {
                const Icon = prize.icon;
                return (
                  <div key={index} className="group relative w-full">
                    <div
                      className={`relative bg-[#030615]/80 rounded-3xl p-6 md:p-14 border-2 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_24px_4px_#fad60155]`}
                      style={{ borderColor: "#fad601" }}
                    >
                      <div className="text-center">
                        <Icon
                          className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-6"
                          style={{ color: "#fad601" }}
                        />
                        <h3
                          className="text-2xl font-bold mb-2"
                          style={{ color: "#fad601" }}
                        >
                          1st Place
                        </h3>
                        <div
                          className="text-4xl font-bold mb-4"
                          style={{ color: "#fad601" }}
                        >
                          NPR 50,000
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="flex flex-col items-center justify-end h-full">
            {prizes
              .filter((p) => p.place === "3rd")
              .map((prize, index) => {
                const Icon = prize.icon;
                return (
                  <div key={index} className="group relative w-full">
                    <div
                      className={`relative bg-[#030615]/80 rounded-3xl p-3 md:p-6 border-2 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_24px_4px_#cd7f3255]`}
                      style={{ borderColor: "#cd7f32" }}
                    >
                      <div className="text-center">
                        <Icon
                          className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-6"
                          style={{ color: "#cd7f32" }}
                        />
                        <h3
                          className="text-2xl font-bold mb-2"
                          style={{ color: "#cd7f32" }}
                        >
                          3rd Place
                        </h3>
                        <div
                          className="text-4xl font-bold mb-4"
                          style={{ color: "#cd7f32" }}
                        >
                          NPR 20,000
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
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
