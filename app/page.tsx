import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { EventDetailsSection } from "@/components/landing/EventDetailsSection";
import { TimelineSection } from "@/components/landing/TimelineSection";
import { EligibilitySection } from "@/components/landing/EligibilitySection";
import { PrizesSection } from "@/components/landing/PrizesSection";
import { FAQsSection } from "@/components/landing/FAQsSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { FooterSection } from "@/components/landing/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen text-[#f2eeef] overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <EventDetailsSection />
      <TimelineSection />
      <EligibilitySection />
      <PrizesSection />
      <FAQsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
