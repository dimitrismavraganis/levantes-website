import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground border border-transparent",
  ghost: "bg-card/60 text-foreground backdrop-blur-md border border-border/60",
  outline: "bg-transparent text-foreground border border-foreground/30",
};

export const LiquidButton = forwardRef<HTMLButtonElement, Props>(function LiquidButton(
  { className, variant = "primary", children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        "liquid-btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        className,
      )}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
});
