import { Lightbulb, Palette, Code, ShieldCheck, Rocket, LifeBuoy } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: Lightbulb,
    title: "Understand the problem",
    description:
      "We start with the real challenge, user need, or business pain point before discussing features or technology.",
  },
  {
    icon: Rocket,
    title: "Plan the solution",
    description:
      "We define the right platform approach, scope, priorities, and product direction around practical outcomes.",
  },
  {
    icon: Palette,
    title: "Design the experience",
    description:
      "Clear user journeys and polished interfaces help the solution feel intuitive, trustworthy, and usable.",
  },
  {
    icon: Code,
    title: "Develop the platform",
    description:
      "We build with modern tools and clean engineering practices to create scalable and maintainable products.",
  },
  {
    icon: ShieldCheck,
    title: "Test and optimize",
    description:
      "We refine performance, usability, reliability, and workflow quality before and after release.",
  },
  {
    icon: LifeBuoy,
    title: "Launch and support",
    description:
      "We help launch with confidence and continue supporting the solution as it grows in the market.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl space-y-14">
        <FadeIn>
          <SectionHeading
            eyebrow="Process"
            title="A reliable process that turns practical ideas into working digital solutions."
            description="Our workflow is designed to keep the product aligned with the real problem, reduce wasted effort, and make sure the final platform is useful, stable, and ready for growth."
          />
        </FadeIn>

        <div className="relative grid gap-6 lg:grid-cols-2">
          <div className="pointer-events-none absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-border lg:block" />
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <FadeIn key={step.title} delay={index * 0.05}>
                <Card className="h-full">
                  <CardContent className="flex gap-5 p-7">
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.4rem] bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-primary">
                          0{index + 1}
                        </span>
                        <h3 className="font-heading text-2xl font-semibold">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
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
