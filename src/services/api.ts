import axios from 'axios';
export const API = axios.create({
  // baseURL: 'https://social-media-networks-api.herokuapp.com/api',
  baseURL: 'http://localhost:5000/api',
  headers: { 
    // "Content-Type": "application/json"
    "x-auth-token": localStorage.getItem('token') }
});