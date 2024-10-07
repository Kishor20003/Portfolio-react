import Navbar from './components/Navbar';
import './App.css';
import Hero from "./components/Hero"
import About from './components/About';
import Projects from "./components/Projects"
import Footer from './components/Footer'; 
import Resume from './components/Resume';
import Skills from './components/Skills';

function App() {
  return (<>
  <div className="bg-blue-950">
    <Navbar></Navbar>
    <Hero></Hero>
    <About/>
    <Skills></Skills>
    <Projects/>
    <Resume/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
