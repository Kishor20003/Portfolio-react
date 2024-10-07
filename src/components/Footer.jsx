
import Twitter from "../assets/twit.webp"
import Github from "../assets/github.png"
import Linkedin from "../assets/link.webp"
function Footer() {
    return (
        <>
            <div className="flex gap-5 justify-around bg-black bg-opacity-60 text-white p-10 md:p-12 items-center">
                <div >
                    <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
                    <h3 className="text-sm md:text-2xl">Feel free to reach out! </h3>

                </div>
                <ul className=" flex text-sm md:text-xl items-center">
                    <li><a href="https://www.linkedin.com/in/kishor-b-a66307253/" target="_blank"><img src={Twitter} alt="twitter" className="w-40 cursor-pointer hover:scale-110" /></a></li>
                    <li><a href="https://github.com/Kishor20003" target="_blank"><img src={Github} alt="Github" className="w-28 cursor-pointer hover:scale-110" /></a></li>
                    <li><a href="https://www.linkedin.com/in/kishor-b-a66307253/" target="_blank"><img src={Linkedin} alt="Linkedin" className="w-40 cursor-pointer hover:scale-110" /></a></li>
                </ul>
            </div>
        </>
    )
} 


export default Footer