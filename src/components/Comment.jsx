import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchFromAPI } from '../api/fetch';
import { setComments } from '../redux/reducers/commentReducer';

const Comment = ({ movieId }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        fetchFromAPI(`movie/${movieId}/reviews`).then(res => {
            if (res.status === 200) {
                dispatch(setComments(res.data))
            }
        })
    }, []);

    return (
        <div>Comment</div>
    )
}

export default Comment