import { defineStore } from 'pinia'
import { reactive } from 'vue';
import homeData from '../mocks/homeData';

export const useHomeData = defineStore('homeData', () => {
    let homeTableData = reactive(homeData.homeTableData);

    const getData = (page = 1, limit = 10) => {
        let data = [];
        if(page){
            data = homeTableData.slice((page-1)*limit, page.limit);
        }
        let tableLength = homeTableData.length;
        return { data,  tableLength}
    }

    const getDetail = (id) => {
        let data = homeTableData.filter(item=> item.id == id)?.[0] ?? {};
        return data
    }

    const modifyData = (id, data) => {
        let index = homeTableData.findIndex(item=> item.id == id);
        homeTableData[index] = data;
    }

    const pushData = (data) => {
        if(data) {
            homeTableData = [...homeTableData, data]
        }
    }

    return { homeTableData, pushData, getData, getDetail,modifyData}
})