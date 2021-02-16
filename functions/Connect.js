import axios from 'axios';

export default axios.create({
    // baseURL: 'http://localhost:8000/api',
    baseURL: 'https://novi-api.armaniimus-webdevelopment.nl/public/api',
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
    }
});