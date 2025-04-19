import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function Landing() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-none">
        <CardHeader>
          <CardTitle className="text-4xl font-bold tracking-tight">
            Does your electric bill feel impossible to understand?
          </CardTitle>
          <CardDescription className="text-xl">
            kWattz makes it simple. Give it a try — just ask a question:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button size="lg" variant="default">
            Get Started
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}