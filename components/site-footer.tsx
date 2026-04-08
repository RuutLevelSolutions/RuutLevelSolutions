import Link from "next/link";
import { Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Vision", href: "#vision" },
  { label: "Testimonials", href: "#testimonials" },
];
const serviceLinks = [
  "Grocery Delivery Platforms",
  "Remote Help Solutions",
  "Custom Software",
  "Business Automation",
];

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-border/60 bg-background/95 py-16"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr] lg:px-8">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-primary-foreground shadow-lg shadow-primary/25">
              R
            </div>
            <div>
              <p className="font-heading text-xl font-semibold">
                Ruut Level Solutions
              </p>
              <p className="text-sm text-muted-foreground">
                Root-level solutions for real-world problems.
              </p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-7 text-muted-foreground">
            We build practical digital products and platforms that solve
            day-to-day customer challenges and help businesses grow through
            technology, automation, and better digital experiences.
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="rounded-full border border-border/70 p-3 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="rounded-full border border-border/70 p-3 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              <Twitter className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-foreground/80">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-foreground/80">
            Services
          </h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {serviceLinks.map((item) => (
              <li key={item}>
                <Link href="#services" className="hover:text-foreground">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 text-sm text-muted-foreground">
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground/80">
            Contact
          </h3>
          <p className="flex items-start gap-3">
            <Mail className="mt-0.5 h-4 w-4 text-primary" />
            hello@ruutlevel.com
          </p>
          <p className="flex items-start gap-3">
            <Phone className="mt-0.5 h-4 w-4 text-primary" />
            +1 (415) 555-0147
          </p>
          <p className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 text-primary" />
            350 Mission Street, San Francisco, CA 94105
          </p>
        </div>
      </div>
    </footer>
  );
}
