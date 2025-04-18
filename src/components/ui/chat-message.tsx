
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  animate?: boolean;
}

export function ChatMessage({ message, isUser, animate = true }: ChatMessageProps) {
  return (
    <div
      className={cn(
        "mb-4 flex",
        isUser ? "justify-end" : "justify-start",
        animate && "animate-message-fade-in opacity-0"
      )}
    >
      <div
        className={cn(
          "rounded-lg px-4 py-2 max-w-[80%]",
          isUser
            ? "bg-primary text-white"
            : "bg-gray-100 text-gray-900"
        )}
      >
        <p className="text-sm sm:text-base">{message}</p>
      </div>
    </div>
  );
}
