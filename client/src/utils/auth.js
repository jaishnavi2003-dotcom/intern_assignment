export function setToken(t){ localStorage.setItem('token', t); }
export function getToken(){ return localStorage.getItem('token'); }
export function removeToken(){ localStorage.removeItem('token'); }
