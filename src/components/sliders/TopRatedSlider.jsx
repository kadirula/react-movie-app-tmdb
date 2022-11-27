import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFromAPI } from '../../api/fetch';
import { setTopRatedMovies } from '../../redux/reducers/topRatedMovieReducer'
import MovieDefaultImage from '../../assets/movieDefaultImage.jpg';
import { AiFillStar } from 'react-icons/ai';

// Swiper
import { Navigation, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

const TopRatedSlider = () => {

    const { topRatedMovies } = useSelector(state => state.top_rated);
    const dispatch = useDispatch();

    useEffect(() => {
        /* EN ÇOK OY ALAN FİLMLER */
        fetchFromAPI(`movie/top_rated`).then(res => {

            if (res.status === 200) {
                // vote_average değeri 7 den büyük 8 tane yakalar.
                const filterTopRatedMovie = res.data.results.filter(movie => movie.vote_average > 7).slice(0, 8);
                dispatch(setTopRatedMovies(filterTopRatedMovie));
            }
        })
    }, [])

    return (
        <Swiper
            className='top-rated-slider'
            modules={[Navigation]}
            slidesPerView={3}
            centeredSlides={true}
            roundLengths={true}
            loop={true}
            loopAdditionalSlides={30}
            navigation={true}
        // autoplay={{
        //     delay: 4000
        // }}
        >
            {
                topRatedMovies?.map((movie, index) => (
                    <SwiperSlide key={index}>
                        <div className="movie-card">
                            <div className="movie-card__image">
                                {/* <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" /> */}
                                <img src={MovieDefaultImage} alt="" />
                            </div>
                            <div className="movie-card__vote">
                                <AiFillStar className='movie-card__vote-icon' />
                                8.6 / 10
                            </div>
                            <div className="movie-card__info">
                                <div className="movie-card__text">
                                    <h4 className='movie-card__title'>{movie.title}</h4>
                                    <p className='movie-card__desc'>
                                        {movie.overview.length > 50 ? movie.overview.substring(0, 50) + ' ...' : movie.overview}
                                    </p>
                                </div>
                                <div className="movie-card__bottom">
                                    <a href='#' className="movie-card__button">Detail</a>
                                    <span className="movie-card__date">{movie.release_date}</span>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default TopRatedSlider