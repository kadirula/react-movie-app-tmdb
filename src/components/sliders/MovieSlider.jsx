import MovieCard from '../MovieCard';


// Swiper
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

const MovieSlider = ({ movies }) => {

    return (
        <Swiper
            className='movie-slider'
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={10}
            loop={true}
            navigation={true}
            autoplay={{
                delay: 4000
            }}
        >
            {
                movies?.map((movie, index) => (
                    <SwiperSlide key={index}>
                        <MovieCard movie={movie} />

                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default MovieSlider