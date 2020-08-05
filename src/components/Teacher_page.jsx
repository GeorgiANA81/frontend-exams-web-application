import React, { Component } from 'react';
import '../Teacher_page.css';

class Teacher_page extends Component
{
    render()
    {
        return (
            <html>
                <body class="start">
                    <form class="menu">
                            <input type = "button" name = "Filtrare"
                                    class = "principal_button"
                                    value = "Filtrare"/><br></br>

                            <label class="labelp">Programare examene</label><br></br>

                            <input type = "button" name = "Adaugare_examen_programare"
                                    class = "principal_button"
                                    value = "Adăugare examen"/><br></br>

                            <input type = "button" name = "Stergere_examen_programare"
                                    class = "principal_button"
                                    value = "Ștergere examen"/><br></br>
                                
                            <input type = "button" name = "Modificare examen"
                                    class = "principal_button"
                                    value = "Modificare examen"/><br></br>

                            <label class="labele">Examenele mele</label><br></br>

                            <input type = "button" name = "Adaugare_examen"
                                    class = "principal_button"
                                    value = "Adăugare examen"/><br></br>

                            <input type = "button" name = "Stergere_examen"
                                    class = "principal_button"
                                    value = "Ștergere examen"/><br></br>

                            <input type = "button" name = "Modificare parolă"
                                    class = "buttonm"
                                    value = "Modificare parolă"/><br></br>
                                
                            <input type = "button" name = "Deconectare"
                                    class = "buttond"
                                    value = "Deconectare"/><br></br>
                    </form>

                    <form class="showExams">
                        <table>

                        </table>
                        <form>

                        </form>
                    </form>

                    <form class="nextExams">
                        <label class="labelu">Examene următoare:</label><br></br>
                        <table>

                        </table>
                    </form>

                    <input type = "button" name = "Inapoi"
                                    class = "button2"
                                    value = "Înapoi"/><br></br>
                </body>
            </html>
        )
    }
}

export default Teacher_page;