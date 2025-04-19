
import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    // Apply security attributes
    const securityProps: Record<string, string> = {};
    
    // Add autocomplete="off" for sensitive fields 
    if (type === "password" || type === "email") {
      securityProps.autoComplete = type === "password" ? "new-password" : "email";
    }
    
    // Add additional security attributes
    if (type === "text" || type === "email") {
      securityProps.spellCheck = "false";
      securityProps.autoCorrect = "off";
    }
    
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-md border border-input bg-background px-4 py-2 text-base ring-offset-background cursor-not-allowed opacity-50",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
          "placeholder:text-muted-foreground/70",
          "focus-visible:outline-none focus-visible:border-[#C3FF44] focus-visible:ring-2 focus-visible:ring-[#C3FF44]/30",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "transition-all duration-200 ease-in-out",
          "shadow-sm hover:shadow-md hover:border-[#C3FF44]/50",
          "md:text-sm input-glow",
          className
        )}
        ref={ref}
        disabled={true}
        {...securityProps}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
