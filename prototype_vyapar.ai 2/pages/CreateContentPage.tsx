// pages/CreateContentPage.tsx
import React, { useState } from 'react';
import Header from '../components/Header';
import ContentGeneratorForm from '../components/ContentGeneratorForm';
import Loader from '../components/Loader';
import GeneratedContent from '../components/GeneratedContent';
import { FormData, GeneratedContentData } from '../types';
import { generateMarketingContent } from '../services/geminiService';

const CreateContentPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [generatedContent, setGeneratedContent] = useState<GeneratedContentData | null>(null);

    const handleGenerateContent = async (formData: FormData) => {
        setIsLoading(true);
        setError(null);
        setGeneratedContent(null);
        
        try {
            const content = await generateMarketingContent(formData);
            setGeneratedContent(content);
        } catch (err: any) {
            setError(err.message || 'An unexpected error occurred.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="animate-fade-in">
            <Header 
                title="AI Content Creation Studio"
                subtitle="Select your content type, describe your product, and let our AI craft compelling marketing materials."
            />
            <p className="text-center text-indigo-300 bg-indigo-900/30 p-4 rounded-lg border border-indigo-700 my-8 max-w-3xl mx-auto">
                This AI is a Market specialist. It will collect information from reddit, competitor social media and other sources to make your post.
            </p>
            <ContentGeneratorForm onGenerate={handleGenerateContent} isLoading={isLoading} />

            {isLoading && (
                <div className="mt-8 md:mt-10">
                    <Loader />
                </div>
            )}

            {error && (
                <div className="mt-8 md:mt-10 bg-red-800/50 text-red-300 p-4 rounded-lg border border-red-700">
                    <p className="font-bold">Generation Failed</p>
                    <p>{error}</p>
                </div>
            )}

            {generatedContent && !isLoading && (
                <GeneratedContent content={generatedContent} />
            )}
        </div>
    );
};

export default CreateContentPage;