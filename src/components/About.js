import Aboutimage from "../assets/img1.jpg"

function About(){
    return(<>
    <div className=" mb-10 md:flex flex-col gap-8 mb-6 overflow:hidden items-center md:flex-wrap md:justify-center bg-black  shadow-slate-900 shadow-xl mx-0 md:mx-20 bg-opacity-30 p-12 rounded-lg">
       <h1 className="text-2xl md:text-4xl font-bold mb-5 text-purple-500">About Me</h1>
       <div className="md:flex flex-wrap flex-col gap-24 md:flex-row items-center">
        <img src={Aboutimage} alt="about me" className="md:h-60"></img>
        <ul>
            <div className="flex gap-3 py-4">
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal text-white">Full-Stack Developer</h1>
                <p className="text-sm md:text-md leading-tight text-white">I am a Full-stack Developer with a passion for creating user-friendly and innovative web solutions. With a strong focus on design and creativity, I build visually appealing and functional websites that solve real-world problems and enhance user experiences. I am committed to staying current with the latest web development trends to ensure my work consistently exceeds expectations. I am eager to apply my skills and enthusiasm in a dynamic environment and am actively seeking opportunities for internships and full-time positions. I look forward to contributing to impactful projects and continuing to grow as a developer.
                    </p>

              </span>

            </div>
           
        </ul>
       </div>
    </div>
    </>

    )
}



export default About