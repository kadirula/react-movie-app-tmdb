import React from 'react'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchFromAPI } from '../../api/fetch'
import { setTopRatedMovies } from '../../redux/reducers/movieReducer'
import Heading from '../Heading'
import MovieSlider from '../sliders/MovieSlider'
import { setError } from '../../redux/reducers/siteReducer'

const TopRatedMovie = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { topRatedMovies } = useSelector(state => state.movie);

    useEffect(() => {
        fetchFromAPI(`movie/top_rated`).then(res => {
            if(res.status === 200){

                // vote_average değeri 7 den büyük 8 tane yakalar.
                const filterMovie = res.data.results.filter(movie => movie.vote_average > 7).slice(0, 8);
                dispatch(setTopRatedMovies(filterMovie));
            }
            else{
                dispatch(setError(res))
                navigate('/error');
            }
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