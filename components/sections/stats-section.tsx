import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "Need-Based", label: "Solutions built from real market demand" },
  { value: "Scalable", label: "Platforms designed for future growth" },
  { value: "User-Focused", label: "Experiences shaped around convenience" },
  { value: "Long-Term", label: "Support for product improvement and growth" },
];

export function StatsSection() {
  return (
    <section className="px-6 py-8 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <FadeIn key={stat.label} delay={index * 0.05}>
            <Card className="bg-gradient-to-br from-card to-card/65">
              <CardContent className="space-y-2 p-7 text-center">
                <p className="font-heading text-3xl font-semibold text-foreground lg:text-4xl">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
