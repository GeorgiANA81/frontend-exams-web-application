import {atom} from "recoil";

const value = [
    {teacher: 'Vasile Popescu', academicYear: 3, subject: 'Matrici Integrale', date: '20.08.2020 06:00'},
    {teacher: 'Vasile Popescu', academicYear: 1, subject: 'Functii Matematice', date: '22.08.2020 14:00'},
    {teacher: 'Vasile Popescu', academicYear: 3, subject: 'Functii Matematice', date: '22.08.2020 14:00'},
    {teacher: 'Miruna Pop', academicYear: 1, subject: 'Programare in Pseudo-Cod', date: '24.08.2020 20:00'},
    {teacher: 'Miruna Pop', academicYear: 3, subject: 'Programare in Pseudo-Cod', date: '24.08.2020 20:00'},
    {teacher: 'Miruna Pop', academicYear: 2, subject: 'Programare in Pseudo-Cod', date: '24.08.2020 20:00'},
    {teacher: 'Melania Mateescu', academicYear: 1, subject: 'Lexica limbii franceze', date: '25.08.2020 22:00'},
    {teacher: 'Melania Mateescu', academicYear: 2, subject: 'Lexica limbii franceze', date: '25.08.2020 22:00'},
]

export const examsList = atom({
    key: 'examsList',
    default: value
})