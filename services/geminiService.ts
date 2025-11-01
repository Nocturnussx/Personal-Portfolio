
import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA_FOR_AI } from '../constants';

const SYSTEM_INSTRUCTION = `You are a helpful and professional AI assistant for Azmain Azad's portfolio website. Your purpose is to answer questions about Azmain based *only* on the resume information provided below. Be friendly and conversational. If a question cannot be answered from the provided context, politely state that you don't have that information. Do not invent any details or provide information from outside this context.

Here is Azmain Azad's resume information:
---
${RESUME_DATA_FOR_AI}
---
`;

export const askAboutAzmain = async (question: string): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      throw new Error("API_KEY environment variable not set");
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: question,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini API error:", error);
    return "I'm sorry, but I'm having trouble connecting to my knowledge base right now. Please try again later.";
  }
};
