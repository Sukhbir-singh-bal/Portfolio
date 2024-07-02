export default function ProjectView({title,Description,techStack,ImgSrc,GitLink,WebLink}){
    return (
        <article className="group flex flex-col space-x-0 space-y-8 md:flex-row md:space-x-8 md:space-y-0">
            <div className="w-full md:w-1/2">
              <div className="relative col-span-6 row-span-5 flex transform flex-col items-center gap-8 overflow-clip rounded-xl shadow-xl transition duration-500 ease-in-out sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50"><img alt={title} className="h-48 w-full object-cover object-top transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" src={ImgSrc} /></div>
            </div>
            <div className="w-full md:w-1/2 md:max-w-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{title}</h3>
              <div className="mt-2 flex flex-wrap">
                <ul className="mb-2 flex flex-row gap-x-2">
                    {techStack &&
                        techStack.map((item,index)=>(
                            <li key={index}>
                                <span className="flex gap-x-2 rounded-full font-bold bg-black px-2 py-1 text-xs text-white">
                                {item}
                                </span>
                            </li>
                        ))
                    }                  
                </ul>
                <div className="mt-2 text-gray-700 dark:text-gray-400">{Description}</div>
                <footer className="mt-4 flex items-end justify-start gap-x-4">
                  {GitLink && <a href={GitLink} role="link" className="text-md group inline-flex max-w-fit items-center justify-center gap-2 space-x-2 rounded-xl border border-gray-600 bg-gray-800 px-3 py-2 text-base text-white transition hover:border-gray-900 hover:bg-gray-800 hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-yellow-500/80 focus-visible:ring-offset-2 active:bg-black">
                    <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                    Code
                  </a>}
                  {WebLink && <a href={WebLink} role="link" className="text-md group inline-flex max-w-fit items-center justify-center gap-2 space-x-2 rounded-xl border border-gray-600 bg-gray-800 px-3 py-2 text-base text-white transition hover:border-gray-900 hover:bg-gray-800 hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-yellow-500/80 focus-visible:ring-offset-2 active:bg-black">
                    <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                    Preview
                  </a>}
                </footer>
              </div>
            </div>
          </article>
    );
}