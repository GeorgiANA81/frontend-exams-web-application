import React, {Component} from 'react';
import '../Teacher_page.css';

class TeacherPage extends Component {
    render() {
        return (
            <div className="start">
                <div className="row">
                    <div className="col-8">
                        <h2>Examenele curente</h2>
                        <h2>Examenele următoare</h2>
                    </div>
                    <div className="col-4">
                        <button className={"btn btn-primary btn-block"}>Filtrare</button>
                        <hr/>
                        <h4>Programare examene</h4>
                        <ul className={"list-group"}>
                            <li className="list-group-item"><a href={"#"}>Adăugare examen</a></li>
                            <li className="list-group-item"><a href={"#"}>Ștergere examen</a></li>
                            <li className="list-group-item"><a href={"#"}>Modificare examen</a></li>
                        </ul>
                        <hr/>
                        <h4>Examenele mele</h4>
                        <ul className={"list-group"}>
                            <li className="list-group-item"><a href={"#"}>Adăugare examen</a></li>
                            <li className="list-group-item"><a href={"#"}>Ștergere examen</a></li>
                        </ul>
                        <hr />
                        <div className="list-group">
                            <li className="list-group-item"><a href={"#"}>Modificare parolă</a></li>
                            <li className="list-group-item"><a href={"#"}>Deconectare</a></li>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TeacherPage;