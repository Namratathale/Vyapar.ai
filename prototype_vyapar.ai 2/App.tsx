// FIX: Add full content for App.tsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import { Page } from './types';
import HomePage from './pages/HomePage';
import CreateContentPage from './pages/CreateContentPage';
import CommandCenterPage from './pages/CommandCenterPage';
import OnboardingPage from './pages/OnboardingPage';
import HelpPage from './pages/HelpPage';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

    const renderPage = () => {
        switch (currentPage) {
            case Page.Home:
                return <HomePage setCurrentPage={setCurrentPage} />;
            case Page.CreateContent:
                return <CreateContentPage />;
            case Page.CommandCenter:
                return <CommandCenterPage />;
            case Page.Onboarding:
                return <OnboardingPage />;
            case Page.Help:
                return <HelpPage />;
            default:
                return <HomePage setCurrentPage={setCurrentPage} />;
        }
    };
    
    return (
        <div className="bg-gray-900 text-white min-h-screen flex font-sans">
            <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <main className="flex-1 p-6 md:p-10 overflow-y-auto">
                {renderPage()}
            </main>
        </div>
    );
};

export default App;
