import React from "react";
import {examDelete, examsList} from "../user/api/exams";
import {useRecoilState, useRecoilValue} from "recoil";
import {NavLink} from "react-router-dom";
import $axios from "../httpclient";

function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

const StudentExams = () => {
    const [exams, setExams] = useRecoilState(examDelete)
    const data = useRecoilValue(examsList);

    const isMarkedForDelete = examID => exams.findIndex(e => e.id === examID) > -1

    const markForDelete = (event) => {
        const examID = JSON.parse(event.target.dataset.exam)
        const index = exams.findIndex((exam) => exam.id === examID.id);

        if (-1 === index) {
            setExams([...exams, examID])
        } else {
            setExams(removeItemAtIndex(exams, index))
        }
    }

    window.localStorage.setItem('exams_delete', JSON.stringify(exams))

    const apiDelete = event => {
        const id = parseInt(event.target.dataset.exam)

        $axios.delete(`/api/exam/${id}/delete`)
            .then(async r => {
                alert("Examenul a fost sters cu succes!")

                const { data } = await $axios.get('/api/exam/filter')
                window.location.reload()
            })
            .catch(e => alert("Stergerea examenului a esuat."))
    }

    return (
        data.map((exam, index) => (
            <tr key={exam.id}>
                <td>
                    <input type={"checkbox"}
                           checked={isMarkedForDelete(exam.id)}
                           onChange={markForDelete}
                           data-exam={JSON.stringify(exam)}
                    />
                </td>
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

function ListExam() {
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