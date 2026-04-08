import { ArrowUpRight } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Smart Grocery Delivery System",
    description:
      "A scalable ordering and delivery experience designed for local grocery operations, customer convenience, and smooth fulfillment workflows.",
    stack: ["Customer app", "Admin panel", "Delivery flow", "Payments"],
    accent: "from-sky-500/25 to-cyan-400/10",
  },
  {
    title: "Remote Help & Assistance Platform",
    description:
      "A support-driven system that connects users with remote help, request management, and faster issue resolution through digital convenience.",
    stack: ["Web app", "Notifications", "User requests", "Dashboard"],
    accent: "from-emerald-500/25 to-lime-400/10",
  },
  {
    title: "Business Operations Automation Suite",
    description:
      "A custom workflow platform for internal operations, service handling, and business process automation built around unique company needs.",
    stack: ["Automation", "Internal tools", "Reporting", "Role access"],
    accent: "from-violet-500/25 to-fuchsia-400/10",
  },
];

export function PortfolioSection() {
  return (
    <section id="work" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-14">
        <FadeIn>
          <SectionHeading
            eyebrow="Solution Concepts"
            title="Examples of the practical product directions we help bring to life."
            description="These are representative solution areas that reflect the kinds of customer convenience products and business platforms Ruut Level Solutions focuses on."
          />
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.06}>
              <Card className="group h-full overflow-hidden">
                <div className={`h-56 bg-gradient-to-br ${project.accent} p-6`}>
                  <div className="flex h-full rounded-[1.75rem] border border-white/40 bg-white/60 p-4 shadow-lg shadow-black/10 backdrop-blur dark:border-white/10 dark:bg-slate-950/70">
                    <div className="grid w-full gap-3">
                      <div className="grid grid-cols-3 gap-3">
                        <div className="col-span-2 rounded-2xl bg-background/80" />
                        <div className="rounded-2xl bg-background/70" />
                      </div>
                      <div className="rounded-2xl bg-background/80" />
                      <div className="grid grid-cols-4 gap-3">
                        <div className="col-span-2 rounded-2xl bg-background/70" />
                        <div className="rounded-2xl bg-background/60" />
                        <div className="rounded-2xl bg-background/60" />
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="space-y-5 p-7">
                  <div className="space-y-3">
                    <h3 className="font-heading text-2xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <Button variant="secondary" className="w-full justify-center rounded-full">
                    Explore concept
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
