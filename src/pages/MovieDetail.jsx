import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../api/fetch';

const MovieDetail = () => {

    const { id } = useParams();


    useEffect(() => {
        fetchFromAPI(`movie/${id}`).then(res => {
            console.log(res);
        })
    }, [id])
    

    return (
        <div>MovieDetail</div>
    )
}

export default MovieDetail