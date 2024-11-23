"use client"
import Typewriter from 'typewriter-effect';
export default function Project(){
    return(
      <>
<section id="projects" className="py-16">
  <div className="max-w-screen-lg mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-800"><Typewriter
          options={{
            strings: ['My Projects'],
            autoStart: true,
            loop: true,
          }}
        /></h2>
    <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="https://avada.com/wp-content/uploads/2021/09/Avada-Yoga-Benefits.jpg" alt="Project 1" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800">1: Yoga website</h3>
          <p className="mt-2 text-gray-600">This is my personal dummy Yoga website which is my materpiece in HTML & CSS</p>
          <a href="https://github.com/SameedSiddiqui15/yoga-web-by-Sameed" className="mt-4 text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Visit Github </a> 
          | 
          <a href="https://yoga-web-by-sameed.vercel.app" className="mt-4 text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer"> View on Browser</a>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="https://raw.githubusercontent.com/codedex-io/projects/main/projects/create-a-to-do-list-app-with-html-css-js/finished-todo-list.gif" alt="Project 2" className="w-full h-64 object-contain" />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800">2: To-Do List App</h3>
          <p className="mt-2 text-gray-600">A simple to-do list app built using HTML, CSS, and React. I made this only for my practice for React JS</p>
          <a href="https://github.com/SameedSiddiqui15/todolist" className="mt-4 text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Visit GitHub </a>
          |
          <a href="https://todolist-nine-pearl.vercel.app" className="mt-4 text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer"> View on Browser</a>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="https://img.freepik.com/free-vector/hackathon-doodle-hand-drawing-team-programmers-web-developers-managers-graphic-designers-deve_88138-1348.jpg?t=st=1732268774~exp=1732272374~hmac=15d0a291b4ce1e38686edd036c8cbbc30b47c0881f4ecba77cc138e30447e6b1&w=740" alt="Project 3" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800">3: Resume Builder</h3>
          <p className="mt-2 text-gray-600">A simple Resume Builder built using HTML CSS & Typescript.I made this for Hackathon assignmet of GIAIC</p>
          <a href="https://github.com/SameedSiddiqui15/Hackathon" className="mt-4 text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Visit GitHub </a>
          |
          <a href="https://milestone5-task2-by-sameed.vercel.app" className="mt-4 text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer"> View on Browser</a>
        </div>
      </div>
    </div>
  </div>
</section>
      </>
    )
}
