import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { EventDetailsSection } from "@/components/landing/EventDetailsSection";
import { TimelineSection } from "@/components/landing/TimelineSection";
import { EligibilitySection } from "@/components/landing/EligibilitySection";
import { RegistrationCTASection } from "@/components/landing/RegistrationCTASection";
import { PrizesSection } from "@/components/landing/PrizesSection";
import { SponsorsSection } from "@/components/landing/SponsorsSection";
import { FAQsSection } from "@/components/landing/FAQsSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { FooterSection } from "@/components/landing/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030615] text-[#f2eeef] overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <EventDetailsSection />
      <TimelineSection />
      <EligibilitySection />
      <RegistrationCTASection />
      <PrizesSection />
      <SponsorsSection />
      <FAQsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
