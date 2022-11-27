import React, { useEffect, useState } from 'react'
import MovieDefaultImage from '../assets/movieDefaultImage.jpg';
import ScrollArrowImage from '../assets/scroll-arrow.png';
import { useDispatch, useSelector } from 'react-redux'
import { fetchFromAPI } from '../api/fetch';
import { setUpcomingMovies } from '../redux/reducers/upcomingReducer';
import Container from 'react-bootstrap/Container';

// Swiper
import { Navigation, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';


const Slider = () => {

    const { upcomingMovies } = useSelector(state => state.upcoming)
    const dispatch = useDispatch();

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

                dispatch(setUpcomingMovies(filterMovies))
            }
        })


    }, [])


    return (
        <div className="slider">
            <Swiper
                className='slider__wrapper'
                modules={[Navigation, EffectFade, Autoplay]}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                    el: '.slider__pagination'
                }}
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
                                    {/* <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path ? movie.backdrop_path : ''}`} alt="" /> */}
                                    <img src={MovieDefaultImage} alt="" />
                                </div>
                                <Container>
                                    <div className="slider__info">
                                        <div className='slider__date'>Release Date: <span>{movie.release_date}</span></div>
                                        <h4 className="slider__title">{movie.title}</h4>
                                        <p className="slider__desc">{movie.overview}</p>
                                        <div className="slider__info-bottom">
                                            {
                                                movie.vote_average > 0 && <span className='slider__vote'>{movie.vote_average}</span>
                                            }
                                            <a href="#" className='button'>Detail</a>
                                        </div>

                                    </div>
                                </Container>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="slider__arrow">
                <img src={ScrollArrowImage} alt="Scroll Arrow" />
            </div>
        </div>
    )
}

export default Slider