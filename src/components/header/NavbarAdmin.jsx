
import '../header/header.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
function NavbarAdmin() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return(
        <header>
            <div className='container'>
                <nav className='navbar' id="navbar">
                        <img className='logoimg' src="./images/intress_logo_transparente.png" alt="Intress"/>
                    <div data-aos="fade-up">   
                    <ul className="nav-links">        
                        <input type="checkbox" id="checkbox_toggle" />    
                        <label for="checkbox_toggle" className="hamburger">&#9776;</label>  
                        <div className="menu">   
                            <li><a className='option' href="#">Usuarios</a></li>
                            <li><a className='option' href="#">Fichajes</a></li>
                            <li><a className='option' href="#">Vacaciones</a></li>
                            <li><a className='option' href="#">Talleres</a></li>  
                            <li><a className='option' href="#">Descargas</a></li>  
                        </div>    
                    </ul> 
                    </div>    
                </nav>
            </div>
        </header>
    )
}  

export default NavbarAdmin;