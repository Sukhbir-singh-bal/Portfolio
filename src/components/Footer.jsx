export default function Footer(){
    const currentYear = new Date().getFullYear()    
    return (
    <footer
        class="opacity-80 p-4 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl  flex justify-center"
      >
        <div
          class="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4"
        >
          <span class="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90"
            >© {currentYear}
            <a href="https://midu.dev/" class="hover:underline">midudev</a>. Casi
            todos los derechos reservados
          </span>
          <ul
            class="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0"
          >
            <li>
              <a href="/#sobre-mi" class="hover:underline me-4 md:me-6">Sobre mí</a>
            </li>
            <li>
              <a id="contacto" href="mailto:miduga@gmail.com" class="hover:underline"
                >Contacto</a
              >
            </li>
          </ul>
        </div>
      </footer>
    );
}

