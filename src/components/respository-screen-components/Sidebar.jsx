import React from 'react';
import { FaBook, FaCloud, FaInfoCircle, FaCog, FaLifeRing } from 'react-icons/fa';
import { AiOutlineHome, AiOutlineLogout } from 'react-icons/ai';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white shadow-md transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 md:relative md:translate-x-0 md:w-64`}
    >
      <div className="p-4">
        <div className="flex items-center mb-6">
          <img src="/assets/logo.svg" alt="CodeAnt AI Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-xl font-bold">CodeAnt AI</h1>
        </div>
        <nav>
          <ul>
            <li className="mb-4 flex items-center">
              <AiOutlineHome className="mr-2" />
              <a href="#" className="text-blue-500 font-medium">Repositories</a>
            </li>
            <li className="mb-4 flex items-center">
              <FaBook className="mr-2" />
              <a href="#" className="text-gray-700">AI Code Review</a>
            </li>
            <li className="mb-4 flex items-center">
              <FaCloud className="mr-2" />
              <a href="#" className="text-gray-700">Cloud Security</a>
            </li>
            <li className="mb-4 flex items-center">
              <FaInfoCircle className="mr-2" />
              <a href="#" className="text-gray-700">How to Use</a>
            </li>
            <li className="flex items-center">
              <FaCog className="mr-2" />
              <a href="#" className="text-gray-700">Settings</a>
            </li>
          </ul>
        </nav>
        <div className="mt-6">
          <a href="#" className="flex items-center mb-4 text-gray-700">
            <FaLifeRing className="h-5 w-5 mr-2" />
            Support
          </a>
          <a href="#" className="flex items-center text-gray-700">
            <AiOutlineLogout className="h-5 w-5 mr-2" />
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
