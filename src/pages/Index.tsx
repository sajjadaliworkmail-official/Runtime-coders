import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import DashboardPreview from "@/components/DashboardPreview";
import HowItWorks from "@/components/HowItWorks";
import FeaturesGrid from "@/components/FeaturesGrid";
import ImpactSection from "@/components/ImpactSection";
import StatsSection from "@/components/StatsSection";
import HackathonSection from "@/components/HackathonSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <DashboardPreview />
    <HowItWorks />
    <FeaturesGrid />
    <ImpactSection />
    <StatsSection />
    <HackathonSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
