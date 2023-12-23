import React, { useState } from 'react'
import "./App.css"
import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Register() {

    const [email, setEmail] = useState();
    const [password, setPass] = useState();
    const [confpassword, setConfpass] = useState();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/Register", { email, password, confpassword })
            .then(result => {console.log(result)
                navigate('/login');
                })
            .catch(err => console.log(err))

    }

    return (
        <div>
            <h1>Regsiter</h1>
            <form onSubmit={handleSubmit}>
                <div class="row">
                    <label for="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="email@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div class="row">
                    <label for="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setPass(e.target.value)}

                    />
                </div>
                <div class="row">
                    <label for="password">Confirm Password</label>
                    <input
                        type="password"
                        name="confpassword"
                        placeholder="Confirm Password"
                        onChange={(e) => setConfpass(e.target.value)}

                    />
                </div>
                <button type="submit" className='formbtn'>Register</button>
            </form>
            <Link to="/login" className='dirlink'>Already have an account? Login here</Link>
        </div>
    )
}

export default Register
