import React, { Component } from 'react';
import "../Student_page.css";

class Student_page extends Component
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

                        <label class="label">Examenele mele</label><br></br>

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
            </body>
            </html>
        )
    }
}

export default Student_page;