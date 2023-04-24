
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
                            <li><a className='option' href="#selecadmin">Secciones</a></li>
                            <li><a className='option' href="#new_user">Usuario</a></li>
                            <li><a className='option' href="#new_workshops">Talleres</a></li>
                            <li><a className='option' href="#new_task">Tareas</a></li>  
                            <li><a className='option' href="#downloads">Descargas</a></li>  
                        </div>    
                    </ul> 
                    </div>    
                </nav>
            </div>
        </header>
    )
}  

export default NavbarAdmin;