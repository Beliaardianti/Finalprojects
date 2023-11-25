import React from 'react';
import Sidebar  from './sidebar';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex flex-col items-center bg-pink-300 w-full">
        {/* Content */}
        
      </div>
    </div>
  );
};

export default Dashboard;