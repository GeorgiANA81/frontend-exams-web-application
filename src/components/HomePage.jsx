import React, {Component} from 'react';
import '../Home_page.css';
import {NavLink} from "react-router-dom";
import routes from "../routes";

class HomePage extends Component {
    render() {
        return (
            <div className="start">
                <h1> Universitatea Politehnica Timisoara </h1>
                <h2> Programare examene sesiune </h2>

                <div className="btn-group">
                    <NavLink className={"btn btn-primary"}
                             to={routes.pages.login}
                    >Conectare</NavLink>
                    <NavLink className={"btn btn-outline-primary"}
                             to={routes.pages.register}
                    >Inregistrare</NavLink>
                </div>
            </div>
        );
    }
}

export default HomePage;