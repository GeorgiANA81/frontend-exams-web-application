import React, { Component } from 'react';
import '../Home_page.css';

class Home_page extends Component
{
     render()
     {
         return (
             <html>
                 <body class="start">
                             <h1 class = "header1"> Universitatea Politehnica Timisoara </h1>
                             <h2 class = "header2"> Programare examene sesiune </h2>
                         <form>
                             <input type = "button" name = "Vizualizare examene"
                                    class = "principal_button"
                                    value = "Vizualizare examene"/><br></br>
                             <input type = "button" name = "Logare"
                                    class = "principal_button"
                                    value = "Logare"/><br></br>
                             <input type = "button" name = "Inregistrare"
                                    class = "principal_button"
                                    value = "Înregistrare"/><br></br>
                         </form>
                 </body>
             </html>
         );
     }
}

export default Home_page;