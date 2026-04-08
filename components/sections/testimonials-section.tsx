import { Quote } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Priya Nair",
    role: "Founder",
    company: "DailyBasket Local",
    review:
      "Ruut Level Solutions understood the everyday convenience problem we were trying to solve and translated it into a product approach that felt practical, clear, and business-ready.",
  },
  {
    name: "Arjun Mehta",
    role: "Operations Lead",
    company: "AssistConnect",
    review:
      "Their team brought strong product thinking and a reliable process. The platform was designed around real user needs, not just technical features, and that made a huge difference.",
  },
  {
    name: "Meera Thomas",
    role: "Director",
    company: "ServeFlow Systems",
    review:
      "We needed a custom solution for our workflows and customer support operations. Ruut Level Solutions delivered something modern, easy to use, and aligned with how our business actually works.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-14">
        <FadeIn>
          <SectionHeading
            eyebrow="Testimonials"
            title="How our work is experienced by businesses we support."
            description="We aim to build trust through thoughtful execution, practical solutions, and technology that solves real problems for real users."
            align="center"
          />
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.06}>
              <Card className="h-full">
                <CardContent className="flex h-full flex-col gap-6 p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Quote className="h-5 w-5" />
                  </div>
                  <p className="flex-1 text-sm leading-7 text-muted-foreground">
                    {testimonial.review}
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
