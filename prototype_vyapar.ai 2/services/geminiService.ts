// services/geminiService.ts
import { GoogleGenAI, GroundingChunk } from "@google/genai";
import { FormData, GeneratedContentData, ContentType, Source } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
const model = 'gemini-2.5-flash';

const parseJsonResponse = (text: string): any => {
    const match = text.match(/```json\n([\s\S]*?)\n```/);
    if (match && match[1]) {
        try {
            return JSON.parse(match[1]);
        } catch (e) {
            console.error("Failed to parse JSON from response", e);
            throw new Error("AI returned an invalid JSON format.");
        }
    }
    throw new Error("Could not find a JSON block in the AI response.");
};


export const generateMarketingContent = async (formData: FormData): Promise<GeneratedContentData> => {
    try {
        let prompt = `
            You are a world-class marketing strategist AI for small businesses. Your task is to generate highly effective and creative marketing content.
            Use your search capabilities to research current trends, competitor strategies, and customer sentiments related to the product to make your output more impactful.

            **Brand & Product Information:**
            - Product Name: ${formData.productName}
            - Product Description: ${formData.productDescription}
            - Target Audience: ${formData.targetAudience}
            - Brand Voice: ${formData.brandVoice}

            **User's Strategic Direction:**
            - ${formData.specialInstructions || "No special instructions provided. Use your expertise to create the best content."}

            **Your Task:**
            Based on all the information above and your own research, generate content for a "${formData.contentType}".
        `;

        switch (formData.contentType) {
            case ContentType.POST:
                prompt += `
                    Generate 3 social media captions. Provide one for Instagram (with emojis and hashtags), one for Twitter (concise and punchy), and one for LinkedIn (professional).
                    Format your response as a single JSON object inside a \`\`\`json markdown block.
                    The JSON object should have a single key "captions", which is an array of objects, each with "platform" and "caption" keys.
                    Example: {"captions": [{"platform": "Instagram", "caption": "Your content here..."}, ...]}
                `;
                break;
            case ContentType.REEL:
                 prompt += `
                    Generate a script for a short video (like an Instagram Reel). The script should be engaging and visually interesting.
                    Format your response as a single JSON object inside a \`\`\`json markdown block.
                    The JSON object should have a single key "videoScript" containing keys for "title", "hook" (the first 3 seconds), "scenes" (an array of strings describing each scene), and "cta" (call to action).
                    Example: {"videoScript": {"title": "...", "hook": "...", "scenes": ["...", "..."], "cta": "..."}}
                `;
                break;
            case ContentType.POSTER:
                 prompt += `
                    Generate 3 distinct and creative ideas for a promotional ad poster. Describe the visuals, text/headline, and overall mood for each.
                    Format your response as a single JSON object inside a \`\`\`json markdown block.
                    The JSON object should have a single key "posterIdeas", which is an array of strings.
                    Example: {"posterIdeas": ["Idea 1 description...", "Idea 2 description..."]}
                `;
                break;
        }
        
        prompt += "\nDo not include any text outside of the json markdown block.";

        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
            config: {
                tools: [{googleSearch: {}}],
                temperature: 0.5,
            }
        });

        const jsonText = response.text;
        const parsedContent = parseJsonResponse(jsonText);

        const sources: Source[] = response.candidates?.[0]?.groundingMetadata?.groundingChunks
            ?.map((chunk: GroundingChunk) => ({
                uri: chunk.web?.uri || '',
                title: chunk.web?.title || 'Untitled',
            }))
            .filter(source => source.uri) || [];

        return {
            contentType: formData.contentType,
            sources,
            ...parsedContent
        };

    } catch (error) {
        console.error("Error generating content:", error);
        if (error instanceof Error) {
            throw new Error(`Failed to generate marketing content: ${error.message}`);
        }
        throw new Error("An unknown error occurred while generating content.");
    }
};
