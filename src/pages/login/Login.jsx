import React, { useState } from 'react';
import axios from '../../api/axios';
import './login.css'

const LOGIN_URL = '/api/login_check'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState (false)

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const response = await axios.post(LOGIN_URL, JSON.stringify({username: username, password: password}),
            {
                headers: {'Content-Type' : 'application/json'},
                withCredentials: true
            }
         )

                const accessToken = response.data
                // console.log(accessToken)
                const user = { username: username, accessToken: accessToken}
                

                const storedToken = window.localStorage.setItem(
                    'loggedAppUser', JSON.stringify(user)
                )
                console.log(storedToken)

                setUsername('');
                setPassword('');
                setSuccess(true);

                console.log('Estas logeada')

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