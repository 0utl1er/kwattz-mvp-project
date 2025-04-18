
import React from "react";
import { cn } from "@/lib/utils";

interface ChatContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function ChatContainer({ children, className }: ChatContainerProps) {
  return (
    <div
      className={cn(
        "flex flex-col h-[80vh] md:h-[600px] w-full max-w-4xl mx-auto bg-[#0f1c4b] backdrop-blur-sm rounded-xl shadow-2xl relative overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
