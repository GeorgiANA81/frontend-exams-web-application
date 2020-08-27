import React from "react";
import $axios from "../httpclient";

const state = {}
const lazyForm = [
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

const addExam = e => {
    e.preventDefault()

    $axios.post('/api/exam/add', state)
        .then(r => {
            alert("Examenul a fost adaugat cu succes!")
            window.location.href = '/examene'
        })
        .catch(e => {
            alert("Adaugarea examenului a esuat.")
        })
}

const ExamForm = () => lazyForm.map((form, index) => (
    <div key={index} className={"form-group"}>
        <label htmlFor={form.name}>{form.label}</label>
        <input className={"form-control"} type={form.type} name={form.name} onInput={setState}/>
    </div>
))

const setState = (event) => {
    const { name, value, type } = event.target

    state[name] = 'number' === type ? parseInt(value) : value
}

function AddExam() {
    return (
        <div>
            <h1>Adaugare examen</h1>

            <form onSubmit={addExam}>
                <ExamForm/>

                <button className={"btn btn-success"} type={"submit"} onClick={addExam}>Add</button>
            </form>
        </div>
    )
}

export default AddExam