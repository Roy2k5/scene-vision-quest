import projectLogo from "@/assets/project-logo.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-16">
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={projectLogo} 
              alt="Machine Learning Project 3: Image Data" 
              className="w-full h-auto object-cover"
            />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            MACHINE LEARNING CO3117
          </h1>
          <p className="mb-6 text-xl md:text-2xl text-foreground font-semibold">
            PROJECT 3: IMAGE CLASSIFICATION
          </p>
          <p className="max-w-3xl text-base md:text-lg text-muted-foreground">
            So sánh hiệu năng giữa phương pháp truyền thống (HOG, SIFT) và Deep Learning (ResNet, ViT, EfficientNet) trong bài toán phân loại 6 lớp cảnh quan tự nhiên
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
