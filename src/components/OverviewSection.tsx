import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OverviewSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          🔍 Tổng quan đề tài
        </h2>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Mục tiêu</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Xây dựng pipeline học máy hoàn chỉnh cho dữ liệu hình ảnh, bao gồm:
            </p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="font-semibold text-primary">1.</span>
                <div>
                  <span className="font-semibold">Tiền xử lý hình ảnh:</span> Resize ảnh, Normalize theo tập ImageNet
                </div>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-primary">2.</span>
                <div>
                  <span className="font-semibold">Trích xuất đặc trưng hình ảnh:</span>
                  <ul className="ml-4 mt-2 space-y-1 list-disc">
                    <li><strong>Phương pháp truyền thống:</strong> HOG và SIFT</li>
                    <li><strong>Phương pháp hiện đại:</strong> ResNet, VGG, EfficientNet, ViT</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-primary">3.</span>
                <div>
                  <span className="font-semibold">Huấn luyện và đánh giá mô hình:</span>
                  <ul className="ml-4 mt-2 space-y-1 list-disc">
                    <li><strong>Machine Learning:</strong> Logistic Regression, SVM, Random Forest, XGBoost</li>
                    <li><strong>Deep Learning:</strong> ResNet, EfficientNet, MobileNet, ViT</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OverviewSection;
