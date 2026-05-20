import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import headerLogo from "@/lib/assets/logo-full-cropped.jpeg";

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
        <Link href="/" className="flex min-w-0 items-center">
          <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-border/60 sm:h-20 sm:w-24">
            <Image
              src={headerLogo}
              alt="Ruut Level Solutions logo"
              fill
              className="object-contain"
              sizes="(min-width: 640px) 96px, 80px"
              priority
            />
          </div>
          <div className="sr-only">
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

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Button asChild href="#contact" className="hidden sm:inline-flex">
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
