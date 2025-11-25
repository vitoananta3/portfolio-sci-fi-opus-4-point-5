import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "glass-panel text-primary-foreground bg-primary/90 hover:bg-primary border-primary/50 hover:neon-border hover:shadow-[0_0_20px_oklch(0.75_0.15_195_/_40%)]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-panel-border bg-panel/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground hover:border-primary/50 hover:shadow-[0_0_10px_oklch(0.75_0.15_195_/_30%)]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        neon: "relative bg-transparent border-2 border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_oklch(0.75_0.15_195_/_50%),inset_0_0_20px_oklch(0.75_0.15_195_/_20%)] active:scale-95",
      },
      size: {
        default: "h-10 px-6 py-2 rounded-md",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

