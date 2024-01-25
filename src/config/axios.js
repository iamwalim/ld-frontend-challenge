import axios from 'axios';

const reqConfig = {
    headers: {
        'Content-Type': 'application/json',
    },
};

const api = axios.create(reqConfig);

export default api;