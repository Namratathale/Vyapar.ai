// pages/HelpPage.tsx
import React from 'react';
import Header from '../components/Header';
import Accordion from '../components/Accordion';
import PlayCircleIcon from '../components/icons/PlayCircleIcon';

const faqs = [
    {
        question: "How does the AI Marketing Specialist work?",
        answer: "Our tool uses Google's advanced Gemini AI model with Google Search enabled. When you provide product details and special instructions (like 'focus on discounts' or 'compare to competitors'), the AI actively researches current market trends, competitor activities, and customer conversations online. It then uses this real-time data to craft marketing content that is highly relevant, strategic, and designed to engage your specific audience."
    },
    {
        question: "How do I connect my social media accounts?",
        answer: "You can connect your accounts in the 'Onboarding' section. Follow the step-by-step process to securely link your Instagram, LinkedIn, and other profiles. This will enable future features like direct posting and performance tracking. Watch our short tutorial for a complete guide."
    },
    {
        question: "Is my business data safe?",
        answer: "Absolutely. We prioritize your data's security. All information you provide is encrypted and used solely for the purpose of generating content and insights for your business. We do not share your data with third parties."
    },
    {
        question: "What is the 'Command Center'?",
        answer: "The Command Center is your business dashboard. It provides AI-driven daily briefings, key sales metrics, customer insights, and tracks the performance of your marketing posts to help you make informed decisions and grow your business."
    },
    {
        question: "Can I customize the generated content?",
        answer: "Yes! The generated content is a great starting point. We encourage you to review, edit, and tweak it to perfectly match your brand's unique style and messaging. You can copy any caption with a single click to paste it into your editor of choice."
    }
]

const HelpPage: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <Header 
        title="Help & FAQ"
        subtitle="Find answers to common questions about Vyapar.ai."
      />

      <div className="space-y-4 mt-8">
         <Accordion title="How to Connect Your Social Media Accounts">
            <div className="space-y-3">
                <p className="text-gray-300">
                    Watch this quick video to see how to securely connect your social media accounts from the 'Onboarding' page. This will allow you to use future features like direct posting and performance analytics.
                </p>
                <div className="aspect-video bg-gray-900/50 rounded-lg flex items-center justify-center cursor-pointer group relative">
                    <img 
                        src="https://storage.googleapis.com/aistudio-marketplace/project-assets/7269f88f-01a7-4b95-a4e9-d10bc931e9c5/private/video_thumbnail_placeholder.png" 
                        alt="Video tutorial placeholder"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors rounded-lg"></div>
                    <PlayCircleIcon className="w-20 h-20 text-white/70 group-hover:text-white transition-all transform group-hover:scale-110 absolute" />
                </div>
            </div>
        </Accordion>

        {faqs.map((faq, index) => (
            <Accordion key={index} title={faq.question}>
                <p className="text-gray-300">{faq.answer}</p>
            </Accordion>
        ))}
      </div>
    </div>
  );
};

export default HelpPage;
