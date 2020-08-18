import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

const initCredentials = {
    username: '',
    password: ''
}

function Login() {
    const [credentials, setCredentials] = useState(initCredentials)
    
    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    
    
    const login = (e) => {
        e.preventDefault()
        axiosWithAuth()
            .post("/api/login", credentials)
            .then((res) => {
                localStorage.setItem('token', res.data.payload)
            })
            .catch((err) => {console.log(err)})
    }

    return (
        <div>
            <form onSubmit={login}>
                <div>
                    <input
                        name='username'
                        type='text'
                        value={credentials.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        name='password'
                        type='password'
                        value={credentials.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button>Log In</button>
                </div>
            </form>
        </div>
    )
}

export default Login