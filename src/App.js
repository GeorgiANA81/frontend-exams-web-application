import React from 'react';
import {useRecoilState, useRecoilValue} from 'recoil'
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom'

import './App.css';

import {userAuth} from './user/api/state'
import routes from "./routes";

import HomePage from "./components/HomePage";
import TeacherPage from "./components/TeacherPage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import ListExam from "./components/ExamList";
import AddExam from "./components/AddExam";
import EditExam from "./components/EditExam";
import DeleteExam from "./components/DeleteExam";
import ChangePassword from "./components/ChangePassword";
import Logout from "./components/Logout";

const UserMenu = () => {
    const auth = useRecoilValue(userAuth)

    const isTeacher = auth.user.roles.includes("ROLE_TEACHER")

    return (
        <div className="col-4">
            <h4>Examenele mele</h4>
            <ul className={"list-group"}>
                <li className="list-group-item"><NavLink to={routes.exams.list}>Listă examen</NavLink></li>
                {isTeacher ? <li className="list-group-item"><NavLink to={routes.exams.add}>Adăugare examen</NavLink></li> : ''}
            </ul>
            <hr/>
            <div className="list-group">
                <li className="list-group-item"><NavLink to={routes.user.change_password}>Modificare parolă</NavLink>
                </li>
                <li className="list-group-item"><NavLink to={routes.user.logout}>Deconectare</NavLink></li>
            </div>
        </div>
    )
}

const App = () => {
    const [auth, setAuth] = useRecoilState(userAuth)

    // onLogout
    // const onLogout = () => {
    //     setAuth({
    //         authenticated: false,
    //         user: null
    //     })
    //
    //     // logoutUnset()
    //
    //     // history.push(routes.user.login)
    // }

    if (!auth.authenticated
        && (
            routes.pages.home !== window.location.pathname
            && routes.pages.login !== window.location.pathname
            && routes.pages.register !== window.location.pathname
        )
    ) {
        window.localStorage.clear()
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
            <div className="container">
                <div className="row">
                    <div className={auth.authenticated ? "col-8" : "col-12"}>
                        <Switch>
                            {/* pages */}
                            <Route path={routes.pages.home} component={HomePage} exact/>
                            <Route path={routes.pages.register} component={RegisterPage}/>
                            <Route path={routes.pages.login} component={LoginPage}/>

                            {/* teacher */}
                            <Route path={routes.teacher.index} component={TeacherPage}/>

                            {/* exams */}
                            <Route path={routes.exams.list} component={ListExam}/>
                            <Route path={routes.exams.add} component={AddExam}/>
                            <Route path={routes.exams.edit} component={EditExam}/>
                            <Route path={routes.exams.delete} component={DeleteExam}/>

                            {/* user */}
                            <Route path={routes.user.change_password} component={ChangePassword}/>
                            <Route path={routes.user.logout} component={Logout}/>
                        </Switch>
                    </div>

                    {auth.authenticated ? <UserMenu/> : null}
                </div>
            </div>
        </Router>
    );
}

export default App;
