import {
  ArrowUpRight,
  CheckCircle2,
  HandHelping,
  ShoppingCart,
  Workflow,
} from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    icon: ShoppingCart,
    title: "Smart Grocery Delivery System",
    description:
      "A scalable ordering and delivery experience designed for local grocery operations, customer convenience, and smooth fulfillment workflows.",
    stack: ["Customer app", "Admin panel", "Delivery flow", "Payments"],
    accent: "from-sky-500/20 via-cyan-400/12 to-emerald-300/10",
    metric: "24/7",
    label: "Order-ready flow",
    status: ["Browse", "Checkout", "Delivery"],
  },
  {
    icon: HandHelping,
    title: "Remote Help & Assistance Platform",
    description:
      "A support-driven system that connects users with remote help, request management, and faster issue resolution through digital convenience.",
    stack: ["Web app", "Notifications", "User requests", "Dashboard"],
    accent: "from-emerald-500/20 via-teal-400/12 to-lime-300/10",
    metric: "Fast",
    label: "Support routing",
    status: ["Request", "Assign", "Resolve"],
  },
  {
    icon: Workflow,
    title: "Business Operations Automation Suite",
    description:
      "A custom workflow platform for internal operations, service handling, and business process automation built around unique company needs.",
    stack: ["Automation", "Internal tools", "Reporting", "Role access"],
    accent: "from-violet-500/20 via-fuchsia-400/12 to-sky-300/10",
    metric: "Smart",
    label: "Workflow control",
    status: ["Capture", "Automate", "Report"],
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
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <FadeIn key={project.title} delay={index * 0.06}>
                <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/35 hover:shadow-[0_32px_92px_-42px_rgba(14,165,233,0.42)]">
                  <div className={`relative overflow-hidden bg-gradient-to-br ${project.accent} p-5`}>
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/45 blur-3xl dark:bg-primary/20" />
                    <div className="relative rounded-[1.5rem] border border-white/55 bg-white/82 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-950/74">
                      <div className="mb-6 flex items-center justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-105">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="inline-flex items-center whitespace-nowrap rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary dark:border-white/10 dark:bg-white/10 dark:text-sky-200">
                          Concept 0{index + 1}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div className="rounded-2xl border border-border/60 bg-background/88 p-4 dark:border-white/10 dark:bg-white/10">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                            {project.label}
                          </p>
                          <div className="mt-2 flex items-end justify-between gap-4">
                            <p className="font-heading text-3xl font-semibold leading-none text-foreground">
                              {project.metric}
                            </p>
                            <ArrowUpRight className="h-5 w-5 text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </div>
                        </div>

                        <div className="grid gap-2">
                          {project.status.map((item, stepIndex) => (
                            <div
                              key={item}
                              className="flex items-center gap-3 rounded-2xl border border-border/55 bg-background/78 px-3 py-2.5 text-sm font-medium text-foreground dark:border-white/10 dark:bg-white/8"
                            >
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                              <span>{item}</span>
                              <span className="ml-auto h-1.5 w-12 rounded-full bg-primary/15">
                                <span
                                  className="block h-full rounded-full bg-primary"
                                  style={{ width: `${58 + stepIndex * 16}%` }}
                                />
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="flex flex-1 flex-col gap-5 p-7">
                    <div className="space-y-3">
                      <h3 className="font-heading text-2xl font-semibold leading-tight text-foreground">
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
                          className="rounded-full border border-border/70 bg-background/80 px-3 py-1.5 text-xs font-semibold text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <Button
                      variant="secondary"
                      className="mt-auto w-full justify-center rounded-full"
                    >
                      Explore concept
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
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
