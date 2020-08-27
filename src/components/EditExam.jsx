import React from "react";
import $axios from "../httpclient";

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

export default class EditExam extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: undefined,
            academicYear: undefined,
            yearOfStudy: undefined,
            numberOfSeats: undefined,
            session: '',
            faculty: '',
            section: '',
            course: '',
            teacher: '',
            date: '',
        }

        this.updateModel = this.updateModel.bind(this)
        this.ExamForm = this.ExamForm.bind(this)
        this.updateExam = this.updateExam.bind(this)
    }

    updateModel(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    componentDidMount() {
        const {id} = this.props.match.params
        this.setState({id})

        $axios.get(`/api/exam/${id}`)
            .then(({data}) => {
                this.setState(data)
            })
            .catch(e => alert(e.message))
    }

    ExamForm = () => lazyForm.map((form, index) => (
        <div key={index} className={"form-group"}>
            <label htmlFor={form.name}>{form.label}</label>
            <input className={"form-control"}
                   type={form.type}
                   name={form.name}
                   onInput={this.updateModel}
                   defaultValue={this.state[form.name]}
            />
        </div>
    ))

    updateExam = e => {
        e.preventDefault()

        $axios.put(`/api/exam/${this.state.id}/edit`, this.state)
            .then(r => {
                alert("Examenul a fost modificat cu succes!")
                window.location.href = '/examene'
            })
            .catch(e => {
                alert("Modificarea examenului a esuat.")
            })
    }

    render() {
        return (
            <div>
                <h1>Modifica examen</h1>

                <form onSubmit={this.updateExam}>
                    <this.ExamForm/>

                    <button className={"btn btn-success"} type={"submit"} onClick={this.updateExam}>Update</button>
                </form>
            </div>
        )
    }
}