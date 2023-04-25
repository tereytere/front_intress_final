import React, { useState } from 'react'
import axios from '../../api/axios'
import './register.css';

const REGISTRATION_URL = '/api/register' 

function Register() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            const response = await axios.post(REGISTRATION_URL, {
                username: username,
                password: password
            },
            {
                headers: { 'Content-Type': 'application/json' }
            })

            console.log(response.data)

            setSuccess(true)

        }catch{

            console.log('No funciona')

        }
    }

  return (
    <div>
      {success ? (
                <section className='success'>
                    <h2>¡Registro completado!</h2>
                </section> 
            ) : (
                <section>
                    <h1>Registro de usuario</h1>
                        <div className='box-registration'>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor='username' className='reg'>Username:</label>
                                <input
                                    className="control_reg"
                                    type='text'
                                    id='username'
                                    autoComplete='off'
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                    required
                                />

                                <label htmlFor='password' className='reg'>Contraseña:</label>
                                <input
                                className="control_reg"
                                    type='password'
                                    id='password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                />
                                
                            </form>
                            <button className='btn_register'>Registrar usuario</button>
                        </div>
                </section>
            )}
    </div>
  )
}

export default Register