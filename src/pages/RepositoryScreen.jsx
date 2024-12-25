import React from 'react';
import Sidebar from '../components/respository-screen-components/Sidebar';
import Repositories from '../components/respository-screen-components/Repositories';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Repositories />
    </div>
  );
};

export default Dashboard;
