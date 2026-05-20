import { Compass, Lightbulb, Sparkles } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const points = [
  {
    icon: Compass,
    title: "Built around real market needs",
    text: "We study practical customer and business challenges first, then shape solutions that people can actually adopt, use, and benefit from in daily life.",
  },
  {
    icon: Lightbulb,
    title: "Technology with real human purpose",
    text: "Our belief is simple: technology should solve real human problems, reduce friction, and create better access, convenience, and efficiency.",
  },
  {
    icon: Sparkles,
    title: "More than a software vendor",
    text: "Ruut Level Solutions is a root-level solutions company focused on impactful digital products, service platforms, and scalable systems that help businesses grow.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <FadeIn>
          <SectionHeading
            eyebrow="About Ruut Level Solutions"
            title="We build practical digital products for the problems people and businesses face every day."
            description="Ruut Level Solutions is not just a software company. We create root-level digital solutions that improve convenience, access, and efficiency for customers while helping businesses operate better through technology."
          />
        </FadeIn>

        <div className="grid gap-6">
          {points.map((point, index) => {
            const Icon = point.icon;

            return (
              <FadeIn key={point.title} delay={index * 0.06}>
                <Card className="group h-full bg-gradient-to-br from-card to-card/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                  <CardContent className="flex h-full gap-5 p-7 sm:items-start">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.4rem] bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                        {point.title}
                      </h3>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {point.text}
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
