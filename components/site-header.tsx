import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Vision", href: "#vision" },
  { label: "Testimonials", href: "#testimonials" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-[1.35rem] bg-primary text-lg font-bold text-primary-foreground shadow-lg shadow-primary/25">
            R
          </div>
          <div className="min-w-0">
            <p className="truncate font-heading text-lg font-semibold tracking-tight">
              Ruut Level Solutions
            </p>
            <p className="truncate text-xs text-muted-foreground">
              Root-Level Digital Solutions
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-border/60 bg-background/80 p-1.5 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <ThemeToggle />
          <Button asChild href="#contact" className="hidden sm:inline-flex">
            <span>
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
