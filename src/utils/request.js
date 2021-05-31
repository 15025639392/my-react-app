import axios from 'axios';
import { getToken } from './auth';
import { message } from 'antd';
const service = axios.create({
    baseURL: '',
    timeout: 5000, // request timeout
    validateStatus: function() {
        return true; // default
    }
});

service.interceptors.request.use(
    config => {
        const token = getToken();
        if (token) {
            config.headers['token'] = token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    response => {
        const res = response.data;
        if (res.code !== 0) {
            message.error(res.msg, 5000);
            if (res.code === 413) {
                message.error(res.msg, 5000);
            }
            return Promise.reject(new Error(res.msg || 'Error'));
        } else {
            return res;
        }
    },
    error => {
        message.error(error, 5000);
        return Promise.reject(error);
    }
);

export default service;
