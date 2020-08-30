import {atom, selector} from "recoil";
import $axios from "../../httpclient";

export const examsList = selector({
    key: 'examsListSelector',
    get: async ({get}) => {
        try {
            const params = JSON.parse(window.localStorage.getItem('exam_filter') || '{}')
            const response = await $axios.get('/api/exam/filter', { params });
            const {data} = response;
            return data;
        } catch (error) {
            throw error;
        }
    }
});

export const examDelete = atom({
    key: 'examDelete',
    default: JSON.parse(window.localStorage.getItem('exams_delete') || '[]')
})