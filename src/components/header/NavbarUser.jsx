
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
function NavbarUser() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return(
        <header>
            <div className='container'>
                <nav className='navbar' id="navbar">
                <a className='logo'>
                        <img src="./images/intress_logo_transparente.png" alt="Intress"/>
                    </a>  
                    <div data-aos="fade-up">   
                    <ul class="nav-links">        
                        <input type="checkbox" id="checkbox_toggle" />    
                        <label for="checkbox_toggle" class="hamburger">&#9776;</label>  
                        <div class="menu">   
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

export default NavbarUser;