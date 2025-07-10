import Navbar from "./components/Navbar"
import NotFound from "./components/NotFound"
import About from "./pages/About"
import CV from "./pages/CV"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import { Routes, Route } from "react-router-dom"


export default function App() {
  return(
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/cv" element={<CV />}/>
          <Route path="*" element= {<NotFound/>}/>
        </Routes>
      </div>
    </div>
  )
}