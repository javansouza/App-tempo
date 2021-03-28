import axios from 'axios';

//https://api.hgbrasil.com/weather?key=51175515&lat=-23.682&lon=-46.875

export const key = '51175515';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
});

export default api;

