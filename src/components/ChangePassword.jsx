import React from "react";
import {useRecoilValue} from "recoil";
import {userAuth} from "../user/api/state";
import $axios from "../httpclient";
import routes from "../routes";

const form = {}

const setFormData = (event) => {
    const $el = event.target
    form[$el.name] = $el.value
    console.debug(form)
}

const changePassword = (event) => {
    event.preventDefault()

    console.debug('submitted', form)

    $axios.post('/api/user/change-password', form)
        .then(r => {
            alert("Ti-ai schimbat parola cu succes!")
            window.location.href = routes.exams.list
        })
        .catch(e => alert("Schimbarea parolei a eșuat."))
}

function ChangePassword() {
    const auth = useRecoilValue(userAuth)
    setFormData({ target: { name: 'email', value: auth.user.email }})

    return (
        <div>
            <h1>Schimbare parola</h1>
            <form onSubmit={changePassword}>
                <div className="form-group">
                    <label htmlFor="currentPassword">Parola curentă</label>
                    <input onInput={setFormData} name={"currentPassword"} type="password" autoComplete={"current-password"} className={"form-control"}/>
                </div>
                <div className="form-group">
                    <label htmlFor="newPassword">Parola nouă</label>
                    <input onInput={setFormData} name={"newPassword"} type="password" autoComplete={"new-password"} className={"form-control"}/>
                </div>
                <div className="form-group">
                    <label htmlFor="newPassword2">Confirmă parola nouă</label>
                    <input onInput={setFormData} name={"confirmNewPassword"} type="password" autoComplete={"current-password"} className={"form-control"}/>
                </div>

                <button className={"btn btn-primary"}>Salvează</button>
            </form>
        </div>
    )
}

export default ChangePassword