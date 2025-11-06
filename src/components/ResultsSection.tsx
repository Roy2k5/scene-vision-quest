import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Result {
  pipeline: string;
  inference_time: number;
  acc: number;
  f1: number;
  precision: number;
  recall: number;
  type: 'traditional' | 'hybrid' | 'deep-learning';
}

const ResultsSection = () => {
  const results: Result[] = [
    { pipeline: "ViT + SVM", inference_time: 1.347791, acc: 0.940000, f1: 0.941711, precision: 0.941512, recall: 0.941938, type: 'hybrid' },
    { pipeline: "Resnet18", inference_time: 9.433588, acc: 0.940000, f1: 0.939724, precision: 0.939700, recall: 0.940000, type: 'deep-learning' },
    { pipeline: "efficientnet_b0", inference_time: 8.307565, acc: 0.938667, f1: 0.938430, precision: 0.938549, recall: 0.938667, type: 'deep-learning' },
    { pipeline: "mobilenet_v3_large", inference_time: 7.644681, acc: 0.938667, f1: 0.938425, precision: 0.938436, recall: 0.938667, type: 'deep-learning' },
    { pipeline: "vit_b_16", inference_time: 33.514867, acc: 0.935333, f1: 0.935138, precision: 0.936502, recall: 0.935333, type: 'deep-learning' },
    { pipeline: "efficientnet + XGBoost", inference_time: 0.043779, acc: 0.922000, f1: 0.923181, precision: 0.923051, recall: 0.923656, type: 'hybrid' },
    { pipeline: "VGG + Logistic", inference_time: 0.003667, acc: 0.914000, f1: 0.915574, precision: 0.915112, recall: 0.916311, type: 'hybrid' },
    { pipeline: "Resnet + Random", inference_time: 0.051516, acc: 0.902000, f1: 0.904042, precision: 0.903739, recall: 0.904448, type: 'hybrid' },
    { pipeline: "HOG + logistic", inference_time: 0.005113, acc: 0.671000, f1: 0.674489, precision: 0.676284, recall: 0.675543, type: 'traditional' },
    { pipeline: "SIFT + SVM", inference_time: 3.891717, acc: 0.366333, f1: 0.359166, precision: 0.361331, recall: 0.368734, type: 'traditional' },
  ];

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'traditional': return 'Truyền thống';
      case 'hybrid': return 'Pipeline (DL + ML)';
      case 'deep-learning': return 'End-to-End DL';
      default: return type;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'traditional': return 'bg-orange-500/10 text-orange-700 dark:text-orange-400';
      case 'hybrid': return 'bg-purple-500/10 text-purple-700 dark:text-purple-400';
      case 'deep-learning': return 'bg-blue-500/10 text-blue-700 dark:text-blue-400';
      default: return 'bg-gray-500/10 text-gray-700 dark:text-gray-400';
    }
  };

  const top3 = results.slice(0, 3);
  const bottom3 = results.slice(-3).reverse();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          📊 Kết quả thí nghiệm
        </h2>

        {/* Top 3 Models */}
        <Card className="mb-8 border-2 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>🏆</span> Top 3 Models - Highest F1-Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {top3.map((result, idx) => (
                <div key={idx} className="flex items-center justify-between rounded-lg bg-card p-4 shadow-sm">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-primary">#{idx + 1}</span>
                    <div>
                      <p className="font-semibold">{result.pipeline}</p>
                      <Badge className={getTypeColor(result.type)} variant="secondary">
                        {getTypeLabel(result.type)}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{(result.f1 * 100).toFixed(2)}%</p>
                    <p className="text-xs text-muted-foreground">F1-Score</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
              💡 Nhóm mô hình này đạt hiệu suất vượt trội, nổi bật là các pipeline với Deep Learning embeddings (ViT, ResNet, EfficientNet)
            </p>
          </CardContent>
        </Card>

        {/* Full Results Table */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>📋 Bảng kết quả chi tiết</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="p-3 text-left font-semibold">Rank</th>
                    <th className="p-3 text-left font-semibold">Pipeline</th>
                    <th className="p-3 text-left font-semibold">Type</th>
                    <th className="p-3 text-right font-semibold">F1-Score</th>
                    <th className="p-3 text-right font-semibold">Accuracy</th>
                    <th className="p-3 text-right font-semibold">Precision</th>
                    <th className="p-3 text-right font-semibold">Recall</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result, idx) => (
                    <tr key={idx} className="border-b hover:bg-muted/50 transition-colors">
                      <td className="p-3 font-medium">{idx + 1}</td>
                      <td className="p-3 font-medium">{result.pipeline}</td>
                      <td className="p-3">
                        <Badge className={getTypeColor(result.type)} variant="secondary">
                          {getTypeLabel(result.type)}
                        </Badge>
                      </td>
                      <td className="p-3 text-right font-semibold">{(result.f1 * 100).toFixed(2)}%</td>
                      <td className="p-3 text-right">{(result.acc * 100).toFixed(2)}%</td>
                      <td className="p-3 text-right">{(result.precision * 100).toFixed(2)}%</td>
                      <td className="p-3 text-right">{(result.recall * 100).toFixed(2)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Bottom 3 Models */}
        <Card className="border-2 border-orange-500/20 bg-orange-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>⚠️</span> Bottom 3 Models - Lowest F1-Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {bottom3.map((result, idx) => (
                <div key={idx} className="flex items-center justify-between rounded-lg bg-card p-4 shadow-sm">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-orange-600">#{results.length - idx}</span>
                    <div>
                      <p className="font-semibold">{result.pipeline}</p>
                      <Badge className={getTypeColor(result.type)} variant="secondary">
                        {getTypeLabel(result.type)}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-orange-600">{(result.f1 * 100).toFixed(2)}%</p>
                    <p className="text-xs text-muted-foreground">F1-Score</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
              💡 Các mô hình sử dụng bộ trích xuất truyền thống (HOG, SIFT) cho thấy hạn chế trong việc xử lý dữ liệu phức tạp
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ResultsSection;
