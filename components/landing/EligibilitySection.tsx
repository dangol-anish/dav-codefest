import { Users, GraduationCap, BarChart3 } from "lucide-react";

const eligibility = [
  {
    title: "Students & Graduates",
    description:
      "All academic levels welcome from colleges and universities across Nepal",
    icon: GraduationCap,
  },
  {
    title: "Teams",
    description: "Participate in teams from 3 up to 5 members",
    icon: Users,
  },
  {
    title: "All Experience Levels",
    description:
      "From beginners to experts. Mentorship available for skill development",
    icon: BarChart3,
  },
];

export function EligibilitySection() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
          Who Can Join?
        </h2>
        <p className="text-xl text-stone-100/80 mb-16 max-w-3xl mx-auto">
          Open to all innovators, creators, and problem-solvers ready to make an
          impact
        </p>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {eligibility.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="group relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-[#030615]/80 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 group-hover:transform group-hover:scale-105 flex flex-col justify-between h-full">
                  <Icon className="h-12 w-12 text-stone-100 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-stone-100 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-stone-100/80 leading-relaxed">
                    {item.description}
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
