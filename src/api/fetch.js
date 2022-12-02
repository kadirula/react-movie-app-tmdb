import axios from "axios";
const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = '676e896f3bb979d4566a1fea83360997';

export const fetchFromAPI = async (url, page = 1, query = '') => {
    try {
        const { data, status } = await axios.get(`${baseUrl}${url}?api_key=${apiKey}&page=${page}&query=${query}`);

        return {
            status: status,
            data: data
        }
    } catch (err) {
        return {
            status: false,
            errorMessage: err.message
        }
    }
}