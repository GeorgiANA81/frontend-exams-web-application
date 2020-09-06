import React from "react";
import routes from "../routes";

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

    get lazyForm() {
        return [
            {type: 'number', label: 'Academic Year', name: 'academicYear'},
            {type: 'text', label: 'Session', name: 'session'},
            {type: 'number', label: 'Year of Study', name: 'yearOfStudy'},
            {type: 'text', label: 'Faculty', name: 'faculty'},
            {type: 'text', label: 'Section', name: 'section'},
            {type: 'text', label: 'Course', name: 'course'},
            {type: 'text', label: 'Teacher', name: 'teacher'},
            {type: 'number', label: 'Number of Seats', name: 'numberOfSeats'},
            {type: 'text', label: 'Date', name: 'date'},
        ]
    }

    setFilter(event) {
        const $el = event.target,
            fn = $el.name,
            fv = $el.value,
            ft = $el.type

        this.setState({
            filters: {
                ...this.state.filters,
                [fn]: ft === 'number' ? parseInt(fv) : fv
            }
        })
    }

    applyFilters() {
        window.localStorage.setItem('exam_filter', JSON.stringify(this.state.filters))
        window.location.href = routes.exams.list
    }
    resetFilters() {
        window.localStorage.removeItem('exam_filter')
        window.location.reload()
    }

    render() {
        return (
            <div>
                {this.lazyForm.map((form, index) => (
                    <div key={index} className={"form-group"}>
                        <label htmlFor={form.name}>{form.label}</label>
                        <input className={"form-control"} type={form.type} name={form.name} onInput={this.setFilter}/>
                    </div>
                ))}

                <button className={"btn btn-primary"} onClick={this.applyFilters}>Aplică</button>
                <button className={"btn btn-primary"} onClick={this.resetFilters}>Resetează</button>
            </div>
        )
    }
}

function ListExam() {
    return (
        <div className={"student-exams"}>
            <h1>Filtrare examene</h1>
            <FilterForm />
        </div>
    )
}

export default ListExam