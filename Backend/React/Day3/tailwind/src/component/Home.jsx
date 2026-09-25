import About from "./About"
import Service from "./Service"


const Home = () => {
  return (
    <>
    <div className="p-6">
        <div className="flex justify-center items-center">
         <h3 className="text-2xl "><span className="text-red-500 p-4 text-4xl">Discover Products Made for Your Everyday Life</span><br/>
Explore quality products designed to make your everyday experience simpler, smarter, and better.</h3>
        </div>
        
    </div>
    <About/>
    <Service/>
    </>
  )
}

export default Home