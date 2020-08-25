import React from 'react';
import '../Register_page.css';
import {NavLink} from "react-router-dom";
import routes from "../routes";
import {userAuth} from "../user/api/state";
import {useRecoilState} from "recoil";

const axios = require('axios').default;

const LoginPage = () => {
    const [auth, setAuth] = useRecoilState(userAuth)
    const formDTO = {}

    if (!auth.authenticated && window.localStorage.getItem('exam_user')) {
        window.localStorage.clear()
    }

    const handleChange = (event) => {
        formDTO[event.target.name] = event.target.value
    }

    const handleLogin = async (event) => {
        event.preventDefault()

        const {email, password} = formDTO

        try {
            const payload = await axios.get(`http://localhost:8080/api/user/login?email=${email}&password=${password}`)
            const user = payload.data

            setAuth({
                authenticated: true,
                user
            })

            window.localStorage.setItem('exam_user', JSON.stringify(user))
            window.location.href = routes.exams.list
        } catch (e) {
            alert(`Utilizatorul cu adresa de e-mail ${email} nu exista!`)
        }
    }

    return (
        <div className="start">
            <h1>Conectare</h1>

            <div>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input name="email"
                           onChange={e => handleChange(e)}
                           value={formDTO.email}
                           type="email"
                           className="form-control"
                           id="email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Parola</label>
                    <input name={"password"}
                           onChange={e => handleChange(e)}
                           type="password"
                           className="form-control"
                           id="password"
                    />
                </div>
                <div className="d-flex justify-content-between">
                    <button onClick={e => handleLogin(e)} className="btn btn-primary">Confirmă</button>
                    <NavLink to={routes.pages.home} className="btn btn-primary">Inapoi</NavLink>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;