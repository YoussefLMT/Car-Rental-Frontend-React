import React, { useState } from 'react'
import './login.css'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (e) => {
       e.preventDefault()
    }

    return (
        <section className="main">
            <div className="auth-content">
                <form onSubmit={login}>
                    <h2 className="form-title">Login</h2>
                    <div>
                        <label>Email</label>
                        <input type="email" value={email} onChange={ (e) => setEmail(e.target.value)} name="email" className="text-input" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" value={password} onChange={ (e) => setPassword(e.target.value)} name="password" className="text-input" />
                    </div>
                    <div>
                        <button type="submit" className="btn">Login</button>
                    </div>
                </form>
            </div >
        </section >
    )
}

export default Login