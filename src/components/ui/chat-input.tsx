
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { FormEvent } from "react";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled?: boolean;
}

export function ChatInput({ value, onChange, onSend, disabled }: ChatInputProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        value="Site is currently under maintenance"
        onChange={() => {}}
        placeholder="Type your message..."
        className="flex-1 bg-gray-100"
        disabled={true}
      />
      <Button type="submit" disabled={true}>
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
