import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

const AnalysisSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          🔬 Phân tích và nhận xét
        </h2>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Tổng kết hiệu năng các mô hình</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">🏆 Mô hình hiệu quả nhất</h4>
                <p className="text-muted-foreground">
                  Pipeline <strong>ViT + SVM</strong> xếp hạng cao nhất (theo F1-score ~ 0.942), cho thấy hiệu suất vượt trội. 
                  Mô hình <strong>vit_b_16</strong> (End-to-End Deep Learning) cũng đạt hiệu suất tương đương (F1-Score ~ 0.935).
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-secondary mb-2">💪 Sức mạnh Deep Learning</h4>
                <p className="text-muted-foreground">
                  Các mô hình học sâu đều đứng top đầu với F1-Score {'>'} 0.9, khẳng định sức mạnh của Deep Learning trong phân loại ảnh.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-accent mb-2">🔄 Pipeline với DL Embeddings</h4>
                <p className="text-muted-foreground">
                  Các mô hình ML cổ điển khi kết hợp với bộ trích xuất hiện đại (ViT, ResNet, EfficientNet) vẫn rất mạnh mẽ. 
                  Pipeline <strong>ViT + SVM</strong> dẫn đầu cho thấy các đặc trưng do ViT trích xuất là vượt trội nhất.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-orange-600 mb-2">⚠️ Hạn chế phương pháp truyền thống</h4>
                <p className="text-muted-foreground">
                  Các pipeline với bộ trích xuất truyền thống (HOG và SIFT) cho kết quả khiêm tốn do độ phức tạp của bài toán 
                  và sự mất mát thông tin lớn khi trích xuất đặc trưng thủ công.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Tại sao ViT + SVM hiệu quả?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-3">
                <span className="text-xl">🌐</span>
                <div>
                  <h4 className="font-semibold mb-1">Quan hệ toàn cục (Global Relationships)</h4>
                  <p className="text-sm text-muted-foreground">
                    ViT sử dụng cơ chế self-attention để học mối quan hệ toàn cục giữa các patch, khác với CNN chỉ tập trung vào đặc trưng cục bộ.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-xl">📐</span>
                <div>
                  <h4 className="font-semibold mb-1">Đặc trưng tuyến tính (Linearly Separable)</h4>
                  <p className="text-sm text-muted-foreground">
                    Đặc trưng do ViT trích xuất đã tốt đến mức gần như tuyến tính, SVM (tìm maximum-margin hyperplane) 
                    và Linear + Softmax đều hoàn thành xuất sắc.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-xl">⚖️</span>
                <div>
                  <h4 className="font-semibold mb-1">Dữ liệu cân bằng</h4>
                  <p className="text-sm text-muted-foreground">
                    Số lượng mẫu ở mỗi class gần bằng nhau, giúp F1-Score và Accuracy có độ chênh lệch thấp.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Alert>
            <AlertDescription>
              <strong>Kết luận:</strong> Sự kết hợp giữa bộ trích xuất đặc trưng hiện đại (Deep Learning) với các thuật toán 
              ML truyền thống có thể đạt hiệu suất ngang ngửa hoặc vượt trội so với mô hình End-to-End, đặc biệt khi đặc trưng 
              được trích xuất đủ tốt và phù hợp với bài toán.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  );
};

export default AnalysisSection;
