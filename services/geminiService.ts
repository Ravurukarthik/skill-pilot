
import { GoogleGenAI } from "@google/genai";

// Fetch structured tutorial summaries using Gemini 3
export const getTutorialSummary = async (subject: string, level: string) => {
  try {
    // Initializing with process.env.API_KEY directly as required by guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    
    // Using gemini-3-flash-preview for educational text summarization
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a structured tutorial overview for ${subject} at ${level} level. Include key topics to study and a brief explanation of the most important concept.`,
      config: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      },
    });

    // Directly access the text property from the response (not a method)
    return response.text || "No content generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating tutorial content. Please try again later.";
  }
};
