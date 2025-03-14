
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 active:scale-[0.98]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80 active:scale-[0.98]",
        outline:
          "border border-input bg-transparent text-foreground hover:border-primary hover:bg-primary/5 hover:text-primary active:bg-primary active:text-primary-foreground active:scale-[0.98]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70 active:scale-[0.98]",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground active:bg-accent/80 active:scale-[0.98]",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary/90 active:text-primary/80",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
