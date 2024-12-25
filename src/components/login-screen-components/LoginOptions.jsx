import React from 'react';

const LoginOptions = () => {
  return (
    <div className="space-y-4">
      <button className="bg-gray-200 w-full py-2 rounded flex items-center justify-center hover:bg-gray-300">
        <img src="/assets/github-logo.svg" alt="GitHub" className="w-5 h-5 mr-2" /> Sign in with GitHub
      </button>
      <button className="bg-gray-200 w-full py-2 rounded flex items-center justify-center hover:bg-gray-300">
        <img src="/assets/bitbucket-logo.svg" alt="Bitbucket" className="w-5 h-5 mr-2" /> Sign in with Bitbucket
      </button>
      <button className="bg-gray-200 w-full py-2 rounded flex items-center justify-center hover:bg-gray-300">
        <img src="/assets/azure-devops-logo.svg" alt="Azure DevOps" className="w-5 h-5 mr-2" /> Sign in with Azure DevOps
      </button>
      <button className="bg-gray-200 w-full py-2 rounded flex items-center justify-center hover:bg-gray-300">
        <img src="/assets/gitlab-logo.svg" alt="GitLab" className="w-5 h-5 mr-2" /> Sign in with GitLab
      </button>
    </div>
  );
};

export default LoginOptions;