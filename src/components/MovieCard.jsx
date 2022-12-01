import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { HiPlay } from "react-icons/hi";
import ModalContent from './modal/ModalContent';
import { useDispatch } from 'react-redux';
import { setMovieModal } from '../redux/reducers/modalReducer'

const MovieCard = ({ movie }) => {

    const dispatch = useDispatch();

    const showModal = () => {
        dispatch(setMovieModal({
            modal: true,
            movie: movie
        }))
    }

    return (
        <>
            <div className="movie-card">
                <div className="movie-card__image">
                    <img src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`} alt={movie.title} />
                </div>
                {
                    movie.vote_average > 0 &&
                    <div className="movie-card__vote">
                        <AiFillStar className='movie-card__vote-icon' />
                        {movie.vote_average} / 10
                    </div>
                }

                <div className="movie-card__info">
                    <div className="movie-card__text">
                        <h4 className='movie-card__title'>{movie.title}</h4>
                        <p className='movie-card__desc'>
                            {movie.overview.length > 80 ? movie.overview.substring(0, 80) + ' ...' : movie.overview}
                        </p>
                    </div>
                    <div className="movie-card__bottom">
                        <a href='#' className="movie-card__button">Detail</a>
                        <span className="movie-card__date">{movie.release_date}</span>
                    </div>
                </div>
                <div className="movie-card__play" onClick={showModal}>
                    <HiPlay className="movie-card__play-icon" />
                </div>
            </div>
        </>
    )
}

export default MovieCard