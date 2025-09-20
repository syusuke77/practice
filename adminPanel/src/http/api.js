// import request from './request';
import homeData from '../mocks/homeData';

export function getList() {
    // return request.get('/mocks/homeData');
}

export function pushData(url,data={}) {
    
     return {
        code: 0,
        response: {
            data: [...homeData[url], data]
        }
     }
}