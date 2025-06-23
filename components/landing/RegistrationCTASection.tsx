"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

export function RegistrationCTASection() {
  return (
    <section className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
          Secure Your Spot
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Limited seats available. Join Nepal's most anticipated hackathon and
          turn your ideas into reality.
        </p>
        <div className="bg-[#030615]/80 backdrop-blur-xl rounded-3xl p-12 border border-blue-500/20 max-w-2xl mx-auto">
          <div className="space-y-8">
            <Button
              size="lg"
              className="w-full group relative bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-6 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() =>
                window.open(
                  "https://forms.google.com/dav-codefest-2025",
                  "_blank"
                )
              }
            >
              <span className="flex items-center justify-center gap-2">
                <ExternalLink className="h-5 w-5" />
                Register via Google Form
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <div className="flex items-center gap-4">
              <Separator className="flex-1" />
              <span className="text-muted-foreground text-sm">OR</span>
              <Separator className="flex-1" />
            </div>
            <div className="flex justify-center">
              <div className="bg-[#030615] rounded-2xl p-6 shadow-2xl">
                <div className="w-32 h-32 bg-[#030615] rounded-xl flex items-center justify-center text-gray-600 text-sm font-medium">
                  QR Code
                  <br />
                  Quick Register
                </div>
              </div>
            </div>
            <div className="text-center space-y-2">
              <p className="text-muted-foreground">
                <strong className="text-primary">Deadline:</strong> July 31,
                2025
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-primary hover:text-blue-300 transition-colors"
              >
                <span>Download Complete Rulebook</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
