import React, { Component } from 'react';
import '../Register_page.css';

class Register_page extends Component
{
     render()
     {
         return (
             <html>
                 <body class="start">
                         <h1 class = "header1"> Înregistrare </h1>

                             <label for="nume" class="label">Nume:</label>
                             <input type="text" id="nume" name="nume" class="textLabel"/><br></br>

                             <label for="idutil" class="label">ID Utilizator:</label>
                             <input type="text" id="idutil" name="idutil" class="textLabel"/><br></br>

                             <label for="email" class="label">E-mail:</label>
                             <input type="text" id="email" name="email" class="textLabel"/><br></br>

                             <label for="parola" class="label">Parolă:</label>
                             <input type="text" id="parola" name="parola" class="textLabel"/><br></br>

                             <input type = "button" name = "Confirmare"
                                    class = "principal_button"
                                    value = "Confirmare"/><br></br>
                            
                             <input type = "button" name = "Inapoi"
                                    class = "principal_button"
                                    value = "Înapoi"/><br></br>
                 </body>
              </html>
         );
     }
}

export default Register_page;              