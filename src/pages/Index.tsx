import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TeamSection from "@/components/TeamSection";
import OverviewSection from "@/components/OverviewSection";
import DatasetSection from "@/components/DatasetSection";
import EDASection from "@/components/EDASection";
import ResultsSection from "@/components/ResultsSection";
import AnalysisSection from "@/components/AnalysisSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TeamSection />
      <OverviewSection />
      <DatasetSection />
      <EDASection />
      <ResultsSection />
      <AnalysisSection />
      <footer className="bg-muted/30 py-12 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold mb-3">Nhóm ML4U</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Bài tập lớn 3: Học máy với dữ liệu dạng hình ảnh
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm mb-4">
            <a 
              href="https://caotaytang.github.io/ML-251/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Website Nhóm
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              href="https://www.kaggle.com/datasets/puneet6060/intel-image-classification" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Dataset Kaggle
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              href="#" 
              className="text-primary hover:underline"
            >
              Google Colab
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2025 ML4U. Môn Học máy (Machine Learning)
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
