"use client";
import { forwardRef } from "react";
import { cn } from "@/utils/style";

export const Card = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col space-y-3 rounded border bg-background p-6",
      className
    )}
    {...props}
  />
));
