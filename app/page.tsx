import { BrandMarkSection } from "@/components/BrandMarkSection";
import { EcosystemSection } from "@/components/EcosystemSection";
import { HeroSection } from "@/components/HeroSection";
import { HowToStartSection } from "@/components/HowToStartSection";
import { OperatingSystemShowcase } from "@/components/OperatingSystemShowcase";
import { ReviewsSection } from "@/components/ReviewsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-flextock-navy text-flextock-foreground">
      <HeroSection />
      <EcosystemSection />
      <OperatingSystemShowcase />
      <ReviewsSection />
      <BrandMarkSection />
      <HowToStartSection />
    </main>
  );
}
