import * as React from "react";

import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative rounded-[2rem] border border-border/70 bg-card/90 shadow-[0_22px_80px_-34px_rgba(15,23,42,0.18)] backdrop-blur-sm dark:border-border/70 dark:bg-card/95 dark:shadow-[0_22px_80px_-38px_rgba(0,0,0,0.55)]",
        className
      )}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)} {...props} />;
}
