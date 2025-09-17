// components/ContentGeneratorForm.tsx
import React, { useState } from 'react';
import { FormData, ContentType } from '../types';
import SendIcon from './icons/SendIcon';
import FileTextIcon from './icons/FileTextIcon';
import VideoIcon from './icons/VideoIcon';
import ImageIcon from './icons/ImageIcon';
import MicrophoneIcon from './icons/MicrophoneIcon';

interface ContentGeneratorFormProps {
  onGenerate: (formData: FormData) => void;
  isLoading: boolean;
}

const contentTypes = [
  { id: ContentType.POST, icon: FileTextIcon, label: 'Social Post' },
  { id: ContentType.REEL, icon: VideoIcon, label: 'Video Reel' },
  { id: ContentType.POSTER, icon: ImageIcon, label: 'Ad Poster' },
];

const brandVoices = ["Friendly & Casual", "Professional & Formal", "Witty & Humorous", "Inspirational & Uplifting", "Luxurious & Elegant"];

const ContentGeneratorForm: React.FC<ContentGeneratorFormProps> = ({ onGenerate, isLoading }) => {
  const [contentType, setContentType] = useState<ContentType>(ContentType.POST);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [brandVoice, setBrandVoice] = useState(brandVoices[0]);
  const [specialInstructions, setSpecialInstructions] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productName || !productDescription) {
        alert("Please fill in the product name and description.");
        return;
    }
    onGenerate({ contentType, productName, productDescription, targetAudience, brandVoice, specialInstructions });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800/50 p-6 md:p-8 rounded-lg border border-gray-700 space-y-6">
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-3">1. Choose Content Type</label>
        <div className="grid grid-cols-3 gap-3">
          {contentTypes.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setContentType(id)}
              className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all ${
                contentType === id ? 'bg-purple-600/30 border-purple-500' : 'bg-white/5 border-gray-600 hover:border-purple-500'
              }`}
            >
              <Icon className={`w-7 h-7 mb-2 ${contentType === id ? 'text-purple-400' : 'text-gray-400'}`} />
              <span className={`font-semibold text-sm ${contentType === id ? 'text-white' : 'text-gray-300'}`}>{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-3">2. Describe Your Product</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full bg-white/5 rounded-md border-gray-600 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Product Name (e.g., Handmade Ceramic Mug)"
                required
            />
            <input
                type="text"
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                className="w-full bg-white/5 rounded-md border-gray-600 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Target Audience (e.g., Coffee lovers)"
            />
        </div>
        <textarea
            rows={3}
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            className="w-full mt-4 bg-white/5 rounded-md border-gray-600 focus:ring-purple-500 focus:border-purple-500"
            placeholder="Product Description (Describe its features and benefits)"
            required
        />
      </div>

       <div>
            <label htmlFor="brand-voice" className="block text-sm font-medium text-gray-300 mb-3">3. Define Your Style</label>
            <select
                id="brand-voice"
                value={brandVoice}
                onChange={(e) => setBrandVoice(e.target.value)}
                className="w-full bg-white/5 rounded-md border-gray-600 focus:ring-purple-500 focus:border-purple-500"
            >
                {brandVoices.map(voice => (
                    <option key={voice} value={voice}>{voice}</option>
                ))}
            </select>
       </div>
       
       <div>
            <label htmlFor="special-instructions" className="block text-sm font-medium text-gray-300 mb-3">
                4. Give The AI Special Instructions (Optional)
            </label>
            <div className="relative">
                <textarea
                    id="special-instructions"
                    rows={4}
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    className="w-full bg-white/5 rounded-md border-gray-600 focus:ring-purple-500 focus:border-purple-500 pr-10"
                    placeholder="Tell the AI Marketing Specialist what to do. Ex: 'Announce a 10% discount for Diwali', 'Focus on how our webcam is better than competitors for remote workers', or 'Compare market trends and create a post for Gen-Z'."
                />
                <button type="button" onClick={() => alert('Voice-to-text feature coming soon!')} className="absolute top-3 right-3 text-gray-400 hover:text-white" aria-label="Use voice input">
                    <MicrophoneIcon className="w-5 h-5" />
                </button>
            </div>
       </div>

      <div className="flex justify-end pt-4">
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <SendIcon className="w-5 h-5" />
          {isLoading ? 'Generating...' : `Generate ${contentType}`}
        </button>
      </div>
    </form>
  );
};

export default ContentGeneratorForm;
