import type { ChatEndProps } from "./types";

const ChatEnd: React.FC<ChatEndProps> = ({ children }: ChatEndProps) => {
  return (
    <div className="chat chat-end">
      <div className="chat-bubble chat-bubble-primary animate-fade-in-right-to-left font-normal text-neutral shadow-xl">
        {children}
      </div>
    </div>
  );
};

export default ChatEnd;
