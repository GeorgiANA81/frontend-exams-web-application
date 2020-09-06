import React from "react";
import {examDelete, examsList} from "../user/api/exams";
import {useRecoilValue} from "recoil";
import {NavLink} from "react-router-dom";
import $axios from "../httpclient";
import routes from "../routes";

const StudentExams = () => {
    const exams = useRecoilValue(examDelete)
    const data = useRecoilValue(examsList);

    window.localStorage.setItem('exams_delete', JSON.stringify(exams))

    const apiDelete = event => {
        const id = parseInt(event.target.dataset.exam)

        $axios.delete(`/api/exam/${id}/delete`)
            .then(async r => {
                alert("Examenul a fost sters cu succes!")
                window.location.reload()
            })
            .catch(e => alert("Stergerea examenului a esuat."))
    }

    return (
        data.map((exam, index) => (
            <tr key={exam.id}>
                <td>{exam.teacher}</td>
                <td>{exam.academicYear}</td>
                <td>{exam.course}</td>
                <td>{exam.date}</td>
                <td>
                    <NavLink to={`/examen/modifica/${exam.id}`} className={"btn btn-primary"}>Modifica</NavLink>
                    <button onClick={apiDelete} data-exam={exam.id} className={"btn btn-danger"}>Sterge</button>
                </td>
            </tr>
        ))
    );
}

const resetFilters = () => {
    window.localStorage.removeItem('exam_filter')
    window.location.href = routes.exams.list
}

function ListExam() {
    return (
        <div className={"student-exams"}>
            <button className={"btn btn-primary"} onClick={resetFilters}>Resetează filtre</button>
            <h1>Examenele urmatoare</h1>
            <table className="table bg-white">
                <thead>
                <tr>
                    <td>Profesor</td>
                    <td>An</td>
                    <td>Subiect</td>
                    <td>Data</td>
                    <td>Acțiuni</td>
                </tr>
                </thead>
                <tbody>
                <React.Suspense fallback={<tr>
                    <td colSpan={4}>Loading...</td>
                </tr>}>
                    <StudentExams/>
                </React.Suspense>
                </tbody>
            </table>
        </div>
    )
}

export default ListExam