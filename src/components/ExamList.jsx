import React from "react";
import {examDelete, examsList} from "../user/api/exams";
import {useRecoilValue} from "recoil";
import {NavLink} from "react-router-dom";
import $axios from "../httpclient";

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

class FilterForm extends React.Component {
    constructor() {
        super({});

        this.state = {
            filters: JSON.parse(window.localStorage.getItem('exam_filter') || '{}')
        }


        this.applyFilters = this.applyFilters.bind(this)
        this.resetFilters = this.resetFilters.bind(this)
        this.setFilter = this.setFilter.bind(this)
    }

    setFilter(event) {
        const $el = event.target,
            fn = $el.name,
            fv = $el.value,
            ft = $el.type

        console.debug('FilterForm.setFilter', fn, ft, fv)

        this.setState({
            filters: {
                ...this.state.filters,
                [fn]: ft === 'number' ? parseInt(fv) : fv
            }
        })
    }

    applyFilters() {
        window.localStorage.setItem('exam_filter', JSON.stringify(this.state.filters))
        window.location.reload()
    }
    resetFilters() {
        window.localStorage.removeItem('exam_filter')
        window.location.reload()
    }

    render() {
        return (
            <tr>
                <td><input onInput={this.setFilter} defaultValue={this.state.filters.teacher} className={"form-control"} type={"text"} name={"teacher"}/></td>
                <td><input onInput={this.setFilter} defaultValue={this.state.filters.yearOfStudy} className={"form-control"} type={"number"} name={"yearOfStudy"}/></td>
                <td><input onInput={this.setFilter} defaultValue={this.state.filters.subject} className={"form-control"} type={"text"} name={"subject"}/></td>
                <td><input onInput={this.setFilter} defaultValue={this.state.filters.date} className={"form-control"} type={"text"} name={"date"}/></td>
                <td>
                    <button className={"btn btn-primary"} onClick={this.applyFilters}>Aplică</button>
                    <button className={"btn btn-primary"} onClick={this.resetFilters}>Resetează</button>
                </td>
            </tr>
        )
    }
}

function ListExam() {
    return (
        <div className={"student-exams"}>
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
                <FilterForm/>
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