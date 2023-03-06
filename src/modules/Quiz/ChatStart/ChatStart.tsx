import type { ChatStartProps } from "./types";

const ChatStart: React.FC<ChatStartProps> = ({ children }: ChatStartProps) => {
  return (
    <div className="chat chat-start">
      <div className="chat-bubble chat-bubble-secondary animate-fade-in-left-to-right text-neutral shadow-xl">
        {children}
      </div>
    </div>
  );
};

export default ChatStart;
