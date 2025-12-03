import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import edaClassDistribution from "@/assets/eda-class-distribution.png";
import edaSizeDistribution from "@/assets/eda-size-distribution.png";
import edaAspectRatio from "@/assets/eda-aspect-ratio.png";
import edaColorChannels from "@/assets/eda-color-channels.png";
import edaFileSize from "@/assets/eda-file-size.png";

const EDASection = () => {
  const edaImages = [
    {
      src: edaClassDistribution,
      title: "Số lượng mẫu theo mỗi lớp",
      description: "Phân bố số lượng ảnh trong từng class của dataset"
    },
    {
      src: edaSizeDistribution,
      title: "Phân phối kích thước Width và Height",
      description: "Phân tích chiều rộng và chiều cao của các ảnh"
    },
    {
      src: edaAspectRatio,
      title: "Phân phối Tỷ lệ khung hình theo Class",
      description: "Aspect ratio (Width/Height) của ảnh theo từng class"
    },
    {
      src: edaColorChannels,
      title: "Phân tích Chế độ màu và Số kênh",
      description: "Thống kê mode màu và số lượng channels của ảnh"
    },
    {
      src: edaFileSize,
      title: "Phân phối Dung lượng Ảnh theo Class",
      description: "Boxplot dung lượng file (KB) theo từng class"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          📊 EDA: Phân tích dữ liệu
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          {edaImages.map((item, index) => (
            <Card key={index} className={index === 4 ? "md:col-span-2" : ""}>
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardHeader>
              <CardContent>
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-auto rounded-lg border bg-white"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EDASection;
