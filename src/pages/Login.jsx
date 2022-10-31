import React from 'react'
import './login.css'

function Login() {
    return (
        <section class="main">
            <div class="auth-content">
                <form>
                    <h2 class="form-title">Login</h2>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" class="text-input" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" class="text-input" />
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