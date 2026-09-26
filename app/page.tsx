import Features from "@/components/features-4";
import HeroSection from "@/components/hero-section";
import { WhoAmI_QA, WhoAmI_Stats } from "@/components/who-am-i-v2";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { CircuitBackground } from "@/components/ui/circuit-background";

export default function Home() {
  return (
    <>
      <CircuitBackground className="fixed inset-0 -z-10" />
      <HeroSection />
      <div className="relative z-10">
        <WhoAmI_Stats />
        <WhoAmI_QA />
        <Features />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
