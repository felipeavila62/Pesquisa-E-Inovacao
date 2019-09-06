import axios from 'axios';

const api = axios.create({
  baseURL: 'https://receitasrn.herokuapp.com',
});

export default api;
