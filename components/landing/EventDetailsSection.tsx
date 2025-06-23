import { Calendar, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const themes = [
  "Innovation",
  "Climate Tech",
  "Social Impact",
  "AI/ML",
  "Blockchain",
  "IoT",
];

export function EventDetailsSection() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-primary text-sm font-medium">
                August 15-16, 2025
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="text-[#f2eeef]">Two Days.</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Infinite Possibilities.
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Join Nepal's most prestigious hackathon where brilliant minds
              converge to solve tomorrow's challenges. From climate tech to
              social innovation, your ideas can change the world.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-foreground font-semibold">
                    DAV College, Jawalakhel
                  </div>
                  <div className="text-muted-foreground">Lalitpur, Nepal</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-foreground font-semibold">
                    500+ Innovators
                  </div>
                  <div className="text-muted-foreground">
                    Students, developers, designers
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-12">
              {themes.map((theme) => (
                <Badge
                  key={theme}
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/30 px-4 py-2 text-sm"
                >
                  {theme}
                </Badge>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
            <div className="relative bg-[#030615]/80 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Event Location
              </h3>
              <div className="bg-muted/50 rounded-2xl h-80 flex items-center justify-center text-muted-foreground mb-6">
                <div className="text-center">
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <div className="text-lg font-medium text-foreground">
                    Interactive Map
                  </div>
                  <div className="text-sm">Coming Soon</div>
                </div>
              </div>
              <div className="text-muted-foreground">
                <p className="mb-2">
                  <strong>Address:</strong> DAV College Campus
                </p>
                <p className="mb-2">
                  <strong>City:</strong> Jawalakhel, Lalitpur
                </p>
                <p>
                  <strong>Accessibility:</strong> Public transport available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
