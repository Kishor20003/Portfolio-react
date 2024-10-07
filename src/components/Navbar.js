
function Navbar() {
    return (<>
        <div className="flex justify-between items-center bg-black bg-opacity-60 text-purple-500">
            <h1 className="text-3xl  text-white px-5 py-2 hover:text-purple-500 cursor-pointer">Kishor B</h1>
            <nav className="hidden md:block">
                <ul className="flex gap-8 px-10 text-xl  text-white cursor-pointer ">
                    <li className="hover:text-purple-500"><a>Home</a></li>
                    <li className="hover:text-purple-500"><a>Projects</a></li>
                    <li className="hover:text-purple-500"><a>Resume</a></li>
                    <li className="hover:text-purple-500"><a>Contact</a></li>
                </ul>


            </nav>
            <button className="md:hidden px-6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </button>
        </div>
    </>)
}



export default Navbar