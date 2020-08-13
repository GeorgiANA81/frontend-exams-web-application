import {atom} from "recoil";

const value = {
    authenticated: false,
    user: null
}

let storedUser = window.localStorage.getItem('exam_user')
if (storedUser) {
    value.authenticated = true
    value.user = JSON.parse(storedUser)
}

export const userAuth = atom({
    key: 'userAuth',
    default: value
})