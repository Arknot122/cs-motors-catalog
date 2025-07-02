import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCard = () => {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="w-full h-40 md:h-48" />
      <CardContent className="p-3 md:p-6">
        <Skeleton className="h-6 w-3/4 mb-3" />
        <div className="space-y-2 mb-4">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-8 w-full" />
        </div>
        <Skeleton className="h-12 w-full" />
      </CardContent>
    </Card>
  );
};

export default SkeletonCard;