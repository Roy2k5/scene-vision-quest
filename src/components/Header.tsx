import { Code, Database, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-lg font-semibold text-foreground">
            Bài tập lớn - Môn Học Máy (ML4U)
          </h1>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="outline" className="gap-2" asChild>
              <a href="https://github.com/caoTayTang/ML251" target="_blank" rel="noopener noreferrer">
                <Code className="h-4 w-4" />
                Code
              </a>
            </Button>
            <Button variant="outline" className="gap-2" asChild>
              <a href="https://www.kaggle.com/datasets/puneet6060/intel-image-classification" target="_blank" rel="noopener noreferrer">
                <Database className="h-4 w-4" />
                Dataset
              </a>
            </Button>
            <Button variant="outline" className="gap-2" asChild>
              <a href="https://colab.research.google.com/drive/1TgZsP9vpu65deg4Hq3c02wPzNwLYZPff?usp=sharing" target="_blank" rel="noopener noreferrer">
                <FlaskConical className="h-4 w-4" />
                Colab
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
