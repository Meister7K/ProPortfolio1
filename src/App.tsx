import Layout from "./components/layout/Layout";
import "./App.scss";
import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/pages/homepage/Home";
import Contact from "./components/pages/contact/Contact";
import Maintenance from "./components/pages/maintenance/Maintenance";
import About from "./components/pages/about/About";
import Game from "./components/pages/game/Game";
import Error from "./components/pages/error/Error";
import Projects from "./components/pages/projects/Projects";
import Resume from "./components/pages/resume/Resume";
import Loader from "./components/loader/Loader";
import Support from "./components/pages/support/Support";


function App() {
const [loading, setLoading] = useState(false);

useEffect(()=>{
  setLoading(true);
  setTimeout(()=>{
    setLoading(false);
  },1000)
},[]);

  return (
    <div className="container">{loading? (<Loader/>):(<BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="resume" element={<Resume/>}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="support" element={<Support/>}/>
            <Route path="game" element={<Game/>}/>
            <Route path="*" element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>)}
    
      
    </div>
  );
}

export default App;
