const sponsors = [
  "Frienzie Fries",
  "Yeju Chocolate",
  "TechCorp",
  "InnovateLab",
];

export function SponsorsSection() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Powered By
          </h2>
          <p className="text-xl text-stone-100/80">
            Partners who believe in innovation
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-[#030615]/95 backdrop-blur-sm rounded-2xl p-8 flex items-center justify-center h-32 group-hover:transform group-hover:scale-105 transition-all duration-300">
                <span className="text-[#f2eeef] font-bold text-lg">
                  {sponsor}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
