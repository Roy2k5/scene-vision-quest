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

        <Card className="bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200/50">
          <CardHeader>
            <CardTitle>Quy Trình Thực Hiện</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-600 dark:bg-green-700 text-white flex items-center justify-center text-2xl font-bold mb-3">
                  1
                </div>
                <h3 className="font-semibold text-lg mb-1">EDA</h3>
                <p className="text-sm text-muted-foreground">Phân tích dữ liệu</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-600 dark:bg-green-700 text-white flex items-center justify-center text-2xl font-bold mb-3">
                  2
                </div>
                <h3 className="font-semibold text-lg mb-1">Tiền xử lý</h3>
                <p className="text-sm text-muted-foreground">Resize & Normalize</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-600 dark:bg-green-700 text-white flex items-center justify-center text-2xl font-bold mb-3">
                  3
                </div>
                <h3 className="font-semibold text-lg mb-1">Trích xuất</h3>
                <p className="text-sm text-muted-foreground">Features extraction</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-600 dark:bg-green-700 text-white flex items-center justify-center text-2xl font-bold mb-3">
                  4
                </div>
                <h3 className="font-semibold text-lg mb-1">Huấn luyện</h3>
                <p className="text-sm text-muted-foreground">Model training</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-600 dark:bg-green-700 text-white flex items-center justify-center text-2xl font-bold mb-3">
                  5
                </div>
                <h3 className="font-semibold text-lg mb-1">Đánh giá</h3>
                <p className="text-sm text-muted-foreground">Evaluation & Compare</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OverviewSection;
