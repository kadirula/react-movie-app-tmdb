import React from 'react'

const MovieBannerInfo = ({title, overview}) => {
    return (
        <div className="movie-banner__info">
            <h4 className="movie-banner__title">{title}</h4>
            <p className="movie-banner__desc">{overview}</p>
            <a href="#" className='button d-inline-block'>Detail</a>
        </div>
    )
}

export default MovieBannerInfo