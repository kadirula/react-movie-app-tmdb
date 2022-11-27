import axios from "axios";
const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = '676e896f3bb979d4566a1fea83360997';

export const fetchFromAPI = async (url) => {
    try {
        const { data, status } = await axios.get(`${baseUrl}${url}?api_key=${apiKey}`);

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