import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:5000/api';
const api = axios.create({ baseURL: API_BASE });

export default api;
