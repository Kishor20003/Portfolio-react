import Html from "../assets/html.webp"
import Css from "../assets/css.webp"
import JavaScript from "../assets/javascript.webp"
import React from "../assets/react.png"
import Node from "../assets/node.png"
import Git from "../assets/git.png"
import Java from "../assets/java.png"
import Tailwind from "../assets/Tailwind.png"


function Skills(){
    return(
        <>
        <div className="flex flex-col  mt-48 gap-16 items-center justify-center m-20 pb-20 bg-black bg-opacity-30 rounded-lg p-10 overflow-hidden shadow-xl shadow-slate-900" >
           <div> <h1  className="text-2xl md:text-4xl text-purple-500 font-bold">Skills</h1></div>

            <div className="flex gap-20 flex-wrap justify-center">
                <div className="flex flex-col items-center"><img src={Html} alt="skill" className="w-32"></img><p className="text-2xl font-bold text-white">Html</p></div>
                <div className="flex flex-col items-center">  <img src={Css} alt="skill" className="w-32"></img><p className="text-2xl font-bold text-white">Css</p></div>
                <div className="flex flex-col items-center"> <img src={JavaScript} alt="skill" className="w-32"></img><p className="text-2xl font-bold text-white">JavaScript</p></div>
                <div className="flex flex-col items-center gap-4"> <img src={React} alt="skill" className="w-32"></img><p className="text-2xl font-bold text-white">React Js</p></div>
            </div>

            <div className="flex gap-20 flex-wrap justify-center items-center">
                <div className="flex flex-col items-center gap-8 justify-center"><img src={Node} alt="skill" className="w-32"></img><p className="text-2xl font-bold text-white">Node Js</p></div>
                <div className="flex flex-col items-center">  <img src={Git} alt="skill" className="w-32"></img><p className="text-2xl font-bold text-white">Git</p></div>
                <div className="flex flex-col items-center"> <img src={Java} alt="skill" className="w-32"></img><p className="text-2xl font-bold text-white">Java</p></div>
                <div className="flex flex-col items-center gap-10"> <img src={Tailwind} alt="skill" className="w-32"></img><p className="text-2xl font-bold text-white">Tailwind Css</p></div>
            </div>

        </div>


        </>
    )
}


export default Skills