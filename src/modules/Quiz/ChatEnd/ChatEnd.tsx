import type { ChatEndProps } from "./types";

const ChatEnd: React.FC<ChatEndProps> = ({ node }: ChatEndProps) => {
  return (
    <div className="chat chat-end">
      <div className="chat-bubble chat-bubble-primary animate-fade-in-right-to-left text-neutral shadow-xl">
        {node}
      </div>
    </div>
  );
};

export default ChatEnd;
