import React from 'react';
import "../Student_page.css";
import {useRecoilState} from "recoil";
import {examsList} from "../user/api/exams";
import {userAuth} from "../user/api/state";
import routes from "../routes";

const components = {
    ListExam() {
        return (
            <div className={"student-exams"}>
                <h1>Examenele urmatoare</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <td>Profesor</td>
                        <td>An</td>
                        <td>Subiect</td>
                        <td>Data</td>
                    </tr>
                    </thead>
                    <tbody>
                    <StudentExams/>
                    </tbody>
                </table>
            </div>
        )
    },
    AddExam() {
        return (<h1>Adaugare examen</h1>)
    },
    EditExam() {
        return (<h1>Modificare examen</h1>)
    },
    DeleteExam() {
        return (<h1>Stergere examen</h1>)
    },
    ChangePassword() {
        return (<h1>Schimbare parola</h1>)
    },
    Logout() {
        const [auth, setAuth] = useRecoilState(userAuth)

        setAuth({
            authenticated: false,
            user: null
        })

        window.location.href = routes.pages.home
    },
}

const StudentExams = () => {
    const examsListRender = []

    const [exams] = useRecoilState(examsList)
    const [auth] = useRecoilState(userAuth)

    exams
        .filter(exam => exam.academicYear === auth.user.academicYear)
        .forEach(exam => {
            examsListRender.push(
                <tr>
                    <td>{exam.teacher}</td>
                    <td>{exam.academicYear}</td>
                    <td>{exam.subject}</td>
                    <td>{exam.date}</td>
                </tr>
            )
        })

    return examsListRender
}

let selectedComponent = components.ListExam

const StudentPage = () => {
    return (
        <div className="start">
            <div className="row">
                <div className="col-8 student-page">
                    {selectedComponent()}
                </div>
                <div className="col-4">
                    <button className={"btn btn-primary btn-block"}>Filtrare</button>
                    <hr/>
                    <h4>Examenele mele</h4>
                    <ul className={"list-group"}>
                        <li className="list-group-item"><a href={"#"} onClick={selectedComponent = 'AddExam'}>Adăugare examen</a></li>
                        <li className="list-group-item"><a href={"#"} onClick={selectedComponent = 'DeleteExam'}>Ștergere examen</a></li>
                    </ul>
                    <hr/>
                    <div className="list-group">
                        <li className="list-group-item"><a href={"#"} onClick={selectedComponent = "ChangePassword"}>Modificare parolă</a></li>
                        <li className="list-group-item"><a href={"#"} onClick={selectedComponent = "Logout"}>Deconectare</a></li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentPage;