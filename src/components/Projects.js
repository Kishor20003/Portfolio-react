import Projectcard from "./Projectcard"

function Projects(){
    return(
        <>
        <div className="p-10 md:p-24">
        <h1 className="text-2xl md:text-4xl text-purple-500 font-bold">Projects</h1>
        <div className="py-12 px-8 flex flex-wrap gap-5">
<Projectcard/>
        </div>
        </div>
        </>
    )
}


export default Projects