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

$axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.debug('interceptor:', error)

    return Promise.reject(error);
});

export default $axios