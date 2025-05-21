'use client'
import { useState } from "react";
import UserAuth from "../components/userAuth";
import GreetingCard from "../components/greeting";
import CreateFrame from "../components/create";
// import { useState } from 'react';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <div><><UserAuth /></></div>;
      case 'Profile':
        return <div>👤<><GreetingCard/></></div>;
      case 'Create WireFrame':
        return <div className="w-full flex flex-col justify-center items-center h-full"><CreateFrame /></div>;
      case 'Designs':
        return <div>📊 Designs Section</div>;
      case 'Collabrate':
        return <div>📊 Collabrate Section</div>;
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-16'} bg-gray-800 text-white transition-all duration-300`}>
        <div className="flex items-center justify-between p-4">
          {isSidebarOpen && <h1 className="text-xl font-bold">Dashboard</h1>}
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            ☰
          </button>
        </div>
        <nav className="mt-4">
          {['home', 'Create WireFrame', 'Designs', 'Collabrate', 'Profile'].map((item) => (
            <button
              key={item}
              onClick={() => handleSectionChange(item)}
              className={`w-full text-left px-4 py-2 hover:bg-gray-700 uppercase ${
                activeSection === item ? 'bg-gray-700' : ''
              }`}
            >
              {isSidebarOpen ? item.charAt(0).toUpperCase() + item.slice(1) : item.charAt(0).toUpperCase()}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4 capitalize">{activeSection}</h2>
        <div className="bg-white rounded-lg shadow p-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
