import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../api/fetch';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container } from 'react-bootstrap';
import Comment from '../components/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { setCast, setComments, setImages } from '../redux/reducers/movieReducer';
import Cast from '../components/Cast';
import Images from '../components/Images';

const MovieDetail = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    const { comments, cast, images } = useSelector(state => state.movie);

    const [movie, setMovie] = useState(null);


    useEffect(() => {
        fetchFromAPI(`movie/${id}`).then(res => {
            if (res.status === 200) {
                setMovie(res.data);
            }
        })

        fetchFromAPI(`movie/${id}/reviews`).then(res => {
            if (res.status === 200) {
                dispatch(setComments(res.data))
            }
        })

        fetchFromAPI(`movie/${id}/credits`).then(res => {
            if (res.status === 200) {
                const filteredCast = res.data.cast.sort((a, b) => a.order - b.order);
                dispatch(setCast(filteredCast))
            }
        })

        fetchFromAPI(`movie/${id}/images`).then(res => {
            if (res.status === 200) {
                dispatch(setImages(res.data.backdrops))
            }
        })

    }, [id])

    return (
        <>
            <div className='movie-detail'>
                <div className="movie-detail__image">
                    <img src={`https://image.tmdb.org/t/p/w780${movie?.backdrop_path ? movie?.backdrop_path : ''}`} alt={movie?.title} />
                </div>
                <div className="movie-detail__info">
                    <h3 className='movie-detail__title'>{movie?.title}</h3>
                    <p className='movie-detail__desc'>{movie?.overview}</p>
                    {
                        movie?.genres &&
                        <div className='tag justify-content-center'>
                            {movie?.genres.map((genre, index) => (
                                <div className='tag__item' key={index}>{genre.name}</div>
                            ))}
                        </div>
                    }
                </div>
            </div>
            <div className="section">
                <Container>
                    <Tabs>
                        {
                            comments?.results.length > 0 &&
                            <Tab eventKey="comments" title="Comments">
                                <Comment />
                            </Tab>
                        }
                        {
                            cast?.length > 0 &&
                            <Tab eventKey="cast" title="Cast">
                                <Cast />
                            </Tab>
                        }
                        {
                            images?.length > 0 &&
                            <Tab eventKey="images" title="Images">
                                <Images />
                            </Tab>
                        }

                        <Tab eventKey="videos" title="Videos">
                            4
                        </Tab>
                    </Tabs>
                </Container>
            </div>
        </>
    )
}

export default MovieDetail