import React, {Component} from 'react';
import '../Register_page.css';

class RegisterPage extends Component {
    render() {
        return (
            <div className="start">
                <h1 className="header1"> Înregistrare </h1>

                <label htmlFor="nume" className="label">Nume:</label>
                <input type="text" id="nume" name="nume" className="textLabel"/><br/>

                <label htmlFor="idutil" className="label">ID Utilizator:</label>
                <input type="text" id="idutil" name="idutil" className="textLabel"/><br/>

                <label htmlFor="email" className="label">E-mail:</label>
                <input type="text" id="email" name="email" className="textLabel"/><br/>

                <label htmlFor="parola" className="label">Parolă:</label>
                <input type="password" id="parola" name="parola" className="textLabel"/><br/>

                <input type="button" name="Confirmare"
                       className="principal_button"
                       value="Confirmare"/><br/>

                <input type="button" name="Inapoi"
                       className="principal_button"
                       value="Înapoi"/><br/>
            </div>
        );
    }
}

export default RegisterPage;