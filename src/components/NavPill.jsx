export default function NavPill({herf,text,Icon}){
    return (
        <a href={herf} target="_blank" rel="noopener noreferrer" role="link" className="text-md group inline-flex max-w-fit items-center justify-center gap-2 rounded-full border border-gray-300 bg-gray-100 px-4 py-1 text-gray-800 transition hover:border-gray-700 hover:bg-gray-900 hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-yellow-500/80 focus-visible:ring-offset-2 active:bg-black dark:border-gray-600 dark:bg-gray-800 dark:text-white">
        <img src={Icon} alt={text}  className="w-5 h-5" />
        {text}
        </a>
    );
}