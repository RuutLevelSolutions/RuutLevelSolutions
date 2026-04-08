import {
  Bot,
  BriefcaseBusiness,
  HandHelping,
  MonitorSmartphone,
  ShoppingCart,
  TicketCheck,
  Workflow,
} from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: ShoppingCart,
    title: "Grocery Delivery Platforms",
    description:
      "Digital grocery ordering and delivery systems built for convenience, local operations, customer retention, and reliable order flow.",
  },
  {
    icon: HandHelping,
    title: "Remote Help Solutions",
    description:
      "Platforms that connect users with support, assistance, or guidance through responsive digital workflows and clear communication.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Custom Software Development",
    description:
      "Tailored software solutions for companies that need something beyond off-the-shelf tools, with business goals at the center.",
  },
  {
    icon: MonitorSmartphone,
    title: "Web Application Development",
    description:
      "Modern, scalable web apps, dashboards, portals, and internal tools designed for performance, usability, and growth.",
  },
  {
    icon: Workflow,
    title: "Business Automation Solutions",
    description:
      "Automation systems that reduce manual work, simplify operations, and improve speed, accuracy, and team productivity.",
  },
  {
    icon: TicketCheck,
    title: "Service Booking Platforms",
    description:
      "Booking and service request platforms that help businesses manage schedules, customers, and service delivery in one place.",
  },
  {
    icon: Bot,
    title: "Customer Support Systems",
    description:
      "Customer support and convenience-driven digital tools that help businesses respond faster and serve users more effectively.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl space-y-14">
        <FadeIn>
          <SectionHeading
            eyebrow="Services"
            title="Solution areas designed around practical use cases and real business needs."
            description="Our services reflect the kinds of products and systems we believe matter most: useful platforms, scalable software, and technology that helps people and businesses solve everyday problems."
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <FadeIn key={service.title} delay={index * 0.06}>
                <Card className="group h-full bg-gradient-to-br from-card to-card/70 transition-all duration-300 hover:-translate-y-2 hover:border-primary/35 hover:shadow-[0_30px_80px_-35px_rgba(14,165,233,0.35)]">
                  <CardContent className="flex h-full flex-col gap-6 p-7">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[1.4rem] bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {service.description}
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
