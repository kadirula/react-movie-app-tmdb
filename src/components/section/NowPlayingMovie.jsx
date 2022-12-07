import React from 'react'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchFromAPI } from '../../api/fetch'
import { setNowPlayingMovies } from '../../redux/reducers/movieReducer'
import { setError } from '../../redux/reducers/siteReducer'
import Heading from '../Heading'
import MovieSlider from '../sliders/MovieSlider'

const NowPlayingMovie = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { nowPlayingMovies } = useSelector(state => state.movie);

    useEffect(() => {
        fetchFromAPI(`movie/now_playing`).then(res => {
            if (res.status === 200) {
                // api tarafından gelen tarih aralığında olan filmleri filtreler ve tarihe göre sıralama yapar
                const filterMovie = res.data.results
                    .filter(movie =>
                        (new Date(movie.release_date) > new Date(res.data.dates.minimum)) &&
                        (new Date(movie.release_date) < new Date(res.data.dates.maximum)))
                    .sort((a, b) => new Date(b.release_date) - new Date(a.release_date));

                dispatch(setNowPlayingMovies(filterMovie));
            }
            else{
                dispatch(setError(res))
                navigate('/error');
            }

        })
    }, [])

    return (
        <Container>
            <Heading
                title='MOVIES IN THE CINEMA'
                desc='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga hic nihil voluptate doloremque atque. Culpa.'
            />
            <MovieSlider movies={nowPlayingMovies} />
        </Container>
    )
}

export default NowPlayingMovie