import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

import './App.css';

import HomePage from "./components/HomePage";
import RegisterPage from "./components/RegisterPage";
import StudentPage from "./components/StudentPage";
import TeacherPage from "./components/TeacherPage";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                            <li>
                                <Link to="/student">Student</Link>
                            </li>
                            <li>
                                <Link to="/teacher">Teacher</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/">
                            <HomePage/>
                        </Route>
                        <Route path="/register">
                            <RegisterPage/>
                        </Route>
                        <Route path="/student">
                            <StudentPage/>
                        </Route>
                        <Route path="/teacher">
                            <TeacherPage/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
