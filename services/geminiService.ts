
import { GoogleGenAI, Type } from "@google/genai";
import { Project, AIInsight } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateProjectInsight = async (project: Project): Promise<AIInsight> => {
  const prompt = `As a world-class architectural critic and theorist, provide an in-depth analysis of the following project:
  Title: ${project.title}
  Category: ${project.category}
  Location: ${project.location}
  Materials: ${project.specifications.materials.join(', ')}
  Description: ${project.description}
  
  Please provide:
  1. A professional architectural narrative (narrative).
  2. The underlying design logic and philosophical approach (logic).
  3. The potential environmental or social impact of this design (environmentalImpact).`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          narrative: { type: Type.STRING },
          logic: { type: Type.STRING },
          environmentalImpact: { type: Type.STRING },
        },
        required: ['narrative', 'logic', 'environmentalImpact'],
      },
    },
  });

  return JSON.parse(response.text || '{}') as AIInsight;
};
