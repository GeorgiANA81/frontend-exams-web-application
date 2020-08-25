import React from "react";

const addExam = e => {

}

const state = {}

const setState = (event) => {
    state[event.target.name] = event.target.value
}

function AddExam() {
    return (
        <div>
            <h1>Adaugare examen</h1>

            <form onSubmit={addExam}>
                <div>
                    <label htmlFor={"bla"}>bla</label>
                    <input name={"bla"} onInput={setState} />
                </div>
            </form>
        </div>
    )
}

export default AddExam