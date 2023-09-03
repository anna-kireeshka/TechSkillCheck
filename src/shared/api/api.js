import axios from "axios";

export const HTTP = axios.create({
    baseURL: `${process.env.REACT_APP_LOCAL_API}`,
});