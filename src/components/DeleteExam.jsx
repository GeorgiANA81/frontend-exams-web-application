import React from "react";

import {examDelete} from "../user/api/exams";
import {useRecoilState} from "recoil";
import $axios from "../httpclient";
import routes from "../routes";

let examsToDelete = false
const StudentExams = () => {
    const [exams] = useRecoilState(examDelete)

    return (
        exams.map((exam, index) => (
            <tr key={exam.id}>
                <td>{exam.teacher}</td>
                <td>{exam.academicYear}</td>
                <td>{exam.course}</td>
                <td>{exam.date}</td>
            </tr>
        ))
    );
}

const ConfirmDelete = () => {
    const [exams] = useRecoilState(examDelete)

    const deleteExams = () => {
        let deletedCount = 0
        exams.forEach(exam => {
            $axios.delete(`/api/exam/${exam.id}/delete`).then(() => {
                if (deletedCount === exams.length) {
                    window.localStorage.removeItem('exams_delete')
                    window.location.href = routes.exams.list
                }
            }).catch(e => alert(`Nu s-a putut șterge examenul "${exam.course}"`))
        })
    }

    return (
        <div>
            <h1>Stergere examen</h1>
            <p>Ești sigur(ă) că vrei să ștergi următoarele examene din listă?</p>

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

            <button onClick={deleteExams} className={"btn btn-primary"}>DA</button>
        </div>
    )
}

const NoDelete = () => (
    <div>
        <p>Momentan, nu ai niciun examen selectat pentru stergere.</p>
    </div>
)

function DeleteExam() {
    const [exams] = useRecoilState(examDelete)

    examsToDelete = exams.length > 0

    return (
        <div>
            {examsToDelete ? <ConfirmDelete/> : <NoDelete/>}
        </div>
    )
}

export default DeleteExam