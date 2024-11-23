"use client"
import Typewriter from 'typewriter-effect';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

export default function Skills() {
  return (
  <>
    <div className="bg-gray-800 text-white pb-10 mt-0.9">
    <h1 className="flex justify-center align-center text-4xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 py-6 rounded-lg">
    My Skils
  </h1>
      <div className="flex justify-center gap-6 flex-wrap">
      <h1 className="text-3xl font-bold text-center my-auto">
        <Typewriter
          options={{
            strings: ['Web Designing','Web development','Programing'],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
        <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 transition">
          <FaHtml5 className="text-6xl text-orange-500 mb-2" />
          <p className="text-lg font-semibold">HTML 5</p>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 transition">
          <FaCss3Alt className="text-6xl text-blue-400 mb-2" />
          <p className="text-lg font-semibold">CSS 3</p>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 transition">
          <FaBootstrap className="text-6xl text-purple-700 mb-2" />
          <p className="text-lg font-semibold">Bootstrap 5</p>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 transition">
          <FaJs className="text-6xl text-yellow-400 mb-2" />
          <p className="text-lg font-semibold">JavaScript</p>
        </div>
        <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 transition">
          <SiTypescript className="text-6xl text-blue-500 mb-2" />
          <p className="text-lg font-semibold">TypeScript</p>
        </div>
      </div>
    </div>
    </>
  );
};


