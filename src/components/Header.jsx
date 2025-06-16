import { useState } from 'react';
import {  Link } from 'react-router-dom'




import './Header.css'



import Button from "./Button/Button";





function Header() {
  const [isOpen, setIsOpen] = useState(false);
    return(
         
         
         <header>
             
         <div className=" d-flex m-top ">

              <div className='mobile-menu'> 
                <Button buttonstyle="secondary" onClick={() => setIsOpen(!isOpen)}>
                Menu
             </Button>
              </div>
              <nav className={`${isOpen ? 'open' : ''} `}>
                <Button buttonStyle="unstyled" className="mobile-menu close-btn" onClick={() => setIsOpen(!isOpen)}>X</Button>
            <div className='routes'>
                <p className="rotate"><Link to="/">Home</Link></p>
                <p className="rotate"><Link to="/projects">Projeto</Link></p>
                <p className="rotate"><Link to="/about">Sobre Mim</Link></p>
                <p className="rotate"><Link to="/contact">Contato</Link></p>
            </div>
              </nav>


            <div>
                  <h1 className="m-left">front-end.web(developer)</h1>
           </div>



         </div>

         </header>

    )
}
export default Header