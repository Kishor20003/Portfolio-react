import Tripadvisor from "../assets/tripadvisor.jpg"
import Nostra from "../assets/nostra.jpg"
import Udemy from "../assets/Untitled design.png"
function Projectcard() {
    return (
        <>
            <div className="p-3 md:p-6 flex flex-col w-80 bg-black shadow-xl shadow-slate-900 rounded-2xl bg-opacity-30 md:ml-20">
                <img className="p-4" src={Tripadvisor} alt="Tripadvisor" ></img>
                <h3 className="px-4 text-xl md:text-2xl font-bold text-white leading-normal">Trip Advisor Clone</h3>
                <p className="px-4 text-sm md:text-md leading-tight py-2 text-white">Trip Advisor Clone built using HTML and CSS ,This project has been an incredible ourney,allowing me to enhance my web development skills and gain a deeper understanding of user interfaces</p>
                <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
                    <a href="https://kishor20003.github.io/tripadvisor-clone/"><button className="md:mt-2 py-2 text-white  px-3 text-sm md:text-lg md:py-2 md:px-4 bg-purple-500 rounded-lg hover:opacity-85 hover:scale-105 font-semibold rounded-3xl">Demo</button></a>
                    <button className="md:mt-2 py-2 text-white  px-3 text-sm md:text-lg md:py-2 md:px-4 bg-purple-500 rounded-lg hover:opacity-85 hover:scale-105 font-semibold rounded-3xl">Source Code</button>
                </div>

            </div>

            <div className="p-3 md:p-6 flex flex-col w-80 bg-black shadow-xl shadow-slate-900 rounded-2xl bg-opacity-30 md:ml-20">
                <img className="p-4" src={Nostra} alt="Tripadvisor" ></img>
                <h3 className="px-4 text-xl md:text-2xl font-bold text-white leading-normal">Nostra E-commerce</h3>
                <p className="px-4 text-sm md:text-md leading-tight py-2 text-white">Nostra is an E-commerce website built using HTML,CSS and JavaScript.This site features a dynamic home page and a contact page all designed with responsive layout</p>
                <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
                    <button className="md:mt-2 py-2 text-white  px-3 text-sm md:text-lg md:py-2 md:px-4 bg-purple-500 rounded-lg hover:opacity-85 hover:scale-105 font-semibold rounded-3xl">Demo</button>
                    <button className="md:mt-2 py-2 text-white  px-3 text-sm md:text-lg md:py-2 md:px-4 bg-purple-500 rounded-lg hover:opacity-85 hover:scale-105 font-semibold rounded-3xl">Source Code</button>
                </div>

            </div>

            <div className="p-3 md:p-6 flex flex-col w-80  bg-black shadow-xl shadow-slate-900 rounded-2xl md:ml-20  bg-opacity-30">
                <img className="p-4 " src={Udemy} alt="Tripadvisor" ></img>
                <h3 className="px-4 text-xl md:text-2xl font-bold text-white leading-normal">Udemy Clone</h3>
                <p className="px-4 text-sm md:text-md leading-tight py-2 text-white">Udemy Clone built using HTML and CSS.It Has a Responsive design which ensured compatibility across various devices and it has clean and modern ui for user freindly interface</p>
                <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
                    <a href="https://kishor20003.github.io/Udemy_clone_project/"><button className="md:mt-2 py-2 text-white  px-3 text-sm md:text-lg md:py-2 md:px-4 bg-purple-500 rounded-lg hover:opacity-85 hover:scale-105 font-semibold rounded-3xl" >Demo</button></a>
                    <button className="md:mt-2 py-2 text-white  px-3 text-sm md:text-lg md:py-2 md:px-4 bg-purple-500 rounded-lg hover:opacity-85 hover:scale-105 font-semibold rounded-3xl">Source Code</button>
                </div>

            </div>

        </>
    )
}

export default Projectcard