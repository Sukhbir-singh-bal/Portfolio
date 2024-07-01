export default function Footer(){
    const currentYear = new Date().getFullYear()    
    return (
    <footer
        className="opacity-80 p-4 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl  flex justify-center"
      >
        <div
          className="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4"
        >
          <span className="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90"
            >© {currentYear}
            <a href="https://midu.dev/" className="hover:underline">Sukhbir Singh</a>. All rights reserved
          </span>
          <ul
            className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0"
          >
            <li>
              <a href="/#AboutMe" className="hover:underline me-4 md:me-6">About Me</a>
            </li>
            <li>
              <a id="contacto" href="mailto:sukhbirsingh4259@gmail.com" className="hover:underline"
                >Contact me</a
              >
            </li>
          </ul>
        </div>
      </footer>
    );
}

