
import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-4 py-3 text-base ring-offset-background",
          "placeholder:text-muted-foreground/70",
          "focus-visible:outline-none focus-visible:border-[#C3FF44] focus-visible:ring-2 focus-visible:ring-[#C3FF44]/30",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "transition-all duration-200 ease-in-out",
          "shadow-sm hover:shadow-md hover:border-[#C3FF44]/50",
          "md:text-sm resize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
