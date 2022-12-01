import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import Heading from '../Heading';
import MovieSlider from '../sliders/MovieSlider';
import { fetchFromAPI } from '../../api/fetch';

const MovieSliderSection = ({ title, desc, type }) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        /* EN ÇOK OY ALAN FİLMLER */
        fetchFromAPI(`movie/${type}`).then(res => {

            if (res.status === 200) {

                let filterMovie = null;

                if (type === 'top_rated') {
                    // vote_average değeri 7 den büyük 8 tane yakalar.
                    filterMovie = res.data.results.filter(movie => movie.vote_average > 7).slice(0, 8);
                }
                else if (type === 'popular') {
                    filterMovie = res.data.results.sort((a, b) => b.popularity - a.popularity);
                }
                else if (type === 'now_playing') {
                    // api tarafından gelen tarih aralığında olan filmleri filtreler ve tarihe göre sıralama yapar
                    filterMovie = res.data.results
                        .filter(movie =>
                            (new Date(movie.release_date) > new Date(res.data.dates.minimum)) &&
                            (new Date(movie.release_date) < new Date(res.data.dates.maximum)))
                        .sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
                }
                else {
                    filterMovie = res.data.results;
                }

                setMovies(filterMovie);
            }
        })
    }, [])

    return (
        <Container>
            <Heading
                title={title}
                desc={desc}
            />
            <MovieSlider movies={movies} />

        </Container>
    )
}

export default MovieSliderSection