import React from 'react';
import {useRecoilState} from 'recoil'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './App.css';

import {userAuth} from './user/api/state'
import routes from "./routes";

import HomePage from "./components/HomePage";
import StudentPage from "./components/StudentPage";
import TeacherPage from "./components/TeacherPage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";

const App = () => {
    const [auth, setAuth] = useRecoilState(userAuth)

    // onLogout
    const onLogout = () => {
        setAuth({
            authenticated: false,
            user: null
        })

        // logoutUnset()

        // history.push(routes.user.login)
    }

    if (!auth.authenticated
        && routes.pages.home !== window.location.pathname
        && routes.pages.login !== window.location.pathname
        && routes.pages.register !== window.location.pathname
    ) {
        window.location.href = routes.pages.login
    }

    if (auth.authenticated
        && routes.pages.home === window.location.pathname
        && routes.pages.login === window.location.pathname
        && routes.pages.register === window.location.pathname
    ) {
        const {type} = auth.user
        window.location.href = routes[type].index
    }

    return (
        <Router>
            <div className="container d-flex">
                <Switch>
                    {/* pages */}
                    <Route path={routes.pages.home} component={HomePage} exact/>
                    <Route path={routes.pages.register} component={RegisterPage}/>
                    <Route path={routes.pages.login} component={LoginPage}/>

                    {/* student */}
                    <Route path={routes.student.index} component={StudentPage}/>

                    {/* teacher */}
                    <Route path={routes.teacher.index} component={TeacherPage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
