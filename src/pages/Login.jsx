import React, { useState } from 'react'
import './login.css'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <section class="main">
            <div class="auth-content">
                <form>
                    <h2 class="form-title">Login</h2>
                    <div>
                        <label>Email</label>
                        <input type="email" value={email} name="email" class="text-input" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" value={password} name="password" class="text-input" />
                    </div>
                    <div>
                        <button type="button" class="btn">Login</button>
                    </div>
                </form>
            </div >
        </section >
    )
}

export default Login