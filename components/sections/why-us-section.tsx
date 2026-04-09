import {
  Compass,
  Gem,
  Headphones,
  LayoutTemplate,
  Scaling,
  Wrench,
} from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const advantages = [
  {
    icon: Compass,
    title: "Root-level problem solving approach",
    text: "We look beyond features to the actual problem underneath, so the final solution addresses the real need.",
  },
  {
    icon: Gem,
    title: "Real-world product thinking",
    text: "Our products and platforms are shaped around human behavior, practical adoption, and real use cases.",
  },
  {
    icon: Scaling,
    title: "Scalable modern technology",
    text: "We build on dependable, maintainable technology that supports growth without creating unnecessary complexity.",
  },
  {
    icon: LayoutTemplate,
    title: "Clean UI and user-focused experience",
    text: "Interfaces are designed to be clear, trustworthy, and easy to use for both customers and business teams.",
  },
  {
    icon: Wrench,
    title: "Reliable development process",
    text: "A structured workflow keeps planning, delivery, testing, and iteration consistent from start to finish.",
  },
  {
    icon: Headphones,
    title: "Long-term business support",
    text: "We stay available after launch to help improve, maintain, and scale the solution as the business evolves.",
  },
];

export function WhyUsSection() {
  return (
    <section className="px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-14">
        <FadeIn>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A practical, business-minded approach to digital problem solving."
            description="We combine product thinking, modern engineering, and user-focused design to create solutions that are useful, scalable, and aligned with real operational needs."
            align="center"
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeIn key={item.title} delay={index * 0.05}>
                <Card className="h-full bg-gradient-to-b from-card to-card/70">
                  <CardContent className="flex h-full flex-col gap-4 p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
