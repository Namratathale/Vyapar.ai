// components/GeneratedContent.tsx
import React, { useState } from 'react';
import { GeneratedContentData, ContentType } from '../types';
import Accordion from './Accordion';
import ClipboardIcon from './icons/ClipboardIcon';
import FileTextIcon from './icons/FileTextIcon';
import ImageIcon from './icons/ImageIcon';
import VideoIcon from './icons/VideoIcon';
import InstagramIcon from './icons/InstagramIcon';
import TwitterIcon from './icons/TwitterIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import PencilIcon from './icons/PencilIcon';
import RefreshIcon from './icons/RefreshIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';
import ClockIcon from './icons/ClockIcon';

interface GeneratedContentProps {
  content: GeneratedContentData;
}

const platformIcons: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
    Instagram: InstagramIcon,
    Twitter: TwitterIcon,
    LinkedIn: LinkedInIcon,
    'WhatsApp Business': WhatsAppIcon,
};

const PlatformIcon = ({ platform }: { platform: string }) => {
    const lowerPlatform = platform.toLowerCase();
    if (lowerPlatform.includes('instagram')) return <InstagramIcon className="w-5 h-5 text-pink-400" />;
    if (lowerPlatform.includes('twitter')) return <TwitterIcon className="w-5 h-5 text-sky-400" />;
    if (lowerPlatform.includes('linkedin')) return <LinkedInIcon className="w-5 h-5 text-blue-400" />;
    return <FileTextIcon className="w-5 h-5 text-gray-400" />;
};

const GeneratedContent: React.FC<GeneratedContentProps> = ({ content }) => {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms(prev => 
        prev.includes(platform) 
            ? prev.filter(p => p !== platform) 
            : [...prev, platform]
    );
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const renderContent = () => {
    switch(content.contentType) {
        case ContentType.POST:
            return (
                <Accordion title="Generated Social Posts" icon={<FileTextIcon className="w-6 h-6 text-purple-400" />} defaultOpen>
                    <div className="space-y-4">
                        {content.captions?.map((p, index) => (
                            <div key={index} className="bg-gray-900/50 p-4 rounded-md">
                                <div className="flex items-center gap-2 mb-2">
                                    <PlatformIcon platform={p.platform} />
                                    <h4 className="font-semibold text-lg text-gray-200">{p.platform}</h4>
                                </div>
                                <div className="flex justify-between items-start gap-4">
                                    <p className="text-gray-300 whitespace-pre-wrap">{p.caption}</p>
                                    <button onClick={() => handleCopy(p.caption)} className="text-gray-400 hover:text-white transition-colors flex-shrink-0 relative">
                                    <ClipboardIcon className="w-5 h-5" />
                                    {copiedText === p.caption && <span className="text-xs text-green-400 absolute -translate-x-1/2 left-1/2 -bottom-5">Copied!</span>}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </Accordion>
            );
        case ContentType.REEL:
            const script = content.videoScript;
            return (
                <Accordion title="Generated Video Reel Script" icon={<VideoIcon className="w-6 h-6 text-pink-400" />} defaultOpen>
                    <div className="space-y-4 text-gray-300">
                        <h3 className="text-xl font-bold text-white">Title: {script?.title}</h3>
                        <div>
                            <h4 className="font-semibold text-lg text-pink-300">Hook (First 3s):</h4>
                            <p className="pl-4 border-l-2 border-pink-400/50">{script?.hook}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg text-pink-300">Scenes:</h4>
                            <ul className="space-y-2">
                                {script?.scenes.map((scene, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="mr-2 text-pink-400 font-bold">{index + 1}.</span>
                                        <p>{scene}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                         <div>
                            <h4 className="font-semibold text-lg text-pink-300">Call to Action:</h4>
                            <p className="pl-4 border-l-2 border-pink-400/50">{script?.cta}</p>
                        </div>
                    </div>
                </Accordion>
            );
        case ContentType.POSTER:
            return (
                <Accordion title="Generated Ad Poster Ideas" icon={<ImageIcon className="w-6 h-6 text-indigo-400" />} defaultOpen>
                     <ul className="space-y-4 list-decimal list-inside text-gray-300">
                        {content.posterIdeas?.map((idea, index) => (
                          <li key={index}><span className="font-semibold text-white">Idea {index+1}:</span> {idea}</li>
                        ))}
                     </ul>
                </Accordion>
            );
        default:
            return <p>No content generated.</p>;
    }
  }

  return (
    <div className="mt-8 md:mt-10 animate-fade-in space-y-6">
        {renderContent()}

        {content.sources && content.sources.length > 0 && (
             <Accordion title="Sources" icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.527-1.917 6.012 6.012 0 011.912 2.706C16.27 8.57 16 9.026 16 9.5a1.5 1.5 0 01-1.5 1.5h-1A1.5 1.5 0 0112 9.5V9a2 2 0 00-4 0v.5A1.5 1.5 0 016.5 11h-1A1.5 1.5 0 014 9.5c0-.474.27-1.43.332-1.473zM10 12a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" /></svg>}>
                <p className="text-sm text-gray-400 mb-3">The AI used information from these web pages to inform its response.</p>
                <ul className="space-y-2">
                    {content.sources.map((source, index) => (
                        <li key={index}>
                            <a href={source.uri} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 hover:underline break-all">
                                {index + 1}. {source.title || source.uri}
                            </a>
                        </li>
                    ))}
                </ul>
            </Accordion>
        )}

        <div className="mt-8 space-y-6 pt-6 border-t border-gray-700">
            <div className="flex items-center justify-center gap-4">
                 <button onClick={() => alert('Tweak feature coming soon!')} className="inline-flex items-center gap-2 px-5 py-2 font-medium text-gray-300 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all">
                    <PencilIcon className="w-5 h-5" />
                    Tweak
                </button>
                <button onClick={() => alert('Recreating content...')} className="inline-flex items-center gap-2 px-5 py-2 font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-all">
                    <RefreshIcon className="w-5 h-5" />
                    Recreate
                </button>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-2">Automate Your Posting</h3>
                <p className="text-gray-400 mb-5 text-sm">Select the platforms where you want to automatically post this content using n8n or MCP.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {Object.entries(platformIcons).map(([name, Icon]) => (
                        <button
                            key={name}
                            onClick={() => togglePlatform(name)}
                            className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all ${
                                selectedPlatforms.includes(name) ? 'bg-green-600/30 border-green-500' : 'bg-white/5 border-gray-600 hover:border-green-500'
                            }`}
                        >
                            <Icon className={`w-5 h-5 ${selectedPlatforms.includes(name) ? 'text-green-400' : 'text-gray-400'}`} />
                            <span className={`font-semibold text-sm ${selectedPlatforms.includes(name) ? 'text-white' : 'text-gray-300'}`}>{name}</span>
                        </button>
                    ))}
                </div>
                <div className="flex justify-end">
                    <button 
                        onClick={() => alert(`Scheduling post for: ${selectedPlatforms.join(', ') || 'no platforms selected'}`)}
                        disabled={selectedPlatforms.length === 0}
                        className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-green-600 hover:bg-green-700 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ClockIcon className="w-5 h-5" />
                        Schedule Post
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default GeneratedContent;