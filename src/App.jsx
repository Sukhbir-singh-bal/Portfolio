import Layout from "./Layouts/layout"
import reactLogo from './assets/react.svg'
import ProfileImage from "./assets/images/profile-pic.png"
import YtDownloader from "./assets/images/YtDownloader.png"
import NavPill from "./components/NavPill"
import ProjectView from "./components/ProjectView"
import LinkedInIco from "./assets/icons/linkedin.svg"
import GithubIco from "./assets/icons/github.svg"
import EmailIco from "./assets/icons/email.svg"
function App() {
  return (
    <Layout>
      <main className="px-4">
        <section className="section container mx-auto w-full scroll-m-20 py-16 md:max-w-2xl md:py-36 lg:max-w-4xl flex-col-reverse flex md:flex-row  align-middle justify-between">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">Hey, I'm Sukhbir Singh</h1>
              <p className="dark:[&amp;>strong]:text-yellow-200 [&amp;>strong]:text-blue-500 [&amp;>strong]:font-semibold mt-6 text-xl text-gray-800 dark:text-gray-300">
              With over 2 years of experience, I'm a seasoned web developer proficient in<strong className="text-purple-400">PHP</strong>, <strong className="text-red-400">Laravel</strong>, <strong className="text-blue-300">React</strong>, and <strong className="text-yellow-400">JavaScript</strong>. From revamping websites to integrating third-party tools, I specialize in enhancing site management and functionality, delivering seamless and powerful web solutions.</p>
              <nav className="mt-8 flex flex-wrap gap-4">
                <NavPill herf="mailto:sukhbirsingh4259@gmail.com" text="Contact me"  Icon={EmailIco}/>
                <NavPill herf="https://linkedin.com/in/midudev" text="LinkedIN"  Icon={LinkedInIco}/>
                <NavPill herf="https://github.com/sukhbir-singh-bal" text="Git Hub" Icon={GithubIco} />
                <a href="https://linkedin.com/in/sukhbir-singh-bal" target="_blank" rel="noopener" className="flex items-center transition md:justify-center md:hover:scale-105">
                  <div className="flex items-center">
                    <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
                      <div className="inline-flex w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 backdrop-blur-3xl dark:bg-gray-800 dark:text-white/80">Say Hi 👋</div>
                    </span>
                  </div>
                </a>
              </nav>
            </div>
                <img className="size-16 md:size-52 rounded-full shadow-lg" src={ProfileImage} alt="Sukhbir Singh" />
          </section>
      <section id="Experience" data-section="Experience" className="section undefined container mx-auto w-full scroll-m-20 md:max-w-2xl lg:max-w-4xl">
        <h2 className="mb-6 flex items-center gap-x-3 text-3xl font-semibold text-black/80 dark:text-white">
          <svg className="size-8" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
            <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
            <path d="M12 12l0 .01"></path>
            <path d="M3 13a20 20 0 0 0 18 0"></path>
          </svg>
          Work experience
        </h2>
        <ol className="relative mt-16">
          <li className="">
            <div className="md:space-x-4] relative mx-12 grid pb-12 before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 before:content-[''] md:grid-cols-5 md:gap-10 dark:before:border-white/15">
              <div className="relative pb-12 md:col-span-2">
                <div className="sticky top-0">
                  <span className="absolute -left-[42px] rounded-full text-5xl text-blue-300">•</span>
                  <h3 className="text-xl font-bold text-blue-300">Web Developer</h3>
                  <h4 className="text-xl font-semibold text-gray-600 dark:text-white">CIIRS Pvt. Ltd.</h4>
                  <time className="m-0 p-0 text-sm text-gray-600/80 dark:text-white/80">August 2022 - <b className="text-yellow-300">Present</b></time>
                </div>
              </div>
              <div className="relative flex flex-col gap-2 pb-4 text-gray-600 md:col-span-3 dark:text-gray-300">
              At CIIRS, I worked with a dynamic team to develop and maintain a robust ecommerce platform. My responsibilities included leading the implementation of new features and functionalities, as well as expertly troubleshooting and resolving bugs to ensure optimal performance.
                <a href="https://www.ciirs.com" role="link" className="inline-flex items-center text-lg font-medium text-blue-500 hover:text-yellow-700 dark:text-yellow-200 dark:hover:text-yellow-300">
                  See More
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right w-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 6l6 6l-6 6"></path>
                  </svg>
                </a>
              </div>
            </div>
          </li>
          <li className="">
            <div className="md:space-x-4] relative mx-12 grid pb-12 before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 before:content-[''] md:grid-cols-5 md:gap-10 dark:before:border-white/15">
              <div className="relative pb-12 md:col-span-2">
                <div className="sticky top-0">
                  <span className="absolute -left-[42px] rounded-full text-5xl text-blue-300">•</span>
                  <h3 className="text-xl font-bold text-blue-300">Android Development Training</h3>
                  <h4 className="text-xl font-semibold text-gray-600 dark:text-white">Solitire Infosys Patiala</h4>
                  <time className="m-0 p-0 text-sm text-gray-600/80 dark:text-white/80">August 2021 - January 2022</time>
                </div>
              </div>
              <div className="relative flex flex-col gap-2 pb-4 text-gray-600 md:col-span-3 dark:text-gray-300">I completed a 6-month Android Development training program, honing my skills in Java and Android Studio. Additionally, I developed an earthquake report app utilizing the USGS API, which provides users with real-time updates on the latest earthquakes.</div>
            </div>
          </li>
        </ol>
      </section>
      <section id="Projects" data-section="Projects" className="section undefined container mt-10 mx-auto w-full scroll-m-20 md:max-w-2xl lg:max-w-4xl">
        <h2 className="mb-6 flex items-center gap-x-3 text-3xl font-semibold text-black/80 dark:text-white">
          <svg className="size-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 8l-4 4l4 4"></path>
            <path d="M17 8l4 4l-4 4"></path>
            <path d="M14 4l-4 16"></path>
          </svg>
          Projects
        </h2>
        <div className="flex flex-col gap-y-16">
          <ProjectView Description={"This project is a YouTube video downloader that allows you to download videos without the need for any API or third-party tools. It is built using PHP and utilizes a decrypt function to encrypted videos."} GitLink={"https://github.com/Sukhbir-singh-bal/Youtube-Downloader"} WebLink={"https://ssbyoutube.000webhostapp.com/"} title={"YouTube Downloader"} techStack={["PHP","Javascript","HTML"]} ImgSrc={YtDownloader} />
        </div>
      </section>
        <section id="AboutME" data-section="AboutME" className="section undefined container mx-auto w-full scroll-m-20 md:max-w-2xl mt-10 lg:max-w-4xl">
          <h2 className="mb-6 flex items-center gap-x-8 text-3xl font-semibold text-black/80 dark:text-white">
            <svg className="size-8" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
              <path d="M15 19l2 2l4 -4"></path>
            </svg>
             About me
          </h2>
          <article className="flex flex-col items-center justify-center gap-8 text-gray-700 md:flex-row dark:text-gray-300">
            <div className="[&amp;>p]:mb-4 [&amp;>p>strong]:text-blue-500 dark:[&amp;>p>strong]:text-yellow-100 [&amp;>p>strong]:font-normal [&amp;>p>strong]:font-mono order-2 text-pretty md:order-1">
            <p>
              My name is <span className="text-blue-500 font-bold">Sukhbir Singh</span>. I started programming during my graduation, tinkering with basic scripts and coding challenges. Today, I am a dedicated and results-oriented Web Developer with over <span className="text-red-500 font-bold">2 years of experience</span> in the tech industry.<br/>
              Some of my achievements include successfully rebuilding websites,integrating third-party tools, and <span className="text-indigo-100">optimizing page speed and SEO</span>. My technical expertise spans <span className="text-purple-400">PHP</span>, <span className="text-red-400">Laravel</span>, <span className="text-blue-300">React</span>, and <span className="text-yellow-400">JavaScript</span>, and a variety of other web technologies.
            </p>

            </div>
            <img width="200" height="200" src={ProfileImage} alt="Sukhbir" className="order-1 aspect-square h-40 w-40 rotate-3 rounded-2xl bg-black/20 object-cover p-1 ring-1 ring-black/70 md:order-2 lg:w-64 lg:p-2 dark:bg-yellow-500/5 dark:ring-white/20"/>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default App
