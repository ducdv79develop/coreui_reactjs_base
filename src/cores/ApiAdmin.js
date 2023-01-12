import axios from 'axios';
import { API_FULL_URL } from "cores/Constants.js";
import { getStorageData } from 'hooks/useLocalStorage';

export default axios.create({
    baseURL: API_FULL_URL + '/admin/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + getStorageData('admin_token', null)
    }
});
