"use client"
import Typewriter from 'typewriter-effect';
import Link from "next/link";


export default function Hero() {
    return (
      <section
      className="relative bg-[url(https://thumbs.dreamstime.com/b/man-fist-air-sunset-sunrise-mountain-background-stand-strong-feeling-motivated-freedom-strength-courage-174830179.jpg)] bg-cover bg-center bg-no-repeat"
    >
      <div
        className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
      ></div>
    
      <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl text-green-500 font-extrabold sm:text-5xl">
          <Typewriter
          options={{
            strings: ['Hello World'],
            autoStart: true,
            loop: true,
          }}
        />    
            <strong className="block font-extrabold text-green-500"> My Name is Sameed </strong>
          </h1>
    
          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-green-800">
          As a passionate web developer, I specialize in creating responsive, user-friendly websites and applications. With a strong foundation in front-end and back-end technologies like HTML, CSS, JavaScript, tailwind Css, and Next js.
          </p>
    
          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              href="/AboutUs"
              className="block w-full rounded bg-green-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-600 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
            >
              About Me
            </Link>
    
            <Link
              href="/ContactUs"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-green-600 shadow hover:text-green-700 focus:outline-none focus:ring active:text-green-500 sm:w-auto"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>      
    );
  }
  