import React from 'react';
import Header from '../components/Header';
import { Page } from '../types';
import MagicWandIcon from '../components/icons/MagicWandIcon';
import ChartBarIcon from '../components/icons/ChartBarIcon';

interface HomePageProps {
    setCurrentPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <div className="animate-fade-in text-center">
        <Header 
            title="Welcome to Vyapar.ai"
            subtitle="Your AI Co-Pilot for Business Growth. From social posts to real profits."
        />

        <div className="max-w-4xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 text-center">
                    <MagicWandIcon className="w-12 h-12 mx-auto text-purple-400 mb-4" />
                    <h2 className="text-2xl font-bold mb-3">Create Magical Content</h2>
                    <p className="text-gray-400 mb-6">
                        Instantly generate captions, posters, and video ideas tailored for your products and audience.
                    </p>
                    <button 
                        onClick={() => setCurrentPage(Page.CreateContent)}
                        className="px-6 py-3 font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-all"
                    >
                        Start Creating
                    </button>
                </div>

                <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 text-center">
                    <ChartBarIcon className="w-12 h-12 mx-auto text-indigo-400 mb-4" />
                    <h2 className="text-2xl font-bold mb-3">View Your Command Center</h2>
                    <p className="text-gray-400 mb-6">
                        Get daily AI insights, track your sales, and understand your customers like never before.
                    </p>
                    <button 
                        onClick={() => setCurrentPage(Page.CommandCenter)}
                        className="px-6 py-3 font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-all"
                    >
                        Go to Dashboard
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default HomePage;
