import React, {Component} from 'react';
import '../Register_page.css';
import {NavLink} from "react-router-dom";
import routes from "../routes";

class RegisterPage extends Component {
    render() {
        return (
            <div className="start">
                <h1>Înregistrare</h1>

                <form>
                    <div className="form-group">
                        <label htmlFor="name">Nume</label>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pubid">ID Utilizator</label>
                        <input type="text" className="form-control" id="pubid" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Parola</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <div className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-primary">Confirmă</button>
                        <NavLink to={routes.pages.home} className="btn btn-primary">Inapoi</NavLink>
                    </div>
                </form>
            </div>
        );
    }
}

export default RegisterPage;