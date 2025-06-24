import { Timer, Users2, Lightbulb, Rocket } from "lucide-react";

const features = [
  {
    icon: Timer,
    title: "48-Hour Sprint",
    description: "Intensive coding marathon with mentorship and support",
  },
  {
    icon: Users2,
    title: "Hybrid Experience",
    description: "Join us in-person for this event",
  },
  {
    icon: Lightbulb,
    title: "Real Impact",
    description: "Build solutions for climate, innovation, and social good",
  },
  {
    icon: Rocket,
    title: "Launch Platform",
    description: "Turn your prototype into a real startup with our support",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Why CodeFest?
          </h2>
          <p className="text-xl text-stone-100/70 max-w-3xl mx-auto">
            More than just a hackathon. A launchpad for your next breakthrough.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-[#030615]/80 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 group-hover:transform group-hover:scale-105 h-full flex flex-col justify-between">
                  <Icon className="h-12 w-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-stone-100 mb-4">
                    {feature.title}
                  </h3>
                  <p className="hidden md:block text-stone-100/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
