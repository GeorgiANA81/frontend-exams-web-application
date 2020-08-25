import {selector} from "recoil";
import $axios from "../../httpclient";

export const examsList = selector({
    key: 'examsListSelector',
    get: async ({ get }) => {
        try{
            const response = await $axios.get('/api/exam/filter');
            const { data } = response;
            return data;
        }catch(error){
            throw error;
        }
    }
});