"use client"
import Typewriter from 'typewriter-effect';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaWordpress} from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
export default function Testimonial(){
    return(
      <>
      <section className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-3 sm:px-6 lg:px-8 lg:py-6">
    <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
    <Typewriter
          options={{
            strings: ['About Me','&','My Skills'],
            autoStart: true,
            loop: true,
          }}
        />
    </h2>
    <blockquote className="text-center rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center justify-center gap-4">
          <img
            alt="Your Picture"
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            className="h-14 w-14 rounded-full object-cover"
          />
          <div>
            <p className="text-lg font-medium text-gray-900">About Me</p>
          </div>
        </div>
        <p className="mt-4 text-gray-700">
          I am a passionate web developer with expertise in HTML, CSS, and Bootstrap. I enjoy crafting responsive, user-friendly designs and am dedicated to writing clean and maintainable code.
        </p>
      </blockquote>

    <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">     
      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <FaHtml5 className="text-orange-500 h-14 w-14 object-cover" />
          <div>
            <p className="text-lg font-medium text-gray-900">HTML 5</p>
          </div>
        </div>
        <p className="mt-4 text-gray-700">
          I have a strong foundation in HTML, enabling me to structure web pages effectively and create accessible, SEO-friendly content.
        </p>
      </blockquote>

      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <FaCss3Alt className="text-blue-400 h-14 w-14 object-cover" />
          <div>
            <p className="text-lg font-medium text-gray-900">CSS 3</p>
          </div>
        </div>
        <p className="mt-4 text-gray-700">
        I have a strong foundation in CSS, enabling me to structure web pages effectively and create accessible, SEO-friendly content. I specialize in designing visually appealing and responsive layouts.
        </p>
      </blockquote>
      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <FaBootstrap className="text-purple-700 h-14 w-14 object-cover" />
          <div>
            <p className="text-lg font-medium text-gray-900">Bootstrap 5</p>
          </div>
        </div>
        <p className="mt-4 text-gray-700">
        With Bootstrap, I build responsive and mobile-first web pages with ease, utilizing pre-designed components that speed up development while maintaining a high level of customization.
        </p>
      </blockquote>
      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <FaJs className="text-yellow-400 h-14 w-14 object-cover" />
          <div>
            <p className="text-lg font-medium text-gray-900">JavaScript</p>
          </div>
        </div>
        <p className="mt-4 text-gray-700">
        I am proficient in JavaScript, capable of writing interactive and dynamic web applications. My skills include DOM manipulation, event handling, and using libraries like jQuery.
        </p>
      </blockquote>
      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <FaWordpress className="text-black-900 h-14 w-14 object-cover" />
          <div>
            <p className="text-lg font-medium text-gray-900">WordPress</p>
          </div>
        </div>
        <p className="mt-4 text-gray-700">
        With WordPress, I create custom themes and plugins, offering clients tailored solutions. I am comfortable managing content and maintaining sites, ensuring optimal performance.
        </p>
      </blockquote>
      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <SiTypescript className="text-blue-500 h-14 w-14 object-cover" />
          <div>
            <p className="text-lg font-medium text-gray-900">TypeScript</p>
          </div>
        </div>
        <p className="mt-4 text-gray-700">
        TypeScript allows me to write more maintainable and error-free code. I use it extensively to enhance JavaScript's capabilities, especially for large-scale applications.
        </p>
      </blockquote>
    </div>
  </div>
</section>

      </>
    )
}