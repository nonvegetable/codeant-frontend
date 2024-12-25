import React from 'react';

const Features = () => {
  return (
    <div className="bg-gray-50 p-6 rounded shadow">
      <h2 className="text-lg font-bold mb-4">AI to Detect & Autofix Bad Code</h2>
      <ul className="space-y-2">
        <li className="text-sm">30+ Language Support</li>
        <li className="text-sm">10K+ Developers</li>
        <li className="text-sm">100K+ Hours Saved</li>
      </ul>
      <div className="mt-4 text-center">
        <p className="text-xs">Issues Fixed</p>
        <h3 className="text-2xl font-bold">500K+</h3>
        <p className="text-green-500 text-xs mt-1">↑ 14% This week</p>
      </div>
    </div>
  );
};

export default Features;