import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 h-screen flex flex-col justify-between p-4">
      <div>
        {/* Logo and Heading */}
        <div className="flex items-center mb-6">
          <img src="/assets/logo.svg" alt="CodeAnt AI Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-xl font-bold">CodeAnt AI</h1>
        </div>

        {/* User Selection */}
        <div className="mb-6">
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700"
            defaultValue="UtkarshDhairyaPathak"
          >
            <option value="UtkarshDhairyaPathak">UtkarshDhairyaPathak</option>
            <option value="JohnDoe">John Doe</option>
            <option value="JaneSmith">Jane Smith</option>
          </select>
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul>
            <li className="mb-4">
              <a href="#" className="text-blue-500 font-medium">
                Repositories
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-gray-700">
                AI Code Review
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-gray-700">
                Cloud Security
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-gray-700">
                How to Use
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Footer Links */}
      <div>
        <a href="#" className="flex items-center mb-4 text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16l-4-4m0 0l4-4m-4 4h16"
            />
          </svg>
          Support
        </a>
        <a href="#" className="flex items-center text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7"
            />
          </svg>
          Logout
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
