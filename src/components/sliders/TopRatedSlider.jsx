
import { useSelector, useDispatch } from 'react-redux';
import MovieCard from '../MovieCard';


// Swiper
import { Navigation, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

const TopRatedSlider = () => {

    const { topRatedMovies } = useSelector(state => state.top_rated);
    

    return (
        <Swiper
            className='top-rated-slider'
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
                topRatedMovies?.map((movie, index) => (
                    <SwiperSlide key={index}>
                        <MovieCard movie={movie} />

                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default TopRatedSlider