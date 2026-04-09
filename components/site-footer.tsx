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
      className="border-t border-border/60 bg-background/95 py-16 sm:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:gap-10 lg:px-8">
        <div className="space-y-5 lg:pr-6">
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
              aria-label="LinkedIn"
              className="rounded-full border border-border/70 p-3 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="rounded-full border border-border/70 p-3 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              <Twitter className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="space-y-5">
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

        <div className="space-y-5">
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

        <div className="space-y-5 text-sm text-muted-foreground">
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground/80">
            Contact
          </h3>
          <div className="space-y-4">
            <p className="flex items-start gap-3 leading-6">
              <Mail className="mt-1 h-4 w-4 shrink-0 text-primary" />
              <Link
                href="mailto:enquiry@ruutlevelsolutions.com"
                className="break-all hover:text-foreground"
              >
                enquiry@ruutlevelsolutions.com
              </Link>
            </p>
            <p className="flex items-start gap-3 leading-6">
              <Phone className="mt-1 h-4 w-4 shrink-0 text-primary" />
              <Link href="tel:+917219311914" className="hover:text-foreground">
                +91 72193 11914
              </Link>
            </p>
            <p className="flex items-start gap-3 leading-6">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
              <span>
                H.O. Aanand Nagar, Shivneri Gate, Bhadgaon, Dist. Jalgaon
                424105
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
