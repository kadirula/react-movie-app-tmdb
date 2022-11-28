import { AiFillStar } from 'react-icons/ai';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <div className="movie-card__image">
                <img src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`} alt={movie.title} />
                {/* <img src={MovieDefaultImage} alt="" /> */}
            </div>
            <div className="movie-card__vote">
                <AiFillStar className='movie-card__vote-icon' />
                {movie.vote_average} / 10
            </div>
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

        </div>
    )
}

export default MovieCard