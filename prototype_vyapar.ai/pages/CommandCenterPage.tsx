import React from 'react';
import Header from '../components/Header';
import SparklesIcon from '../components/icons/SparklesIcon';
import PlusIcon from '../components/icons/PlusIcon';
import MapPinIcon from '../components/icons/MapPinIcon';
import TrendingUpIcon from '../components/icons/TrendingUpIcon';
import UsersIcon from '../components/icons/UsersIcon';

const CommandCenterPage: React.FC = () => {
    return (
        <div className="animate-fade-in">
            <div className="flex justify-between items-start">
                <Header
                    title="AI Business Command Center"
                    subtitle="Your daily hub for sales data, customer insights, and strategic advice."
                />
                 <button className="flex items-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-transform transform hover:scale-105 whitespace-nowrap">
                    <PlusIcon className="w-5 h-5"/> Log a Sale
                </button>
            </div>
            
            {/* AI Daily Briefing */}
            <div className="bg-gradient-to-br from-purple-800/50 to-indigo-800/50 p-6 rounded-lg border border-purple-600 mb-8">
                <div className="flex items-start gap-4">
                    <SparklesIcon className="w-8 h-8 text-purple-300 flex-shrink-0 mt-1"/>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Your AI Daily Briefing</h3>
                        <p className="text-purple-200">
                            "Your 'Handmade Saree' campaign drove <span className="font-bold">₹15,000</span> in sales this week, with most orders from Mumbai. Customers are asking for a blue color option on Instagram. <span className="font-bold">Suggestion:</span> Create a poll today about new color preferences to gauge interest."
                        </p>
                         <button className="mt-4 px-4 py-2 bg-purple-600/80 hover:bg-purple-600 rounded-md text-sm font-semibold">Create a Poll Post</button>
                    </div>
                </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                 <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-600/20 rounded-lg"><TrendingUpIcon className="w-6 h-6 text-green-400"/></div>
                        <div>
                            <p className="text-sm text-gray-400">Total Revenue (Month)</p>
                            <p className="text-2xl font-bold">₹52,450</p>
                        </div>
                    </div>
                </div>
                 <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-600/20 rounded-lg"><UsersIcon className="w-6 h-6 text-blue-400"/></div>
                        <div>
                            <p className="text-sm text-gray-400">Customer Inquiries</p>
                            <p className="text-2xl font-bold">82</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-yellow-600/20 rounded-lg"><MapPinIcon className="w-6 h-6 text-yellow-400"/></div>
                        <div>
                            <p className="text-sm text-gray-400">Top Demand Hotspot</p>
                            <p className="text-2xl font-bold">Pune, MH</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Data Tables and Visuals */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700">
                    <h3 className="font-semibold text-lg mb-4">Post Performance Log</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-400">
                            <thead className="text-xs text-gray-300 uppercase bg-gray-700/50">
                                <tr>
                                    <th scope="col" className="px-4 py-3">Post</th>
                                    <th scope="col" className="px-4 py-3">Platform</th>
                                    <th scope="col" className="px-4 py-3">Revenue</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-3 font-medium text-white whitespace-nowrap">Handmade Saree</td>
                                    <td className="px-4 py-3">Instagram</td>
                                    <td className="px-4 py-3 text-green-400 font-bold">₹15,000</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="px-4 py-3 font-medium text-white whitespace-nowrap">Diwali Lamps</td>
                                    <td className="px-4 py-3">WhatsApp</td>
                                    <td className="px-4 py-3 text-green-400 font-bold">₹9,500</td>
                                </tr>
                                <tr className="">
                                    <td className="px-4 py-3 font-medium text-white whitespace-nowrap">Ceramic Mugs</td>
                                    <td className="px-4 py-3">Instagram</td>
                                    <td className="px-4 py-3 text-green-400 font-bold">₹7,200</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                 <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700">
                    <h3 className="font-semibold text-lg mb-4">Geographic Demand Hotspots</h3>
                    <div className="aspect-video bg-gray-700 rounded-md flex items-center justify-center">
                        <img src="https://storage.googleapis.com/aistudio-marketplace/project-assets/7269f88f-01a7-4b95-a4e9-d10bc931e9c5/private" alt="Map of India with hotspots" className="object-cover w-full h-full rounded-md"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommandCenterPage;
