import React, {Component} from 'react';
import '../Home_page.css';

class HomePage extends Component {
    render() {
        return (
            <div className="start">
                <h1 className="header1"> Universitatea Politehnica Timisoara </h1>
                <h2 className="header2"> Programare examene sesiune </h2>
                <form>
                    <input type="button" name="Vizualizare examene"
                           className="principal_button"
                           value="Vizualizare examene"/><br/>
                    <input type="button" name="Logare"
                           className="principal_button"
                           value="Logare"/><br/>
                    <input type="button" name="Inregistrare"
                           className="principal_button"
                           value="Înregistrare"/><br/>
                </form>
            </div>
        );
    }
}

export default HomePage;