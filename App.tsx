import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import AiChat from './components/AiChat';
import type { ChatMessage } from './types';
import { askAboutAzmain } from './services/geminiService';

export default function App() {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!userInput.trim() || isLoading) return;

    const newUserMessage: ChatMessage = { role: 'user', text: userInput };
    const currentHistory = [...chatHistory, newUserMessage];
    setChatHistory(currentHistory);
    const question = userInput;
    setUserInput('');
    setIsLoading(true);

    try {
      const responseText = await askAboutAzmain(question);
      const newModelMessage: ChatMessage = { role: 'model', text: responseText };
      setChatHistory([...currentHistory, newModelMessage]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      const errorMessage: ChatMessage = { role: 'model', text: 'Sorry, I encountered an error. Please try again.' };
      setChatHistory([...currentHistory, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="ml-0 md:ml-[25%] lg:ml-[22%]">
        <div className="p-8 md:p-12 lg:p-16">
          <MainContent />
          <AiChat 
            chatHistory={chatHistory}
            userInput={userInput}
            onUserInput={setUserInput}
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
          />
        </div>
      </main>
    </div>
  );
}