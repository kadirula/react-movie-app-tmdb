import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../api/fetch';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container } from 'react-bootstrap';
import Comment from '../components/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { setCast, setComments, setImages, setVideos } from '../redux/reducers/movieReducer';
import Cast from '../components/Cast';
import Images from '../components/Images';
import Videos from '../components/Videos';
import Loading from '../components/Loading';

const MovieDetail = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    const { comments, cast, images, videos } = useSelector(state => state.movie);



    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        }, 1400);

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

        fetchFromAPI(`movie/${id}/videos`).then(res => {
            if (res.status === 200) {
                const filteredVideo = res.data.results
                    .filter(video =>
                        video.type === 'Teaser' ||
                        video.type === 'Trailer')
                    .sort((a, b) => new Date(b.published_at) - new Date(a.published_at)).slice(0, 2);
                dispatch(setVideos(filteredVideo))
            }
        })

    }, [id])

    if(loading){
        return <div className='section'><Loading loading={loading} /></div>
    }
    return (
        <>
            <div className='movie-detail'>
                <div className="movie-detail__image">
                    <img src={`https://image.tmdb.org/t/p/w780${movie?.backdrop_path ? movie?.backdrop_path : ''}`} alt={movie?.title} />
                </div>
                <div className="movie-detail__info">
                    <h3 className='movie-detail__title'>{movie?.title}</h3>
                    {
                        movie?.genres &&
                        <div className='tag justify-content-center'>
                            {movie?.genres.map((genre, index) => (
                                <div className='tag__item' key={index}>{genre.name}</div>
                            ))}
                        </div>
                    }

                    <p className='movie-detail__desc'>{movie?.overview}</p>

                    {
                        movie?.homepage &&
                        <a href={movie?.homepage} target='_blank' className='button d-inline-block mx-3'>Movie Site</a>
                    }
                    {
                        movie?.imdb_id &&
                        <a href={`https://www.imdb.com/title/${movie?.imdb_id}`} target='_blank' className='button d-inline-block mx-3'>IMDB</a>
                    }
                </div>
            </div>
            <div className="section">
                <Container>
                    <Tabs className='tab'>
                        {
                            cast?.length > 0 &&
                            <Tab className='tab__item' eventKey="cast" title="Cast">
                                <Cast />
                            </Tab>
                        }
                        {
                            comments?.results.length > 0 &&
                            <Tab className='tab__item' eventKey="comments" title="Comments">
                                <Comment />
                            </Tab>
                        }
                        {
                            images?.length > 0 &&
                            <Tab className='tab__item' eventKey="images" title="Images">
                                <Images />
                            </Tab>
                        }
                        {
                            videos?.length > 0 &&
                            <Tab className='tab__item' eventKey="videos" title="Videos">
                                <Videos />
                            </Tab>
                        }


                    </Tabs>
                </Container>
            </div>
        </>
    )
}

export default MovieDetail