import {
  ArrowUpRight,
  ChartNoAxesCombined,
  HandHelping,
  ShoppingCart,
  Waypoints,
} from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    icon: ShoppingCart,
    title: "Online grocery delivery platforms",
    description:
      "Fast, customer-friendly commerce experiences that connect local supply, convenient ordering, delivery workflows, and operational visibility.",
    accent: "from-emerald-500/20 to-lime-400/5",
  },
  {
    icon: HandHelping,
    title: "Remote assistance systems",
    description:
      "Digital platforms that help users request support, connect with service providers, and resolve urgent or everyday needs more efficiently.",
    accent: "from-sky-500/20 to-cyan-400/5",
  },
  {
    icon: Waypoints,
    title: "Local convenience and service apps",
    description:
      "Practical apps for booking, support, on-demand requests, and neighborhood-level problem solving built around real user behavior.",
    accent: "from-violet-500/20 to-fuchsia-400/5",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Custom platforms for unique operations",
    description:
      "Purpose-built digital systems for businesses that need automation, customer workflows, internal tools, or a tailored product idea brought to life.",
    accent: "from-amber-500/20 to-orange-400/5",
  },
];

export function ProductsVisionSection() {
  return (
    <section id="vision" className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl space-y-14">
        <FadeIn>
          <SectionHeading
            eyebrow="Products & Vision"
            title="We build impactful platforms that improve daily life and support real business growth."
            description="Our product vision is centered on useful technology. We focus on solutions based on real market needs, scalable digital products, and systems that make life easier for users while creating measurable value for businesses."
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <FadeIn key={product.title} delay={index * 0.06}>
                <Card
                  className={`group h-full overflow-hidden bg-gradient-to-br ${product.accent} transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_24px_80px_-36px_rgba(14,165,233,0.38)]`}
                >
                  <CardContent className="relative flex h-full flex-col gap-5 p-7">
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-[1.4rem] border border-border/60 bg-background/80 text-primary shadow-sm backdrop-blur">
                        <Icon className="h-6 w-6" />
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                        {product.title}
                      </h3>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {product.description}
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
