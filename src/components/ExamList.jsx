import React from "react";
import {examsList} from "../user/api/exams";
import {useRecoilValue} from "recoil";

const StudentExams = () => {
    const data = useRecoilValue(examsList);

    return (
        data.map((exam, index) => (
            <tr key={index}>
                <td>{exam.teacher}</td>
                <td>{exam.academicYear}</td>
                <td>{exam.course}</td>
                <td>{exam.date}</td>
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