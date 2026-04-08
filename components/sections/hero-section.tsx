import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Lightbulb,
  PlayCircle,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const quickHighlights = [
  "Online grocery delivery ideas",
  "Remote help platforms",
  "Business automation systems",
  "Local convenience products",
];

const trustMetrics = [
  { value: "Root-level", label: "problem solving mindset" },
  { value: "Practical", label: "digital product thinking" },
  { value: "Scalable", label: "technology and operations" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-14 lg:px-8 lg:pb-28 lg:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[34rem] bg-gradient-to-b from-[hsl(220_58%_17%)] via-[hsl(205_88%_42%)] to-transparent opacity-[0.98]" />
        <div className="absolute left-1/2 top-20 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-sky-300/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <FadeIn className="mx-auto max-w-5xl space-y-10 text-center text-white">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm text-white/90 shadow-lg shadow-black/10 backdrop-blur">
              <BadgeCheck className="h-4 w-4" />
              Product thinking for daily-life convenience and business growth
            </div>

            <div className="space-y-5">
              <h1 className="text-balance font-heading text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                Root-Level Solutions for Real-World Problems
              </h1>
              <p className="mx-auto max-w-3xl text-pretty text-lg leading-8 text-white/85 sm:text-xl">
                Ruut Level Solutions builds practical digital products and
                platforms that solve everyday customer challenges and help
                businesses grow through convenience, automation, and better
                digital experiences.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              href="#services"
              size="lg"
              className="bg-white text-[hsl(220_58%_17%)] shadow-[0_20px_45px_-20px_rgba(0,0,0,0.32)] hover:bg-white/95"
            >
              <span>
                Explore Solutions
                <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
            <Button
              asChild
              href="#contact"
              size="lg"
              variant="secondary"
              className="border-white/20 bg-white/10 text-white hover:bg-white/15 hover:text-white"
            >
              <span>
                <PlayCircle className="h-4 w-4" />
                Contact Us
              </span>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {quickHighlights.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn delay={0.08}>
            <Card className="overflow-hidden border-white/40 bg-white text-slate-950 shadow-[0_36px_90px_-42px_rgba(15,23,42,0.35)]">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Ruut Level Solutions
                    </p>
                    <h3 className="mt-1 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                      Turning local problems into digital products
                    </h3>
                  </div>
                  <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Product-first
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                  <div className="rounded-[1.75rem] bg-gradient-to-br from-[hsl(220_58%_17%)] to-[hsl(199_92%_55%)] p-5 text-white shadow-lg">
                    <div className="mb-5 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-white/75">Solution lens</p>
                        <p className="mt-1 text-3xl font-semibold">
                          Daily life + business
                        </p>
                      </div>
                      <ShoppingBag className="h-7 w-7 text-white/80" />
                    </div>
                    <div className="grid gap-3">
                      {[
                        "Customer convenience",
                        "Operational efficiency",
                        "Scalable delivery workflows",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[1.75rem] border border-border/70 bg-accent/80 p-5">
                      <div className="mb-3 flex items-center gap-2 text-primary">
                        <Lightbulb className="h-4 w-4" />
                        <span className="text-xs font-semibold uppercase tracking-[0.24em]">
                          Vision
                        </span>
                      </div>
                      <p className="text-sm leading-7 text-muted-foreground">
                        We build solutions based on real market needs, with
                        practical use cases at the center.
                      </p>
                    </div>

                    <div className="rounded-[1.75rem] border border-border/70 bg-card p-5">
                      <div className="mb-3 flex items-center gap-2 text-primary">
                        <BriefcaseBusiness className="h-4 w-4" />
                        <span className="text-xs font-semibold uppercase tracking-[0.24em]">
                          Value
                        </span>
                      </div>
                      <p className="text-sm leading-7 text-muted-foreground">
                        We support businesses with custom development,
                        automation, and user-friendly platforms that solve real
                        operational problems.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.14} className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {trustMetrics.map((metric, index) => (
              <Card
                key={metric.label}
                className={`overflow-hidden border-border/60 bg-card/92 ${
                  index === 0 ? "lg:mt-8" : ""
                }`}
              >
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    {index === 0 ? (
                      <Sparkles className="h-5 w-5" />
                    ) : index === 1 ? (
                      <Lightbulb className="h-5 w-5" />
                    ) : (
                      <BriefcaseBusiness className="h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                      {metric.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
