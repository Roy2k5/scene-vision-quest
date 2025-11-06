import Hero from "@/components/Hero";
import TeamSection from "@/components/TeamSection";
import OverviewSection from "@/components/OverviewSection";
import DatasetSection from "@/components/DatasetSection";
import ResultsSection from "@/components/ResultsSection";
import AnalysisSection from "@/components/AnalysisSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <TeamSection />
      <OverviewSection />
      <DatasetSection />
      <ResultsSection />
      <AnalysisSection />
      <footer className="bg-muted/30 py-8 text-center text-sm text-muted-foreground">
        <p>© 2025 ML4U - Machine Learning Project</p>
      </footer>
    </div>
  );
};

export default Index;
