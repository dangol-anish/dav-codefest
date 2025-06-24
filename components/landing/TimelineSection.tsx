import { CheckCircle, Loader, Circle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const timelineSteps = [
  {
    status: "completed",
    title: "Registration Opens",
    date: "June 1, 2025",
    icon: CheckCircle,
  },
  {
    status: "active",
    title: "Application Review",
    date: "July 15, 2025",
    icon: Loader,
  },
  {
    status: "pending",
    title: "Main Event",
    date: "August 15-16, 2025",
    icon: Circle,
  },
  {
    status: "pending",
    title: "Results & Awards",
    date: "August 16, 2025",
    icon: Circle,
  },
];

export function TimelineSection() {
  return (
    <section id="timeline" className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Journey Timeline
          </h2>
          <p className="text-xl text-stone-100/80">
            Track your path to innovation
          </p>
        </div>
        <div className="space-y-12">
          {timelineSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative flex items-center gap-8 group"
              >
                {/* Connector Line */}
                {index < timelineSteps.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-20 bg-gradient-to-b from-blue-500/50 to-transparent" />
                )}
                {/* Icon */}
                <div
                  className={`relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    step.status === "completed"
                      ? "bg-primary shadow-lg shadow-primary/50"
                      : step.status === "active"
                      ? "bg-yellow-500 shadow-lg shadow-yellow-500/50"
                      : "bg-stone-900 border border-stone-900"
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 ${
                      step.status === "active" ? "animate-spin" : ""
                    } ${
                      step.status === "completed"
                        ? "text-white"
                        : step.status === "active"
                        ? "text-black"
                        : "text-stone-100/80"
                    }`}
                  />
                </div>
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-[#030615]/60 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-stone-100">
                        {step.title}
                      </h3>
                      <Badge
                        variant={
                          step.status === "completed"
                            ? "default"
                            : step.status === "active"
                            ? "secondary"
                            : "outline"
                        }
                        className={
                          step.status === "completed"
                            ? "bg-stone-100/20 text-stone-100 border-stone-100/30"
                            : step.status === "active"
                            ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                            : "bg-muted/20 text-stone-100/80 border-muted/30"
                        }
                      >
                        {step.status === "completed"
                          ? "Complete"
                          : step.status === "active"
                          ? "In Progress"
                          : "Upcoming"}
                      </Badge>
                    </div>
                    <p className="text-stone-100/80">{step.date}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
