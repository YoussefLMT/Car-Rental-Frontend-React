import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../axios'
import './styles/login.css'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault()

        const response = await axiosInstance.post('/login', {
            email: email,
            password: password
        })

        if (response.data.status === 200) {
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard')
        } else if (response.data.status === 401) {
            setError(response.data.message)
        } else {
            setErrors(response.data.validation_err)
        }
    }

    return (
        <section className="main">
            <div className="auth-content">
                <form onSubmit={login}>
                    <h2 className="form-title">Login</h2>
                    {
                        error && <div className="alert alert-danger">
                            {error}
                        </div>
                    }
                    <div>
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" className="text-input" />
                        <span className="text-danger">{errors.email}</span>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" className="text-input" />
                        <span className="text-danger">{errors.password}</span>
                    </div>
                    <div>
                        <button type="submit" className="login-btn">Login</button>
                    </div>
                </form>
            </div >
        </section >
    )
}

export default Login