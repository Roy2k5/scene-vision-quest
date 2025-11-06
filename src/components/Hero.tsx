import projectLogo from "@/assets/project-logo.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-primary/5 py-16 md:py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 rounded-2xl bg-card p-6 shadow-lg">
            <img 
              src={projectLogo} 
              alt="Scene Vision Quest Logo" 
              className="h-32 w-32 md:h-40 md:w-40 object-contain"
            />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Scene Vision Quest
          </h1>
          <p className="mb-6 text-xl md:text-2xl text-muted-foreground font-medium">
            Học máy với dữ liệu dạng hình ảnh
          </p>
          <div className="flex flex-col gap-2 text-sm md:text-base text-muted-foreground">
            <p className="font-semibold text-foreground">Môn: Học máy (Machine Learning)</p>
            <p>
              Nhóm: <a href="https://caotaytang.github.io/ML-251/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">ML4U</a>
            </p>
            <p>
              Dataset: <a href="https://www.kaggle.com/datasets/puneet6060/intel-image-classification" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Intel Image Classification</a> (Kaggle)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
