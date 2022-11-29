import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import Heading from '../Heading';
import MovieSlider from '../sliders/MovieSlider';
import { fetchFromAPI } from '../../api/fetch';

const TopRatedSection = () => {

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        /* EN ÇOK OY ALAN FİLMLER */
        fetchFromAPI(`movie/top_rated`).then(res => {

            if (res.status === 200) {
                // vote_average değeri 7 den büyük 8 tane yakalar.
                const filterTopRatedMovie = res.data.results.filter(movie => movie.vote_average > 7).slice(0, 8);
                setPopularMovies(filterTopRatedMovie);
            }
        })
    }, [])

    return (
        <Container>
            <Heading
                title='TOP RATED'
                desc='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga hic nihil voluptate doloremque atque. Culpa.'
            />
            <MovieSlider movies={popularMovies} />

        </Container>
    )
}

export default TopRatedSection