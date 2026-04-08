import { FadeIn } from "@/components/motion/fade-in";

const stats = [
  { value: "Problem-first", label: "Product direction grounded in real needs" },
  { value: "Customer-ready", label: "Digital experiences built for convenience" },
  { value: "Business-led", label: "Platforms that support growth and operations" },
];

export function ClientsSection() {
  return (
    <section className="px-6 py-8 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-border/60 bg-card/70 px-8 py-8 shadow-[0_24px_80px_-38px_rgba(15,23,42,0.16)] backdrop-blur">
        <FadeIn className="space-y-8">
          <p className="text-center text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Built with the clarity of a product company and the reliability of a solutions partner
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.75rem] border border-border/60 bg-background/85 px-6 py-6 text-center transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
