
import { GoogleGenAI } from "@google/genai";
import type { Tone, PostResult } from '../types';
import { PLATFORMS } from '../constants';

// Fix: Per coding guidelines, initialize GoogleGenAI directly with the API key from environment variables, assuming it's always set.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const getModel = (platform: 'LinkedIn' | 'Twitter/X' | 'Instagram') => {
    return platform === 'LinkedIn' ? 'gemini-2.5-pro' : 'gemini-2.5-flash';
};

const generateTextPrompt = (platform: 'LinkedIn' | 'Twitter/X' | 'Instagram', idea: string, tone: Tone): string => {
    switch(platform) {
        case 'LinkedIn':
            return `Generate a professional, long-form LinkedIn post about "${idea}" with a ${tone.toLowerCase()} tone. Use professional language, structure it with clear paragraphs, and end with a call-to-action or a question to encourage engagement.`;
        case 'Twitter/X':
            return `Generate a short, punchy Twitter/X post (under 280 characters) about "${idea}" with a ${tone.toLowerCase()} tone. Make it concise and impactful. Include 1-2 relevant hashtags.`;
        case 'Instagram':
            return `Generate an engaging Instagram caption about "${idea}" with a ${tone.toLowerCase()} tone. The caption should be visually focused, telling a story that complements an image. Include 3-5 relevant and popular hashtags at the end.`;
    }
};

async function generateImagePrompt(idea: string, tone: Tone): Promise<string> {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Based on the idea "${idea}" with a ${tone} tone, create a short, visually descriptive prompt for an image generation model. The prompt should be a single sentence describing a scene, object, or concept. For example: "A minimalist workspace with a laptop showing a graph of upward growth, a cup of coffee, and a succulent plant, bathed in morning light."`
        });
        return response.text.trim();
    } catch (error) {
        console.error("Error generating image prompt:", error);
        // Fallback prompt
        return `A high-quality, visually appealing image related to: ${idea}`;
    }
}

export const generateSocialPosts = async (idea: string, tone: Tone): Promise<PostResult[]> => {
    const imagePrompt = await generateImagePrompt(idea, tone);
    console.log(`Using image prompt: "${imagePrompt}"`);

    const generationPromises = PLATFORMS.map(async (platform) => {
        // Generate text and image in parallel for each platform
        const textPromise = ai.models.generateContent({
            model: getModel(platform.name),
            contents: generateTextPrompt(platform.name, idea, tone),
            config: {
                systemInstruction: "You are an expert social media manager creating viral content."
            }
        });

        const imagePromise = ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: imagePrompt,
            config: {
                numberOfImages: 1,
                outputMimeType: 'image/jpeg',
                aspectRatio: platform.aspectRatio,
            },
        });

        // Await both promises
        const [textResponse, imageResponse] = await Promise.all([textPromise, imagePromise]);

        const text = textResponse.text;
        const base64ImageBytes = imageResponse.generatedImages[0].image.imageBytes;
        const imageUrl = `data:image/jpeg;base64,${base64ImageBytes}`;

        return {
            platform: platform.name,
            text,
            imageUrl,
        };
    });

    return Promise.all(generationPromises);
};