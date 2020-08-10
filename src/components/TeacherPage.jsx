import React, {Component} from 'react';
import '../Teacher_page.css';

class TeacherPage extends Component {
    render() {
        return (
            <div className="start">
                <form className="menu">
                    <input type="button" name="Filtrare"
                           className="principal_button"
                           value="Filtrare"/><br/>

                    <label className="labelp">Programare examene</label><br/>

                    <input type="button" name="Adaugare_examen_programare"
                           className="principal_button"
                           value="Adăugare examen"/><br/>

                    <input type="button" name="Stergere_examen_programare"
                           className="principal_button"
                           value="Ștergere examen"/><br/>

                    <input type="button" name="Modificare examen"
                           className="principal_button"
                           value="Modificare examen"/><br/>

                    <label className="labele">Examenele mele</label><br/>

                    <input type="button" name="Adaugare_examen"
                           className="principal_button"
                           value="Adăugare examen"/><br/>

                    <input type="button" name="Stergere_examen"
                           className="principal_button"
                           value="Ștergere examen"/><br/>

                    <input type="button" name="Modificare parolă"
                           className="buttonm"
                           value="Modificare parolă"/><br/>

                    <input type="button" name="Deconectare"
                           className="buttond"
                           value="Deconectare"/><br/>
                </form>

                <form className="showExams">
                    <table>

                    </table>
                    <form>

                    </form>
                </form>

                <form className="nextExams">
                    <label className="labelu">Examene următoare:</label><br/>
                    <table>

                    </table>
                </form>

                <input type="button" name="Inapoi"
                       className="button2"
                       value="Înapoi"/><br/>
            </div>
        )
    }
}

export default TeacherPage;