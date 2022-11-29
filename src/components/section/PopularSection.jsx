import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Heading from '../Heading';
import MovieSlider from '../sliders/MovieSlider';
import { fetchFromAPI } from '../../api/fetch';

const PopularSection = () => {

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        /* EN ÇOK OY ALAN FİLMLER */
        fetchFromAPI(`movie/popular`).then(res => {

            if (res.status === 200) {
                // popularity değeri en büyükten küçüğe doğru sıralar.
                const filterPopularMovie = res.data.results
                .sort((a, b) => b.popularity - a.popularity);
                setPopularMovies(filterPopularMovie);
            }
        })
    }, [])

    return (
        <Container>
            <Heading
                title='POPULAR'
                desc='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga hic nihil voluptate doloremque atque. Culpa.'
            />
            <MovieSlider movies={popularMovies} />

        </Container>
    )
}

export default PopularSection