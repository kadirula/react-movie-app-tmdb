import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard';
import PageBanner from '../components/PageBanner';
import { fetchFromAPI } from '../api/fetch';
import { setSearchMovie } from "../redux/reducers/searchReducer";
import { setSearchStatus } from "../redux/reducers/siteReducer";
import Loading from '../components/Loading';
import Pagination from '../components/Pagination';



const Search = () => {

    const dispatch = useDispatch();
    const { value } = useParams();

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [loading, setLoading] = useState(true);

    const { searchMovie } = useSelector(state => state.search);

    useEffect(() => {

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1000);

        fetchFromAPI('search/movie', currentPage, value).then(res => {
            if (res.status === 200) {
                dispatch(setSearchMovie(res.data));
                dispatch(setSearchStatus(false));
                setTotalPage(res.data.total_pages);
            }
        });
    }, [value, currentPage])


    return (
        <>
            <PageBanner title={`SEARCH: ${value}`} />
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
                                        searchMovie &&
                                        searchMovie?.results.map((movie, index) => (
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

export default Search