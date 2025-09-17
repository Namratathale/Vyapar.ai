// pages/OnboardingPage.tsx
import React, { useState } from 'react';
import Header from '../components/Header';
import InstagramIcon from '../components/icons/InstagramIcon';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import LinkedInIcon from '../components/icons/LinkedInIcon';
import TwitterIcon from '../components/icons/TwitterIcon';

const brandVoices = ["Friendly & Casual", "Professional & Formal", "Witty & Humorous", "Inspirational & Uplifting", "Luxurious & Elegant"];
const socialPlatforms = [
    { name: "Instagram", icon: InstagramIcon },
    { name: "WhatsApp Business", icon: WhatsAppIcon },
    { name: "LinkedIn", icon: LinkedInIcon },
    { name: "Twitter", icon: TwitterIcon },
];

const OnboardingPage: React.FC = () => {
    const [activeVoice, setActiveVoice] = useState(brandVoices[0]);
    const [step, setStep] = useState(1);

    return (
        <div className="animate-fade-in max-w-3xl mx-auto">
            <Header
                title="Business Onboarding"
                subtitle="Let's set up your brand profile so the AI can learn your style."
            />
            
            <p className="text-center text-gray-400 -mt-6 mb-8 max-w-xl mx-auto text-sm">
                Brand logo, and Brand name will be used for making poster, video, etc.
            </p>

            {/* Step Indicator */}
            <div className="flex justify-center items-center space-x-4 my-8">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-purple-600' : 'bg-gray-700'}`}>1</div>
                <div className={`h-1 flex-grow ${step >= 2 ? 'bg-purple-600' : 'bg-gray-700'}`}></div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-purple-600' : 'bg-gray-700'}`}>2</div>
                 <div className={`h-1 flex-grow ${step >= 3 ? 'bg-purple-600' : 'bg-gray-700'}`}></div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-purple-600' : 'bg-gray-700'}`}>3</div>
            </div>

            {step === 1 && (
                 <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 space-y-6">
                    <h3 className="text-xl font-semibold">Step 1: Your Brand Details</h3>
                    <div>
                        <label htmlFor="brand-name" className="block text-sm font-medium text-gray-300 mb-2">Brand Name</label>
                        <input type="text" id="brand-name" className="w-full bg-white/5 rounded-md border-gray-600 focus:ring-purple-500 focus:border-purple-500" placeholder="e.g., Artisan Wonders" />
                    </div>
                     <div>
                        <label htmlFor="brand-logo" className="block text-sm font-medium text-gray-300 mb-2">Brand Logo</label>
                        <input type="file" id="brand-logo" className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-600/20 file:text-purple-300 hover:file:bg-purple-600/40"/>
                    </div>
                </div>
            )}

             {step === 2 && (
                 <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 space-y-6">
                    <h3 className="text-xl font-semibold">Step 2: Define Your Brand Voice</h3>
                     <p className="text-gray-400 text-sm">This helps the AI generate captions that sound just like you.</p>
                    <div className="flex flex-wrap gap-3">
                        {brandVoices.map(voice => (
                            <button key={voice} onClick={() => setActiveVoice(voice)} className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-colors ${activeVoice === voice ? 'bg-purple-600 border-purple-600' : 'bg-gray-700 border-gray-600 hover:border-purple-500'}`}>
                                {voice}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {step === 3 && (
                <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 space-y-6">
                    <h3 className="text-xl font-semibold">Step 3: Connect Your Socials (Optional)</h3>
                    <p className="text-gray-400 text-sm">Connect your accounts to enable direct posting and performance tracking.</p>
                    <div className="space-y-4">
                        {socialPlatforms.map(({name, icon: Icon}) => (
                             <div key={name} className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <Icon className="w-8 h-8"/>
                                    <span className="font-semibold">{name}</span>
                                </div>
                                <button className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium">Connect</button>
                            </div>
                        ))}
                    </div>
                     <div className="text-center text-xs text-gray-500 pt-4">
                        <p className="font-semibold text-gray-400">Note for the Future:</p>
                        <p>The AI will use your Brand Name and Logo to automatically generate branded content like posters and video watermarks.</p>
                    </div>
                </div>
            )}

            <div className="flex justify-between mt-8">
                <button onClick={() => setStep(s => Math.max(1, s - 1))} disabled={step === 1} className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-md font-medium disabled:opacity-50">Back</button>
                {step < 3 ? (
                    <button onClick={() => setStep(s => Math.min(3, s + 1))} className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-md font-semibold">Next</button>
                ) : (
                    <button className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-md font-semibold">Finish Onboarding</button>
                )}
            </div>

        </div>
    );
};

export default OnboardingPage;