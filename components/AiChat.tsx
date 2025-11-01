import React from 'react';
import type { ChatMessage } from '../types';

interface AiChatProps {
  chatHistory: ChatMessage[];
  userInput: string;
  onUserInput: (input: string) => void;
  onSendMessage: () => void;
  isLoading: boolean;
}

const AiChat: React.FC<AiChatProps> = ({ chatHistory, userInput, onUserInput, onSendMessage, isLoading }) => {
  const chatContainerRef = React.useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, isLoading]);
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSendMessage();
    }
  };
  
  return (
    <section className="mt-12 pt-12 border-t-2 border-gray-800" id="ai-chat">
      <h2 className="text-3xl font-bold text-white mb-8 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-1/2 after:h-1 after:bg-[#ffdb70]">
        Ask AI About Me
      </h2>
      <div 
        ref={chatContainerRef}
        className="bg-[#2a2a2a] rounded-lg p-4 h-96 overflow-y-auto flex flex-col space-y-4 mb-4"
        aria-live="polite"
      >
        {chatHistory.length === 0 && (
          <div className="m-auto text-center text-gray-500">
            <p>Have a question about my resume?</p>
            <p className="text-sm">e.g., "What are his strongest skills?"</p>
          </div>
        )}
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.role === 'model' && <i className="fas fa-robot text-xl text-[#ffdb70] mb-2 flex-shrink-0"></i>}
            <div
              className={`max-w-xl p-3 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-[#ffdb70] text-black rounded-br-none'
                  : 'bg-gray-700 text-gray-200 rounded-bl-none'
              }`}
            >
              <p className="whitespace-pre-wrap break-words">{msg.text}</p>
            </div>
             {msg.role === 'user' && <i className="fas fa-user text-xl text-[#ffdb70] mb-2 flex-shrink-0"></i>}
          </div>
        ))}
        {isLoading && (
          <div className="flex items-end gap-2 justify-start">
            <i className="fas fa-robot text-xl text-[#ffdb70] mb-2 flex-shrink-0"></i>
             <div className="max-w-md p-3 rounded-lg bg-gray-700 text-gray-200 rounded-bl-none flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
             </div>
          </div>
        )}
      </div>
      <div className="flex space-x-2">
        <input
          type="text"
          value={userInput}
          onChange={(e) => onUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything about me..."
          aria-label="Ask a question about Azmain Azad"
          className="flex-grow bg-gray-700 border-2 border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffdb70] focus:border-transparent transition"
          disabled={isLoading}
        />
        <button
          onClick={onSendMessage}
          disabled={isLoading || !userInput.trim()}
          aria-label="Send message to AI assistant"
          className="bg-[#ffdb70] text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed flex items-center justify-center w-28"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <span>Send</span>
          )}
        </button>
      </div>
    </section>
  );
};

export default AiChat;