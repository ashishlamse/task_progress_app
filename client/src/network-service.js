// import axios from 'axios';
import AxiosInstance from '../src/api/axios';
import * as utils from '../src/utils/index';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

export default {
    setupInterceptors: (store, history) => {
        console.log("store, history", store, history)
        AxiosInstance.interceptors.response.use(response => {
            console.log('axios.interceptors.response', response);
            return response;
        }, (error) => {
            console.log("🚀 ~ file: network-service.js ~ line 39 ~ error", error.response.status, error)
            if (error.response.status === 401) {
                console.log("401 401 401", error)
                //if token is unauthorized or missed, it will redirect to login
                utils.logout();
                setTimeout(() => {
                    return window.location.href = '/'
                }, 1000)
            }
            return Promise.reject(error);
        });

        // Add a request interceptor
        AxiosInstance.interceptors.request.use(
            (config) => {
                console.log('axios.interceptors.request', config);
                //will set jwt token to header before every api request
                utils.setCorsHeader();
                const token = utils.getAccessToken();
                if (token) {
                    config.headers['x-access-token'] = token
                    console.log(config);
                }
                return config;
            },
            (error) => {
                console.log('axios.interceptors.request', error);
                // you can add some information before send it.
                return Promise.reject(error);
            }
        );
    },
};



// // Add a response interceptor
// axios.interceptors.response.use(
//     response => {
//         console.log('axios.interceptors.response', response);
//     },
//     error => {
//         console.log('axios.interceptors.response', error);
//         // you can add some information before send it.
//         return Promise.reject(error);
//     }
// );

// // Add a request interceptor
// axios.interceptors.request.use(
//     (response) => {
//         console.log('axios.interceptors.request', response);
//         // you can add some information before send it.
//         // conf.headers['Auth'] = 'some token'
//         return response;
//     },
//     (error) => {
//         console.log('axios.interceptors.request', error);
//         // you can add some information before send it.
//         return Promise.reject(error);
//     }
// );