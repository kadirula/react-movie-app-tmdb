import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchFromAPI } from '../api/fetch';
import { setError } from '../redux/reducers/siteReducer';

const VideoCard = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { movieModal } = useSelector(state => state.modal);
    const [movieVideo, setMovieVideo] = useState(null);

    useEffect(() => {
        fetchFromAPI(`movie/${movieModal.movie?.id}/videos`).then(res => {
            if (res.status === 200) {
                const movieVideoFiltered = res.data.results
                    .filter(video => video.type === 'Teaser' || video.type === 'Trailer')
                    .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))[0];
                if (movieVideoFiltered) {
                    setMovieVideo(movieVideoFiltered);
                }
                else {
                    setMovieVideo(res.data.results[0]);
                }
            }
            else{
                dispatch(setError(res))
                navigate('/error');
            }
        })
    }, [])


    return (
        <div className='video-card'>
            {
                movieVideo ?
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${movieVideo?.key}`}
                        className='video-card__player' controls
                    />
                    :
                    <div> Video Bulunamadı </div>
            }

        </div>
    )
}

export default VideoCard