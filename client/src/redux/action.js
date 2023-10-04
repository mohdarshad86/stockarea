import axios from "axios";
import { ADD_WH, GET_WH, UPDATE_WH } from "./reducer";
const BASE_URL = process.env.BASE_URL || "http://localhost:3001";

export const fetchData = () => (dispatch) => {
    axios.get(`${BASE_URL}/api/warehouse`)
        .then((response) => {
            dispatch(GET_WH(response.data));
        })
        .catch((error) => {
            console.error(error);
        });
}

export const addWH = (formData) => (dispatch) => {
    axios.post(`${BASE_URL}/api/warehouse`, formData)
        .then((response) => {
            dispatch(ADD_WH(response.data));
        })
        .catch((error) => {
            console.error(error);
        });
}
export const updateWH = (formData) => (dispatch) => {
    axios.post(`${BASE_URL}/api/warehouse/${formData._id}`, formData)
        .then((response) => {
            dispatch(UPDATE_WH(response.data));
        })
        .catch((error) => {
            console.error(error);
        });
}

