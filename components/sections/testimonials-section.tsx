import { CheckCircle2, Quote, ShieldCheck } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const trustPoints = [
  "Modern web, mobile, and backend development",
  "Clean UI/UX and scalable architecture",
  "Transparent communication",
  "Fast execution with ownership",
  "Long-term support after delivery",
];

const trustCards = [
  {
    title: "Why Businesses Can Trust Us",
    icon: ShieldCheck,
  },
  {
    title: "Our Commitment",
    icon: Quote,
    body:
      "At Ruut Level Solutions, we believe every project should solve a real business problem. We focus on quality, clarity, and long-term value from day one.",
    author: "Founder, Ruut Level Solutions",
  },
  {
    title: "Real Testimonials Coming Soon",
    icon: CheckCircle2,
    body:
      "As we complete our first projects, we will share genuine client feedback and success stories here.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-14">
        <FadeIn>
          <SectionHeading
            eyebrow="Trust"
            title="Client Stories Coming Soon"
            description="We are a new startup, and we are currently working on building strong relationships with our first clients. Our focus is on delivering real value, clean design, scalable technology, and reliable support."
            align="center"
          />
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-3">
          {trustCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <FadeIn key={card.title} delay={index * 0.06}>
                <Card className="h-full overflow-hidden">
                  <CardContent className="flex h-full flex-col gap-6 p-7 sm:p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.28)]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold tracking-tight text-foreground">
                        {card.title}
                      </h3>

                      {card.title === "Why Businesses Can Trust Us" ? (
                        <ul className="space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
                          {trustPoints.map((point) => (
                            <li key={point} className="flex items-start gap-3">
                              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="space-y-4">
                          <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                            {card.body}
                          </p>
                          {card.author ? (
                            <p className="text-sm font-medium text-foreground/90">
                              {card.author}
                            </p>
                          ) : null}
                        </div>
                      )}
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
