
import { GoogleGenAI } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `You are "Tux Coach", a patient and expert Linux mentor.
Your goal is to help users migrate from Windows/Mac to Linux and master the terminal.
RULES:
1. Never tell a user to "RTFM" (Read The F***ing Manual).
2. Explain concepts simply for beginners.
3. If a command is destructive (like rm, mkfs, dd), add a HUGE BOLD WARNING.
4. Suggest distros based on user needs (gaming, privacy, work, old hardware).
5. Always provide the exact command string when asked for help.
6. Use professional but friendly tone. Use Linux terminology but explain it.`;

export async function askCoach(prompt: string, history: { role: 'user' | 'assistant', content: string }[] = []) {
  const ai = getAI();
  const model = 'gemini-3-flash-preview';
  
  const contents = history.map(h => ({
    role: h.role === 'user' ? 'user' : 'model',
    parts: [{ text: h.content }]
  }));

  // Add the current prompt
  contents.push({ role: 'user', parts: [{ text: prompt }] });

  try {
    const response = await ai.models.generateContent({
      model,
      contents: contents as any,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Coach failed to respond:", error);
    return "I'm having a bit of trouble connecting to my brain! Try again in a second.";
  }
}

export async function getCLIHelp(task: string) {
  const ai = getAI();
  const model = 'gemini-3-flash-preview';
  
  const prompt = `Task: ${task}. Provide the exact Linux CLI command to accomplish this. Include a brief explanation of the flags used. If it's dangerous, warn clearly.`;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        systemInstruction: "You are a CLI assistant. Return only valid bash commands and brief descriptions.",
      }
    });
    return response.text;
  } catch (error) {
    return "Failed to generate command.";
  }
}
