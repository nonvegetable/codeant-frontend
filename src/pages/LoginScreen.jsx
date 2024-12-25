import React from 'react';
import Logo from '../components/login-screen-components/Logo';
import LoginOptions from '../components/login-screen-components/LoginOptions';
import Features from '../components/login-screen-components/Features';

const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-100 flex items-center justify-center">
        <Features />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <Logo />
        <div className="flex space-x-4 mb-8">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">SAAS</button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Self Hosted</button>
        </div>
        <LoginOptions />
        <p className="text-sm text-gray-500 mt-6">
          By signing up you agree to the <a href="#" className="text-blue-500">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default Login;