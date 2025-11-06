import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DatasetSection = () => {
  const classes = ["Buildings", "Forest", "Glacier", "Mountain", "Sea", "Street"];
  
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          🖼️ Dataset: Intel Image Classification
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>📊</span> Thành phần
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">6 lớp cảnh quan tự nhiên:</p>
              <div className="flex flex-wrap gap-2">
                {classes.map((cls, idx) => (
                  <Badge key={idx} variant="secondary" className="text-sm">
                    {idx + 1}️⃣ {cls}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>📈</span> Quy mô
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p><strong>Tổng số ảnh:</strong> ~25.000 ảnh RGB (Sử dụng ~17.000)</p>
              <p><strong>Kích thước:</strong> 150 × 150 pixel</p>
              <p><strong>Train set:</strong> ~14.000 ảnh</p>
              <p><strong>Test set:</strong> ~3.000 ảnh</p>
              <p><strong>Định dạng:</strong> .jpg</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DatasetSection;
