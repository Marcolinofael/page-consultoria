import Features from "@/components/features-4";
import HeroSection from "@/components/hero-section";
import { WhoAmI_QA, WhoAmI_Stats } from "@/components/who-am-i-v2";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="relative z-10 bg-black/50 backdrop-blur-sm">
        <WhoAmI_Stats />
        <WhoAmI_QA />
        <Features />
        <Contact />
        <Footer />
      </div>
    </>
  );
}