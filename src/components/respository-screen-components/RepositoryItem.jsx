import React from 'react';

const RepositoryItem = ({ name, size, language, visibility, updated }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div>
        <h2 className="font-medium text-lg">{name}</h2>
        <p className="text-sm text-gray-500">
          {language} • {size} KB • {visibility} • Updated {updated}
        </p>
      </div>
    </div>
  );
};

export default RepositoryItem;