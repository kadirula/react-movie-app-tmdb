import axios from "axios";
const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = process.env.REACT_APP_API_KEY;

export const fetchFromAPI = async (url, page = 1, query = '') => {

    try {
        const { data, status } = await axios.get(`${baseUrl}${url}?api_key=${apiKey}&page=${page}&query=${query}`);

        return {
            status: status,
            data: data
        }
    } catch (err) {
        return {
            status: err.response.status,
            message: err.response.data.status_message
        }
    }
}