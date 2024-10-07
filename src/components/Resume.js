import Resumecv from "../assets/cv.png"



function Resume(){
    return(
        <>
        <div className="bg-black bg-opacity-30 mx-20 mb-20 md:gap-20 flex-wrap  flex justify-center shadow-slate-900 shadow-xl rounded-xl items-center">
            <div className="md:p-20 p-6"><img src={Resumecv} alt="resume" className="w-96"></img></div>
           <div className="flex flex-col justify-center items-center"> <h1 className="font-bold md:text-4xl text-2xl text-white  md:px-10">Resume</h1>
            <p>Check Out My Resume</p>
            <a href="/Resume11.pdf" download>
            <button  className="p-2 mt-4 mb-10 px-4 rounded-xl font-bold text-white bg-purple-400 hover:scale-110">View</button>
            </a></div>
            
        </div>
        </>
    )
}

export default Resume