import React, { useState } from 'react';
import axios from '../../api/axios';
import jwtDecode from 'jwt-decode'
import './login.css'

const LOGIN_URL = '/api/login_check'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(false)

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{

            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({username: username, password: password}),
                    {
                        headers: {'Content-Type' : 'application/json'},
                        withCredentials: true
                    }
            )

            const accessToken = response.data.token
            const user = { username: username}
            const userToken = { accessToken: accessToken}

            const decodedToken = jwtDecode(accessToken)
            // console.log(decodedToken)
            const userRole = decodedToken.roles
            console.log(userRole)

            const storedUsername = window.localStorage.setItem(
                'loggedAppUser', JSON.stringify(user)
            )

            const storedToken = window.localStorage.setItem(
                'auth_token', accessToken
            )

            const storedRole = window.localStorage.setItem(
                'auth_role', userRole
            )

            // console.log(storedToken)
            // console.log(storedUsername)


                setUsername('');
                setPassword('');
                setSuccess(true);

                console.log('Estas logeada')

                setTimeout(()=>{

                    // switch (userRole) {
                    // case 'ROLE_ADMIN', 'ROLE_USER':
                    //     window.location.href = '/admin'
                    //     break;
                    // case 'ROLE_MASTER', 'ROLE_USER':
                    //     window.location.href = '/master'
                    //     break;
                    // case 'ROLE_USER':
                    //     window.location.href = '/user'
                    //     break;
                    // default:
                    //     console.log(`credenciales invalidas ${userRole}.`);
                    // }

                    // if(userRole == userRole[0]){
                    //     window.location.href = '/user'
                    // }else if(userRole == userRole[0, 1] ){
                    //     window.location.href = '/master'
                    // }else if(userRole == ['ROLE_ADMIN', 'ROLE_USER'] ){
                    //     window.location.href = '/admin'
                    // }else{
                    //     console.log('Error')
                    // }
                    if(userRole == 'ROLE_USER'){
                            window.location.href = '/user'
                        }else{
                            window.location.href = '/admin'
                        }

                },1000)

        }catch (err){

                console.log('No funciona')

        }
    }


  return (
    <>
        {success ? (
                <section className='success'>
                    <h2>¡Has iniciado sesión!</h2>
                    <a href='#' className='btn-login'>Ve al inicio</a>
                </section> 
            ) : (
                <section className='principalPage'>
                    <picture>
                        <source className="movil" alt="m"  srcSet="../images/azul.png" media="(max-width:767px)"/>
                        <img className='desktop' alt="m" src="../images/desktopversion.png" width="200px"/>                            
                    </picture>
                    <img className='logo' alt="m" src="../../images/logo_intress.svg"/>                            
                        <div className='box-fichaje'>
                            <form onSubmit={handleSubmit}>
                                
                               <div className='inputContainer'>
                               <input
                                    className='boxes'
                                    type='text'
                                    id='username'
                                    autoComplete='off'
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                    required
                                />
                                <label className='subtitle' htmlFor='username'>Username</label>
                               </div>

                                <div className='inputContainer'>
                                <input
                                    className='boxes'
                                    type='password'
                                    id='password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                />
                                <label className='subtitle' htmlFor='password'>Contraseña</label>
                                </div>

                                <button className='btn'>Ingresar</button>
                            </form>

                            <img className='personita' alt="m" src="../../images/personita.svg"/>                            
                        </div>
                </section>
            )}
    </>
  )
}

export default Login