import axios from 'axios';
import { API_FULL_URL } from "cores/Constants.js";

export default axios.create({
    baseURL: API_FULL_URL + '/auth/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});
