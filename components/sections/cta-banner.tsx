import { ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CtaBanner() {
  return (
    <section className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <Card className="overflow-hidden border-primary/20 bg-slate-950 text-white shadow-[0_32px_120px_-38px_rgba(14,165,233,0.45)] dark:border-primary/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.18),transparent_38%)]" />
            <CardContent className="relative flex flex-col gap-8 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:p-12">
              <div className="max-w-2xl space-y-4">
                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
                  Build Something Useful
                </span>
                <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  Have an idea that solves a real problem?
                </h2>
                <p className="text-base leading-7 text-slate-300 sm:text-lg">
                  Let&apos;s shape it into a practical digital product, platform, or
                  business solution that improves convenience, efficiency, and
                  long-term growth.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap lg:justify-end">
                <Button
                  asChild
                  href="#contact"
                  size="lg"
                  className="w-full bg-white text-slate-950 hover:bg-slate-100 sm:w-auto"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  asChild
                  href="mailto:enquiry@ruutlevelsolutions.com"
                  size="lg"
                  variant="secondary"
                  className="w-full border-white/10 bg-white/5 text-white hover:border-white/25 hover:bg-white/10 hover:text-white sm:w-auto"
                >
                  enquiry@ruutlevelsolutions.com
                </Button>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
