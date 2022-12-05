import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from '../../api/fetch';
import Container from 'react-bootstrap/Container';
import Genres from '../Genres';
import { Link } from 'react-router-dom';
import { setUpcomingMovies } from '../../redux/reducers/movieReducer'
import { useDispatch, useSelector } from 'react-redux';

// Swiper
import { Navigation, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';


const Slider = () => {

    const dispatch = useDispatch();
    const { upcomingMovies } = useSelector(state => state.movie);

    useEffect(() => {

        // YAKLAŞAN FİLMLER
        fetchFromAPI(`movie/upcoming`).then(res => {
            if (res.status === 200) {
                /* 
                - ilk olarak filter metodunda gelen tarih değeri sistem tarihinden büyük olanları yakalıyoruz.
                - Daha sonra yakaladığımız tarih değerlerini sort metodu ile sıralıyoruz. Sistem tarihine en yakın olan tarih ilk olarak gelir.
                */
                const filterMovies = res.data.results
                    .filter(movie => new Date(movie.release_date) > new Date())
                    .sort((a, b) => new Date(a.release_date) - new Date(b.release_date));

                    dispatch(setUpcomingMovies(filterMovies));
            }
        })

    }, [])

    return (
        <div className="slider">
            <Swiper
                className='slider__wrapper'
                modules={[Navigation, EffectFade, Autoplay]}
                slidesPerView={1}
                effect='fade'
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 4000
                }}
            >
                {
                    upcomingMovies?.map((movie, index) => (
                        <SwiperSlide key={index}>
                            <div className="slider__item">
                                <div className="slider__image">
                                    <img src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path ? movie.backdrop_path : ''}`} alt={movie.title} />
                                </div>
                                <Container>
                                    <div className="slider__info">
                                        <div className='slider__date'>Release Date: <span>{movie.release_date}</span></div>
                                        <h4 className="slider__title">{movie.title}</h4>
                                        <p className="slider__desc">{movie.overview}</p>
                                        {
                                            movie.genre_ids.length > 0 &&
                                            <Genres movieGenres={movie.genre_ids} />
                                        }

                                        <div className="slider__info-bottom">
                                            {
                                                movie.vote_average > 0 && <span className='slider__vote'>{movie.vote_average}</span>
                                            }
                                            <Link to={`/movie/${movie.id}`} className='button'>Detail</Link>
                                        </div>

                                    </div>
                                </Container>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Slider