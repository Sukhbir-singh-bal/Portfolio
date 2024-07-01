import Layout from "./Layouts/layout"
import reactLogo from './assets/react.svg'
function App() {
  return (
    <Layout >
      <main class="px-4">
        <section class="section container mx-auto w-full scroll-m-20 py-16 md:max-w-2xl md:py-36 lg:max-w-4xl">
            <div class="max-w-xl">
              <div class="mb-4 flex gap-4">
                <img class="size-16 rounded-full shadow-lg" src="/midudev.webp" alt="Miguel Ángel" />
                <a href="https://linkedin.com/in/" target="_blank" rel="noopener" class="flex items-center transition md:justify-center md:hover:scale-105">
                  <div class="flex items-center">
                    <span class="relative inline-flex overflow-hidden rounded-full p-[1px]">
                      <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
                      <div class="inline-flex w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 backdrop-blur-3xl dark:bg-gray-800 dark:text-white/80">Available to work</div>
                    </span>
                  </div>
                </a>
              </div>
              <h1 class="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">Hey, I am midudev</h1>
              <p class="dark:[&amp;>strong]:text-yellow-200 [&amp;>strong]:text-blue-500 [&amp;>strong]:font-semibold mt-6 text-xl text-gray-800 dark:text-gray-300">+15 años de Experience. <strong>Ingeniero de Software y Creador de Contenido sobre Programación</strong> de Barcelona, España 🇪🇸. Especializado en el desarrollo de aplicaciones web únicas.</p>
              <nav class="mt-8 flex flex-wrap gap-4">
                <a href="mailto:miduga@gmail.com" target="_blank" rel="noopener noreferrer" role="link" class="text-md group inline-flex max-w-fit items-center justify-center gap-2 rounded-full border border-gray-300 bg-gray-100 px-4 py-1 text-gray-800 transition hover:border-gray-700 hover:bg-gray-900 hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-yellow-500/80 focus-visible:ring-offset-2 active:bg-black dark:border-gray-600 dark:bg-gray-800 dark:text-white">
                  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path>
                    <path d="M3 6l9 6l9 -6"></path>
                    <path d="M15 18h6"></path>
                    <path d="M18 15l3 3l-3 3"></path>
                  </svg>
                  Contáctame
                </a>
                <a href="https://linkedin.com/in/midudev" target="_blank" rel="noopener noreferrer" role="link" class="text-md group inline-flex max-w-fit items-center justify-center gap-2 rounded-full border border-gray-300 bg-gray-100 px-4 py-1 text-gray-800 transition hover:border-gray-700 hover:bg-gray-900 hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-yellow-500/80 focus-visible:ring-offset-2 active:bg-black dark:border-gray-600 dark:bg-gray-800 dark:text-white">
                  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M8 11l0 5"></path>
                    <path d="M8 8l0 .01"></path>
                    <path d="M12 16l0 -5"></path>
                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                  </svg>
                  LinkedIn
                </a>
              </nav>
            </div>
          </section>
      <section id="Experience" data-section="Experience" class="section undefined container mx-auto w-full scroll-m-20 md:max-w-2xl lg:max-w-4xl">
        <h2 class="mb-6 flex items-center gap-x-3 text-3xl font-semibold text-black/80 dark:text-white">
          <svg class="size-8" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
            <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
            <path d="M12 12l0 .01"></path>
            <path d="M3 13a20 20 0 0 0 18 0"></path>
          </svg>
          Work experience
        </h2>
        <ol class="relative mt-16">
          <li class="">
            <div class="md:space-x-4] relative mx-12 grid pb-12 before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 before:content-[''] md:grid-cols-5 md:gap-10 dark:before:border-white/15">
              <div class="relative pb-12 md:col-span-2">
                <div class="sticky top-0">
                  <span class="absolute -left-[42px] rounded-full text-5xl text-blue-400">•</span>
                  <h3 class="text-xl font-bold text-blue-400">Creador de Contenido</h3>
                  <h4 class="text-xl font-semibold text-gray-600 dark:text-white">Twitch</h4>
                  <time class="m-0 p-0 text-sm text-gray-600/80 dark:text-white/80">Actualmente...</time>
                </div>
              </div>
              <div class="relative flex flex-col gap-2 pb-4 text-gray-600 md:col-span-3 dark:text-gray-300">
                Divulgo sobre programación y desarrollo web en diferentes plataformas. Galardonado como mejor creador de contenido de habla no-inglesa en 2022 y mejor comunidad en 2023 por GitHub.
                <a href="https://twitch.tv/midudev" role="link" class="inline-flex items-center text-lg font-medium text-blue-500 hover:text-yellow-700 dark:text-yellow-200 dark:hover:text-yellow-300">
                  Saber más
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right w-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 6l6 6l-6 6"></path>
                  </svg>
                </a>
              </div>
            </div>
          </li>
          <li class="">
            <div class="md:space-x-4] relative mx-12 grid pb-12 before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 before:content-[''] md:grid-cols-5 md:gap-10 dark:before:border-white/15">
              <div class="relative pb-12 md:col-span-2">
                <div class="sticky top-0">
                  <span class="absolute -left-[42px] rounded-full text-5xl text-blue-400">•</span>
                  <h3 class="text-xl font-bold text-blue-400">Principal Frontend Engineer</h3>
                  <h4 class="text-xl font-semibold text-gray-600 dark:text-white">Adevinta Spain</h4>
                  <time class="m-0 p-0 text-sm text-gray-600/80 dark:text-white/80">Septiembre 2022</time>
                </div>
              </div>
              <div class="relative flex flex-col gap-2 pb-4 text-gray-600 md:col-span-3 dark:text-gray-300">Responsable de la plataforma, componentes y utilidades para la creación y desarrollo de aplicaciones web. Mejora de un 30% en la entrega de software. Implantación de medidas de integración continua y despliegue con A/B testing en más de 15 equipos.</div>
            </div>
          </li>
        </ol>
      </section>
      <section id="Projects" data-section="Projects" class="section undefined container mx-auto w-full scroll-m-20 md:max-w-2xl lg:max-w-4xl">
        <h2 class="mb-6 flex items-center gap-x-3 text-3xl font-semibold text-black/80 dark:text-white">
          <svg class="size-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 8l-4 4l4 4"></path>
            <path d="M17 8l4 4l-4 4"></path>
            <path d="M14 4l-4 16"></path>
          </svg>
          Projects
        </h2>
        <div class="flex flex-col gap-y-16">
          <article class="group flex flex-col space-x-0 space-y-8 md:flex-row md:space-x-8 md:space-y-0">
            <div class="w-full md:w-1/2">
              <div class="relative col-span-6 row-span-5 flex transform flex-col items-center gap-8 overflow-clip rounded-xl shadow-xl transition duration-500 ease-in-out sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50"><img alt="Recién llegado vs 5 años en Nueva Zelanda" class="h-56 w-full object-cover object-top transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy" src="/projects/svgl.webp" /></div>
            </div>
            <div class="w-full md:w-1/2 md:max-w-lg">
              <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100">SVGL - A beautiful library with SVG logos</h3>
              <div class="mt-2 flex flex-wrap">
                <ul class="mb-2 flex flex-row gap-x-2">
                  <li>
                    <span class="flex gap-x-2 rounded-full bg-black px-2 py-1 text-xs text-white">
                      <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="256" height="256" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                        <defs>
                          <linearGradient id="c" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%">
                            <stop offset="0%" stop-color="#FFF"></stop>
                            <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop>
                          </linearGradient>
                          <linearGradient id="d" x1="50%" x2="49.953%" y1="0%" y2="73.438%">
                            <stop offset="0%" stop-color="#FFF"></stop>
                            <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop>
                          </linearGradient>
                          <circle id="a" cx="128" cy="128" r="128"></circle>
                        </defs>
                        <mask id="b" fill="#fff"><use xlink:href="#a"></use></mask>
                        <g mask="url(#b)">
                          <circle cx="128" cy="128" r="128"></circle>
                          <path fill="url(#c)" d="M212.634 224.028 98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z"></path>
                          <path fill="url(#d)" d="M163.556 76.8h17.067v102.4h-17.067z"></path>
                        </g>
                      </svg>
                      Next.js
                    </span>
                  </li>
                  <li>
                    <span class="flex gap-x-2 rounded-full bg-[#003159] px-2 py-1 text-xs text-white">
                      <svg class="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33">
                        <g clip-path="url(#a)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"></path></g>
                        <defs>
                          <clipPath id="a"><path fill="#fff" d="M0 0h54v32.4H0z"></path></clipPath>
                        </defs>
                      </svg>
                      Tailwind CSS
                    </span>
                  </li>
                </ul>
                <div class="mt-2 text-gray-700 dark:text-gray-400">Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.</div>
                <footer class="mt-4 flex items-end justify-start gap-x-4">
                  <a href="https://github.com/pheralb/svgl" role="link" class="text-md group inline-flex max-w-fit items-center justify-center gap-2 space-x-2 rounded-xl border border-gray-600 bg-gray-800 px-3 py-2 text-base text-white transition hover:border-gray-900 hover:bg-gray-800 hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-yellow-500/80 focus-visible:ring-offset-2 active:bg-black">
                    <svg class="size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                    Code
                  </a>
                  <a href="https://svgl.vercel.app/" role="link" class="text-md group inline-flex max-w-fit items-center justify-center gap-2 space-x-2 rounded-xl border border-gray-600 bg-gray-800 px-3 py-2 text-base text-white transition hover:border-gray-900 hover:bg-gray-800 hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-yellow-500/80 focus-visible:ring-offset-2 active:bg-black">
                    <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                    Preview
                  </a>
                </footer>
              </div>
            </div>
          </article>
          <article class="group flex flex-col space-x-0 space-y-8 md:flex-row md:space-x-8 md:space-y-0">
            <div class="w-full md:w-1/2">
              <div class="relative col-span-6 row-span-5 flex transform flex-col items-center gap-8 overflow-clip rounded-xl shadow-xl transition duration-500 ease-in-out sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50"><img alt="Recién llegado vs 5 años en Nueva Zelanda" class="h-56 w-full object-cover object-top transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy" src="/projects/adventjs.webp" /></div>
            </div>
            <div class="w-full md:w-1/2 md:max-w-lg">
              <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100">AdventJS - Retos de programación con JavaScript y TypeScript</h3>
              <div class="mt-2 flex flex-wrap">
                <ul class="mb-2 flex flex-row gap-x-2">
                  <li>
                    <span class="flex gap-x-2 rounded-full bg-black px-2 py-1 text-xs text-white">
                      <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="256" height="256" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                        <defs>
                          <linearGradient id="c" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%">
                            <stop offset="0%" stop-color="#FFF"></stop>
                            <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop>
                          </linearGradient>
                          <linearGradient id="d" x1="50%" x2="49.953%" y1="0%" y2="73.438%">
                            <stop offset="0%" stop-color="#FFF"></stop>
                            <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop>
                          </linearGradient>
                          <circle id="a" cx="128" cy="128" r="128"></circle>
                        </defs>
                        <mask id="b" fill="#fff"><use xlink:href="#a"></use></mask>
                        <g mask="url(#b)">
                          <circle cx="128" cy="128" r="128"></circle>
                          <path fill="url(#c)" d="M212.634 224.028 98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z"></path>
                          <path fill="url(#d)" d="M163.556 76.8h17.067v102.4h-17.067z"></path>
                        </g>
                      </svg>
                      Next.js
                    </span>
                  </li>
                  <li>
                    <span class="flex gap-x-2 rounded-full bg-[#003159] px-2 py-1 text-xs text-white">
                      <svg class="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33">
                        <g clip-path="url(#a)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"></path></g>
                        <defs>
                          <clipPath id="a"><path fill="#fff" d="M0 0h54v32.4H0z"></path></clipPath>
                        </defs>
                      </svg>
                      Tailwind CSS
                    </span>
                  </li>
                </ul>
                <div class="mt-2 text-gray-700 dark:text-gray-400">Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.</div>
                <footer class="mt-4 flex items-end justify-start gap-x-4">
                  <a href="https://adventjs.dev" role="link" class="text-md group inline-flex max-w-fit items-center justify-center gap-2 space-x-2 rounded-xl border border-gray-600 bg-gray-800 px-3 py-2 text-base text-white transition hover:border-gray-900 hover:bg-gray-800 hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-yellow-500/80 focus-visible:ring-offset-2 active:bg-black">
                    <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                    Preview
                  </a>
                </footer>
              </div>
            </div>
          </article>
        </div>
      </section>
        <section id="AboutME" data-section="AboutME" class="section undefined container mx-auto w-full scroll-m-20 md:max-w-2xl lg:max-w-4xl">
          <h2 class="mb-6 flex items-center gap-x-8 text-3xl font-semibold text-black/80 dark:text-white">
            <svg class="size-8" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
              <path d="M15 19l2 2l4 -4"></path>
            </svg>
            Sobre mí
          </h2>
          <article class="flex flex-col items-center justify-center gap-8 text-gray-700 md:flex-row dark:text-gray-300">
            <div class="[&amp;>p]:mb-4 [&amp;>p>strong]:text-blue-500 dark:[&amp;>p>strong]:text-yellow-100 [&amp;>p>strong]:font-normal [&amp;>p>strong]:font-mono order-2 text-pretty md:order-1">
              <p>Me llamo Miguel Ángel pero mis amigos me llaman midu. Empecé en la programación con un Amstrad, tenía 10 años. Actualmente estoy <strong>liderando equipos de desarrollo en multinacionales</strong>.</p>
              <p>Algunos de mis éxitos incluyen <strong>colaborar con Mozilla para el desarrollo de las primeras apps en su sistema FirefoxOS</strong>. Aunque hoy está desaparecido fue un gran avance en el mundo del desarrollo web.</p>
              <p>
                Como creador de contenido, <strong>cuento con el canal de habla hispana más visto del mundo en la categoría de <em class="italic">Software &amp; Game Development</em> en Twitch</strong>. Mi objetivo es mejorar la empleabilidad de la comunidad hispana y el acceso a contenido de calidad.
              </p>
            </div>
            <img width="200" height="200" src={reactLogo} alt="Miguel Ángel" class="order-1 aspect-square h-full w-64 rotate-3 rounded-2xl bg-black/20 object-cover p-1 ring-1 ring-black/70 md:order-2 lg:w-64 lg:p-2 dark:bg-yellow-500/5 dark:ring-white/20"/>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default App
