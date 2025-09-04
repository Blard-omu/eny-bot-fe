"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

interface ChatMessageInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  value: string;
  onChange: (value: string) => void;
}

const ChatMessageInput = ({ onSend, disabled, value, onChange }: ChatMessageInputProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() && !disabled) {
      onSend(value);
      onChange(""); // clear after send
    }
  };

  return (
    <form onSubmit={handleSubmit} className="fixed bottom-4 left-0 right-0 bg-white shadow-lg p-4 w-11/12 lg:max-w-1/2 max-w-7xl mx-auto rounded-lg">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Write your message here..."
          className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-700"
          disabled={disabled}
          aria-label="Chat input"
        />
        <button
          type="submit"
          disabled={disabled || !value.trim()}
          className="p-3 bg-blue-900 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition duration-300"
          aria-label="Send message"
        >
          <PaperAirplaneIcon className="h-5 w-5 " />
        </button>
      </div>
    </form>
  );
};

export default ChatMessageInput;
