import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

const buttonVariants = {
  default:
    "bg-primary text-primary-foreground shadow-[0_18px_40px_-18px_hsl(var(--primary)/0.85)] hover:-translate-y-0.5 hover:bg-primary/90",
  secondary:
    "border border-border/70 bg-background/85 text-foreground shadow-sm hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground",
  ghost:
    "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
};

const buttonSizes = {
  default: "min-h-11 px-5 py-2.5",
  lg: "min-h-12 px-6 py-3",
  icon: "h-10 w-10",
};

type ButtonVariant = keyof typeof buttonVariants;
type ButtonSize = keyof typeof buttonSizes;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  href?: string;
}

const sharedClassName =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold leading-none transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-50";

export function Button({
  className,
  variant = "default",
  size = "default",
  asChild,
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    sharedClassName,
    buttonVariants[variant],
    buttonSizes[size],
    className
  );

  if (asChild && href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
