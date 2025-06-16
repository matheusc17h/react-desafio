
import './main.css'
import dncLogo from './assets/dnc.svg'

import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom'


//Pages
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import About from './pages/About'

//Utils

import ScrollToTop from './utils/ScrollToTop'




function App() {


  
  return (
    
    <Router>
<ScrollToTop/>
       <a  href="https://www.escoladnc.com.br/" target="_blank">
          <img src={dncLogo} className="logo" alt="Dnc Logo" />
        </a>
       <Routes>
          <Route path="/" element={<Home/>}></Route> 
           <Route path="/projects" element={<Projects/>}></Route>
            <Route path="/about" element={<About/>}></Route>
             <Route path="/contact" element={<Contact/>}></Route>
       </Routes>
    </Router>
    
   
  )
}

export default App
