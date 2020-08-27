export default {
    pages: {
        home: '/',
        register: '/securitate/inregistrare',
        login: '/securitate/conectare',
    },
    teacher: {
        index: '/teacher'
    },
    exams: {
        list: '/examene',
        add: '/examen/adaugare',
        edit: '/examen/modifica/:id',
        delete: '/examen/sterge'
    },
    user: {
        change_password: '/cont/schimbare-parola',
        logout: '/cont/deconectare'
    }
}