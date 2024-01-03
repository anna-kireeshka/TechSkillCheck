import axios from "axios";

export const HTTP = axios.create({
    baseURL: `${window?.REACT_APP_API || ''}`,
});