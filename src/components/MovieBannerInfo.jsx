import React from 'react'
import { Link } from 'react-router-dom'

const MovieBannerInfo = ({movieId, title, overview}) => {
    return (
        <div className="movie-banner__info">
            <h4 className="movie-banner__title">{title}</h4>
            <p className="movie-banner__desc">{overview}</p>
            <Link to={`/movie/${movieId}`} className='button d-inline-block'>Detail</Link>
        </div>
    )
}

export default MovieBannerInfo