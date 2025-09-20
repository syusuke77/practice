import axios from "axios";

//创建实例
const api = axios.create({
    baseURL: '/',
    timeout: 6000,
    headers: {'X-Custom-Header': 'foobar'}
})

//添加请求拦截器
api.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

  // 创建一个GET请求的封装函数
// export const get = async (url, params = {}) => {
//     try {
//       const response = await api.get(url, { params });
//       return response;
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       throw error; // 可以根据需要重新抛出错误或进行其他错误处理
//     }
// };
   
  // 创建一个POST请求的封装函数
//  export const post = async (url, data = {}) => {
//     try {
//         const response = await api.post(url, data);
//         return response;
//     } catch (error) {
//         console.error('Error posting data:', error);
//         throw error; // 可以根据需要重新抛出错误或进行其他错误处理
//     }
// };

export default api;