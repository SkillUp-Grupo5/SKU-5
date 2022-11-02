import React, { useState } from 'react'

import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

import '../../styles/application/auth/pages/LoginPage.css';


export const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInputEmailChange = (e) => {

        setEmail(e.target.value);
    }

    const handleInputPasswordChange = (e) => {

        setPassword(e.target.value);
    }

    const handleLogin = (e) => {
        e.preventDefault();

        console.log('Login')

    }

    return (
        <div className='login__Container'>

                <div className='iconLoginContainer'>
                    <img
                        src='https://res.cloudinary.com/the-kings-company/image/upload/v1663785540/dashboard-ecommerce-app/assets/3515462_rw5fkz.jpg'
                        alt=''
                    />
                </div>
                
                <div className="grid">

                    <form
                        autoComplete="off"
                        className="form login"
                        onSubmit={handleLogin}
                    >

                        <div className="form__field">

                            <label htmlFor="login__username">
                                <svg className="icon">
                                    <PersonIcon />
                                </svg>
                                <span className="hidden">Username</span>
                            </label>

                            <input
                                id="login__username"
                                type="text"
                                className="form__input"
                                placeholder="Email"
                                autoComplete="off"
                                label="Email"
                                name='email'
                                value={email}
                                onChange={handleInputEmailChange}
                                required />

                        </div>

                        <div className="form__field">

                            <label htmlFor="login__password">
                                <svg className="icon">
                                    <LockIcon />
                                </svg>
                                <span className="hidden">Password</span>
                            </label>

                            <input
                                id="login__password"
                                type="password"
                                className="form__input"
                                placeholder="Contraseña"
                                autoComplete="off"
                                label="Contraseña"
                                name='password'
                                value={password}
                                onChange={handleInputPasswordChange}
                                required />

                        </div>

                        <div className="form__field">
                            <input type="submit" value="Iniciar Sesión" />
                        </div>

                    </form>

                </div>


        </div>
    )
}
