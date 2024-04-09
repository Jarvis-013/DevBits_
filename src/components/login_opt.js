import React from 'react';
import { Link } from 'react-router-dom';
import Navhome2 from './navhome';
const ChooseLoginMethod = () => {
  return (
    <>
    <Navhome2/>
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-8 text-white">Choose Your Login Method</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link to="/sign_up" className="bg-blue-500 text-white py-6 px-8 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:scale-105 hover:bg-blue-600">
          <h3 className="text-xl font-semibold mb-2">Student Login</h3>
          <p>Login as a Student to access your account.</p>
        </Link>
        <Link to="/login_tech" className="bg-green-500 text-white py-6 px-8 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:scale-105 hover:bg-green-600">
          <h3 className="text-xl font-semibold mb-2">Teacher Login</h3>
          <p>Login as a Teacher to access your account.</p>
        </Link>
      </div>
    </div>
    </>
  );
};

export default ChooseLoginMethod;
