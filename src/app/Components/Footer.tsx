import Link from "next/link";

export default function Footer(){
    return(
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <Link className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href={""}>
            <img src="data:image/jpeg;base64,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" alt="" width={50} height={100} className="rounded-full"/>
      <span className="ml-3 text-xl">Sameed</span>
    </Link>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Sameed porfolio — latest |
      <Link href="https://github.com/SameedSiddiqui15" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">Visit Github </Link>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link className="text-gray-500" href={"https://www.facebook.com/taha.siddiqui.334839/"}>
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </Link>
      <Link className="ml-3 text-gray-500" href={"/"}>
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </Link>
      <Link className="ml-3 text-gray-500" href={"https://www.instagram.com/maybe_sameed/?igsh=MWRrcWRpZ3Fwbm15bQ%3D%3D"}>
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </Link>
      <Link className="ml-3 text-gray-500" href={"https://www.linkedin.com/in/sameed-siddiqui-/"}>
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </Link>
    </span>
  </div>
</footer>
    )
}