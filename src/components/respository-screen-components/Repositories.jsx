import React, { useState } from 'react';
import RepositoryItem from './RepositoryItem';

const Repositories = () => {
  const repoData = [
    { name: 'design-system', size: 7320, language: 'React', visibility: 'Public', updated: '1 day ago' },
    { name: 'codeant-ci-app', size: 5871, language: 'JavaScript', visibility: 'Private', updated: '2 days ago' },
    { name: 'analytics-dashboard', size: 4521, language: 'Python', visibility: 'Private', updated: '5 days ago' },
    { name: 'mobile-app', size: 3096, language: 'Swift', visibility: 'Public', updated: '3 days ago' },
    { name: 'e-commerce-platform', size: 6210, language: 'Java', visibility: 'Private', updated: '6 days ago' },
    { name: 'blog-website', size: 1876, language: 'HTML/CSS', visibility: 'Public', updated: '4 days ago' },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  // Filter repositories based on search term
  const filteredRepos = repoData.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 bg-white p-6 relative">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="font-inter text-2xl font-bold">Repositories</h1>
          <p className="text-gray-500 text-sm">{filteredRepos.length} total repositories</p>
        </div>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Repositories"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="bg-gray-50 rounded-lg shadow divide-y divide-gray-200">
        {filteredRepos.map((repo, index) => (
          <RepositoryItem key={index} {...repo} />
        ))}
      </div>

      {/* Floating Buttons */}
      <div className="absolute top-6 right-6 flex space-y-4">
        <button
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 shadow-md"
            onClick={() => window.location.reload()}
        >
            Refresh All
        </button>
        <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 shadow-md"
            onClick={() => alert('Add Repository clicked!')}
        >
            Add Repository
        </button>
        </div>
    </div>
  );
};

export default Repositories;
