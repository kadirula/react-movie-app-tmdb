import React from 'react'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFromAPI } from '../../api/fetch'
import { setPopularMovies } from '../../redux/reducers/movieReducer'
import Heading from '../Heading'
import MovieSlider from '../sliders/MovieSlider'
import { setError } from '../../redux/reducers/siteReducer'
import { useNavigate } from 'react-router-dom'

const PopularMovie = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { popularMovies } = useSelector(state => state.movie);

    useEffect(() => {
        fetchFromAPI(`movie/popular`).then(res => {
            if (res.status === 200) {

                const filterMovie = res.data.results.sort((a, b) => b.popularity - a.popularity);
                dispatch(setPopularMovies(filterMovie));
            }
            else {
                dispatch(setError(res))
                navigate('/error');
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

export default PopularMovie