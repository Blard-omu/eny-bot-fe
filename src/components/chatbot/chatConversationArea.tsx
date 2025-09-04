"use client";

interface Message {
  text: string;
  type: "sent" | "received" | "error" | "escalated";
  timestamp: string;
}

interface ChatConversationAreaProps {
  messages: Message[];
  formatTime: (timestamp: string) => string;
  isLoading: boolean;
}

const ChatConversationArea = ({ messages, formatTime, isLoading }: ChatConversationAreaProps) => {

  // console.log(messages);
  
  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 overflow-y-auto mb-20">
      {messages.length === 0 && (
        <div className="max-w-[70%] p-3 rounded-lg bg-gray-200 text-blue-900">
          Hello! I&apos;m your AI assistant. How can I help you today?
        </div>
      )}
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${message.type === "sent" ? "justify-end" : "justify-start"} mb-4`}
        >
          <div
            className={`max-w-[70%] p-3 rounded-lg ${
              message.type === "sent"
                ? "bg-blue-900 text-white"
                : message.type === "received"
                ? "bg-gray-200 text-blue-900"
                : message.type === "escalated"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-50 text-red-800"
            }`}
          >
            <p className="text-sm">{message.text}</p>
            <span className="text-xs opacity-70 block mt-1">
              {formatTime(message.timestamp)}
            </span>
          </div>
        </div>
      ))}

      {/* Loader shown when isLoading is true */}
      {isLoading && (
        <div className="flex justify-start mb-4">
          <div className="flex items-center space-x-2 bg-gray-200 text-blue-900 p-3 rounded-lg max-w-[70%]">
            <span className="w-2 h-2 bg-blue-900 rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-blue-900 rounded-full animate-bounce delay-150"></span>
            <span className="w-2 h-2 bg-blue-900 rounded-full animate-bounce delay-300"></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatConversationArea;
