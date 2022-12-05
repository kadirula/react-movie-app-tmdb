import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from '../../api/fetch';
import ReactPlayer from 'react-player'
import { HiPlay } from "react-icons/hi";
import PuffLoader from "react-spinners/PuffLoader";
import MovieBannerInfo from '../MovieBannerInfo';
import { useDispatch } from 'react-redux';

const MovieBanner = ({ type }) => {

    const [movie, setMovie] = useState(null);
    const [movieVideo, setMovieVideo] = useState(null);
    const [isVideo, setIsVideo] = useState(true);
    const [videoLoading, setVideoLoading] = useState(true);



    useEffect(() => {
        fetchFromAPI(`movie/${type}`).then(res => {
            if (res.status === 200) {

                let filteredMovie;

                if (type === 'popular') {
                    filteredMovie = res.data.results.sort((a, b) => b.popularity - a.popularity)[0];
                }

                if (type === 'upcoming') {
                    filteredMovie = res.data.results
                        .filter(movie => new Date(movie.release_date) > new Date())
                        .sort((a, b) => new Date(b.release_date) - new Date(a.release_date))[0];
                }

                setMovie(filteredMovie);

                fetchFromAPI(`movie/${filteredMovie?.id}/videos`).then(res => {
                    if (res.status === 200) {
                        const movieVideoFiltered = res.data.results
                            .filter(video => video.type === 'Teaser' || video.type === 'Trailer')
                            .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))[0];
                        setMovieVideo(movieVideoFiltered);
                    }
                })
            }

        })

    }, [])

    const toggleVideoPlaying = () => {
        setIsVideo(!isVideo);
        setTimeout(() => {
            setVideoLoading(!videoLoading);
        }, 1500);
    }

    return (
        <>
            <div className='movie-banner'>
                <div className="movie-banner__left">
                    <div
                        className="movie-banner__image"
                        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w780/${movie?.backdrop_path})` }}
                    />
                    {
                        movieVideo &&
                        <MovieBannerInfo
                            movieId={movie?.id}
                            title={movie?.title}
                            overview={movie?.overview}
                        />
                    }
                </div>
                <div className="movie-banner__right">
                    {
                        movieVideo ?
                            <>
                                {
                                    isVideo ?
                                        <>
                                            <div
                                                className='movie-banner__poster'
                                                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w780/${movie?.poster_path})` }}
                                            />
                                            <HiPlay className='movie-banner__play' onClick={toggleVideoPlaying} />
                                        </>
                                        :
                                        <>
                                            {
                                                videoLoading ?
                                                    <PuffLoader color='#4ade80' />
                                                    :
                                                    <ReactPlayer
                                                        url={`https://www.youtube.com/watch?v=${movieVideo?.key}`}
                                                        className='movie-banner__video' controls playing
                                                    />
                                            }

                                        </>
                                }

                            </>
                            :
                            <>
                                <MovieBannerInfo
                                    movieId={movie?.id}
                                    title={movie?.title}
                                    overview={movie?.overview}
                                />
                            </>
                    }

                </div>
            </div>
        </>
    )
}

export default MovieBanner