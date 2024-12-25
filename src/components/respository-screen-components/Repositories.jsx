import React, { useState } from 'react';
import RepositoryItem from './RepositoryItem';
import { FiRefreshCw, FiSearch } from 'react-icons/fi';
import { BsPlusCircle } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';

const Repositories = ({ toggleSidebar }) => {
  const repoData = [
    { name: 'design-system', size: 7320, language: 'React', visibility: 'Public', updated: '1 day ago' },
    { name: 'codeant-ci-app', size: 5871, language: 'JavaScript', visibility: 'Private', updated: '2 days ago' },
    { name: 'analytics-dashboard', size: 4521, language: 'Python', visibility: 'Private', updated: '5 days ago' },
    { name: 'mobile-app', size: 3096, language: 'Swift', visibility: 'Public', updated: '3 days ago' },
    { name: 'e-commerce-platform', size: 6210, language: 'Java', visibility: 'Private', updated: '6 days ago' },
    { name: 'blog-website', size: 1876, language: 'HTML/CSS', visibility: 'Public', updated: '4 days ago' },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredRepos = repoData.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 bg-white p-4 relative">
        <div className="flex-1 bg-white p-4 relative md:hidden">
        {/* Top Section: Logo and Hamburger (visible only on small screens) */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <img src="/assets/logo.svg" alt="CodeAnt AI Logo" className="h-8 w-8" />
            <h1 className="text-xl font-bold">CodeAnt AI</h1>
          </div>
          <button
            className="text-gray-700 text-2xl"
            onClick={toggleSidebar}
          >
            <AiOutlineMenu />
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <div>
          <h2 className="font-inter text-2xl font-bold">Repositories</h2>
          <p className="text-gray-500 text-sm">{filteredRepos.length} total repositories</p>
        </div>
        <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
          <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 shadow-md flex items-center">
            <FiRefreshCw className="mr-2" /> Refresh All
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 shadow-md flex items-center">
            <BsPlusCircle className="mr-2" /> Add Repository
          </button>
        </div>
      </div>
      <div className="relative mb-4">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search Repositories"
          className="w-full px-10 py-2 border border-gray-300 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="bg-gray-50 rounded-lg shadow divide-y divide-gray-200">
        {filteredRepos.map((repo, index) => (
          <RepositoryItem key={index} {...repo} />
        ))}
      </div>
    </div>
  );
};

export default Repositories;
