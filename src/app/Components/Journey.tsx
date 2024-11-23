"use client"
import Typewriter from 'typewriter-effect';
export default function Journey() {
    return (
      <section id="journey" className="py-12 bg-gray-900 text-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold"><Typewriter
          options={{
            strings: ['My Journey'],
            autoStart: true,
            loop: true,
          }}
        /></h2>
          <p className="mt-4 text-lg text-gray-400">A look into my career path and growth as a developer.</p>
          <div className="mt-8 flex flex-col items-center space-y-8 sm:space-y-0 sm:flex-row sm:justify-evenly">
            <div className="space-y-4 mx-2">
              <div className="bg-yellow-500 py-6 px-3 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">Starting of 2023 - The Beginning</h3>
                <p className="text-gray-800">Started learning HTML, CSS, and Bootstrap through online tutorials.</p>
              </div>
              <div className="bg-blue-500 py-6 px-3 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">Mid 2023 - First Project</h3>
                <p className="text-gray-800">Built my first portfolio website using basic HTML & CSS.</p>
              </div>
            </div>
            <div className="space-y-4 mx-2">
              <div className="bg-green-500 py-6 px-3 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">Starting of 2024 - javascript and Beyond</h3>
                <p className="text-gray-800">Mastered javascript and began journey of programming</p>
              </div>
              <div className="bg-purple-500 py-6 px-3 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">Mid 2024 - Full-Stack Development</h3>
                <p className="text-gray-800">Started exploring full-stack development with Node.js and MongoDB.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  