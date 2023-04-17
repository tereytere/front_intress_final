import './Navbar.css';

function NavbarAdmin() {
    return(
        <header>
            <div className='container'>
                <nav className='navbar' id="navbar">
                <a className='logo'>
                        <img src="./images/intress_logo_transparente.png" alt="Intress"/>
                    </a>    
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
                </nav>
            </div>
        </header>
    )
}  

export default NavbarAdmin;