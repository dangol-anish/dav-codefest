"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { QrCode, FileText } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2025-07-25T00:00:00+05:45").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-blue-500/10 via-transparent to-cyan-500/10 rounded-full animate-spin"
          style={{ animationDuration: "20s" }}
        />
      </div>
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-400 text-sm font-medium">
              Registration Now Open
            </span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#f2eeef] via-[#3b82f6] to-[#67e8f9] bg-clip-text text-transparent">
          DAV Codefest 2025
        </h1>

        <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
          Code the Future. Build Tomorrow. Transform Ideas into Reality.
        </p>
        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 max-w-md md:max-w-3xl mx-auto w-full">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="relative group w-full max-w-xs mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                  {value}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  {unit}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            variant="outline"
            className="hover:text-white bg-blue-950 cursor-pointer
             group border-2 border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/60 px-12 py-6 text-lg rounded-2xl backdrop-blur-sm transition-all duration-300"
            onClick={() => setShowQR(!showQR)}
          >
            <QrCode className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Quick Access
          </Button>
          <Button
            size="lg"
            className="group cursor-pointer relative bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-12 py-6 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105"
            onClick={() =>
              window.open(
                "https://forms.google.com/dav-codefest-2025",
                "_blank"
              )
            }
          >
            <span className="flex items-center gap-2">Register Now</span>
          </Button>
          <a href="/code-of-conduct.pdf" download className="inline-block">
            <Button
              size="lg"
              variant="outline"
              className=" hover:text-white bg-blue-950 cursor-pointer group border-2 border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/60 px-12 py-6 text-lg rounded-2xl backdrop-blur-sm transition-all duration-300"
            >
              <FileText className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Code of Conduct
            </Button>
          </a>
        </div>
        {showQR && (
          <>
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-pointer animate-fade-in"
              onClick={() => setShowQR(false)}
            />
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 animate-fade-in">
              <div className="bg-[#030615]/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <div className="w-64 h-64 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-600 font-medium">
                  <Image
                    src="/qr.jpeg"
                    alt="QR Code"
                    width={192}
                    height={192}
                    className="w-48 h-48 object-contain"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
