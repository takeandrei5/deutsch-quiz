import type { ChatStartProps } from "./types";

const ChatStart: React.FC<ChatStartProps> = ({ node }: ChatStartProps) => {
  return (
    <div className="chat chat-start">
      <div className="chat-bubble chat-bubble-secondary animate-fade-in-left-to-right text-neutral shadow-xl">
        {node}
      </div>
    </div>
  );
};

export default ChatStart;
