import { Calendar, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const themes = [
  "Education Innovation",
  "Cybersecurity Solutions ",
  "Business Technology",
  "Healthcare Innovation ",
  "Social Impact Tech",
];

export function EventDetailsSection() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100/10 border border-primary/20 backdrop-blur-sm mb-8">
              <Calendar className="h-4 w-4 text-stone-100/80" />
              <span className="text-stone-100/80 text-sm font-medium">
                July 25-27, 2025
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="text-[#f2eeef]">Two Days.</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Infinite Possibilities.
              </span>
            </h2>
            <p className="text-xl text-stone-100/80 mb-12 leading-relaxed">
              Join changemakers building solutions for the future.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-stone-100/20 rounded-2xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-stone-100" />
                </div>
                <div>
                  <div className="text-stone-100 font-semibold">
                    D.A.V. College, Jawalakhel
                  </div>
                  <div className="text-stone-100/80">Lalitpur, Nepal</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-stone-100/20 rounded-2xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-stone-100" />
                </div>
                <div>
                  <div className="text-stone-100 font-semibold">
                    100+ Innovators
                  </div>
                  <div className="text-stone-100/80">
                    Students, developers, designers
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-12">
              {themes.map((theme, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="bg-stone-100/10 text-stone-100 border-primary/30 px-4 py-2 text-sm text-left whitespace-normal max-w-xs"
                >
                  {theme}
                </Badge>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
            <div className="relative bg-[#030615]/80 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-semibold text-stone-100 mb-6">
                Event Location
              </h3>
              <div className="bg-muted/50 rounded-2xl h-80 flex items-center justify-center text-stone-100/80 mb-6">
                <iframe
                  title="DAV College Map"
                  src="https://www.google.com/maps?q=DAV+College,+Jawalakhel&hl=en&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "1rem" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl w-full h-full"
                ></iframe>
              </div>
              <div className="text-stone-100/80">
                <p className="mb-2">
                  <strong>Address:</strong> DAV College Campus
                </p>
                <p className="mb-2">
                  <strong>City:</strong> Jawalakhel, Lalitpur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
