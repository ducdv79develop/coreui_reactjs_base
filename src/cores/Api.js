import axios from 'axios';
import { API_FULL_URL } from "cores/Constants.js";

const token_access = 'abc';

export const Auth = axios.create({
    baseURL: API_FULL_URL + '/auth',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export const Admin = axios.create({
    baseURL: API_FULL_URL + '/admin',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token_access
    }
});
