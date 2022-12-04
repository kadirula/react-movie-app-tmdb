import React from 'react'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFromAPI } from '../../api/fetch'
import { setTopRatedMovies } from '../../redux/reducers/movieReducer'
import Heading from '../Heading'
import MovieSlider from '../sliders/MovieSlider'

const TopRatedMovie = () => {

    const dispatch = useDispatch();

    const { topRatedMovies } = useSelector(state => state.movie);

    useEffect(() => {
        fetchFromAPI(`movie/top_rated`).then(res => {
            // vote_average değeri 7 den büyük 8 tane yakalar.
            const filterMovie = res.data.results.filter(movie => movie.vote_average > 7).slice(0, 8);
            dispatch(setTopRatedMovies(filterMovie));
        })
    }, [])


    return (
        <>
            <Container>
                <Heading
                    title='TOP RATED'
                    desc='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga hic nihil voluptate doloremque atque. Culpa.'
                />
                <MovieSlider movies={topRatedMovies} />

            </Container>
        </>
    )
}

export default TopRatedMovie