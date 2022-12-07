import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PageBanner from '../components/PageBanner'
import { fetchFromAPI } from '../api/fetch';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';
import Loading from '../components/Loading';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setError } from '../redux/reducers/siteReducer';

const UpcomingMovies = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);

        fetchFromAPI('movie/upcoming', currentPage).then(res => {
            if (res.status === 200) {
                // popularity değeri en büyükten küçüğe doğru sıralar.
                const filterUpcomingMovies = res.data.results
                .filter(movie => new Date(movie.release_date) > new Date())
                .sort((a, b) => new Date(a.release_date) - new Date(b.release_date));

                setUpcomingMovies(filterUpcomingMovies);
                setTotalPage(res.data.total_pages)
            }
            else{
                dispatch(setError(res))
                navigate('/error');
            }
        })
    }, [currentPage])



    return (
        <>
            <PageBanner title='UPCOMING MOVIES' />
            <div className="section">
                <Container>
                    {
                        loading ?
                            <div className='text-center'>
                                <Loading loading={loading} />
                            </div>
                            :
                            <>
                                <Row>
                                    {
                                        upcomingMovies.map((movie, index) => (
                                            <Col md={4} lg={3} key={index} className='my-2'>
                                                <MovieCard movie={movie} />
                                            </Col>
                                        ))
                                    }

                                </Row>
                            </>
                    }

                </Container>
            </div>

        </>
    )
}

export default UpcomingMovies