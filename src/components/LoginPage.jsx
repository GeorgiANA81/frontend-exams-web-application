import React from 'react';
import '../Register_page.css';
import {NavLink} from "react-router-dom";
import routes from "../routes";
import {userAuth} from "../user/api/state";
import {useRecoilState} from "recoil";

const VALID_NAMES = ['teacher@test.ro', 'student+1@test.ro', 'student+2@test.ro', 'student+3@test.ro']

const LoginPage = () => {
    const [auth, setAuth] = useRecoilState(userAuth)
    const formDTO = {}

    const handleChange = (event) => {
        formDTO[event.target.name] = event.target.value
    }

    const handleLogin = (event) => {
        event.preventDefault()

        const {email} = formDTO
        if (!VALID_NAMES.includes(email)) {
            alert('Adresa de e-mail sau parola sunt invalide.')

            return false
        }

        const user = {
            email,
            name: 'Nume Prenume',
            type: email.split('@')[0].split('+')[0],
            academicYear: parseInt(email.split('+')[1].split('@')[0])
        }

        setAuth({
            authenticated: true,
            user
        })

        window.localStorage.setItem('exam_user', JSON.stringify(user))

        window.location.href = routes.student.index
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