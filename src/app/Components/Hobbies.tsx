"use client"
import Typewriter from 'typewriter-effect';
export default function Hobbies() {
  return (
    <section id="hobbies" className="py-16 bg-gray-200">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800"><Typewriter
          options={{
            strings: ['Hobbies','&','Interests'],
            autoStart: true,
            loop: true,
          }}
        /></h2>
        <p className="mt-4 text-lg text-gray-600">Things I enjoy outside of coding</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://i.pinimg.com/736x/1f/5c/71/1f5c71e3ea4c42e44c8a855ef6fc2a60.jpg"
              alt="Music"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Music</h3>
            <p className="mt-2 text-gray-600">Listening music is my favourite. I enjoy exploring different instruments.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://historypak.com/wp-content/uploads/2014/03/Narran-Valley.jpg"
              alt="Traveling"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Traveling</h3>
            <p className="mt-2 text-gray-600">Exploring new places and cultures is a huge part of who I am.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://staticg.sportskeeda.com/editor/2020/12/13278-16093089221854-800.jpg"
              alt="Gaming"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Gaming</h3>
            <p className="mt-2 text-gray-600">Gaming helps me unwind and experience stories in a fun way.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
