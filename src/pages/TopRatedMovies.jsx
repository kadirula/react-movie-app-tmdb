import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PageBanner from '../components/PageBanner'
import { fetchFromAPI } from '../api/fetch';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';
import Loading from '../components/Loading';

const TopRatedMovies = () => {

    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);

        fetchFromAPI('movie/top_rated', currentPage).then(res => {
            if (res.status === 200) {
                // popularity değeri en büyükten küçüğe doğru sıralar.
                const filterTopRatedMovie = res.data.results
                    .filter(movie => movie.vote_average > 7);
                setTopRatedMovies(filterTopRatedMovie);
                setTotalPage(res.data.total_pages)
            }
        })
    }, [currentPage])



    return (
        <>
            <PageBanner title='TOP RATED MOVIES' />
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
                                        topRatedMovies.map((movie, index) => (
                                            <Col sm={4} md={3} key={index} className='my-2'>
                                                <MovieCard movie={movie} />
                                            </Col>
                                        ))
                                    }

                                </Row>
                                <Row>
                                    <Col sm={12}>
                                        <Pagination
                                            currentPage={currentPage}
                                            setCurrentPage={setCurrentPage}
                                            totalPage={totalPage}
                                        />
                                    </Col>
                                </Row>
                            </>
                    }

                </Container>
            </div>

        </>
    )
}

export default TopRatedMovies