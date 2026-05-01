
import { GoogleGenAI } from "@google/genai";

// Fetch structured tutorial summaries using Gemini 3
export const getTutorialSummary = async (subject: string, level: string) => {
  try {
    // Initializing with process.env.GEMINI_API_KEY as required by guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY as string });
    
    // Using gemini-3-flash-preview for educational text summarization
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a structured tutorial overview for ${subject} at ${level} level. Include key topics to study and a brief explanation of the most important concept.`,
    });
    
    return response.text || "No content generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating tutorial content. Please try again later.";
  }
};
