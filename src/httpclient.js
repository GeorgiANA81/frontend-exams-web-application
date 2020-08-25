const axios = require('axios').default;

const headers = {}

const user = JSON.parse(window.localStorage.getItem('exam_user') || '{}')

if (user.token) {
    headers['Authorization'] = `Bearer ${user.token}`
}

const $axios = axios.create({
    baseURL: 'http://localhost:8080',
    headers
})

export default $axios