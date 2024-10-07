import Pic from "../assets/pic.png"

function Hero() {
    return (<>
        <div className="flex  justify-between gap-20 items-center flex-wrap p-20 md:py-60 text-4xl font-medium text-white bg-blue-950">
           <div className="md:scale-150 scale-110 md:ml-28"><h1 >Hi,<br />I'm Kishor</h1>
            <p>I am a Full-stack developer</p></div> 
            <img src={Pic} className="w-80"></img>
        </div>
    </>)
}

export default Hero