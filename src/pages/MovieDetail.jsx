import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../api/fetch';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container } from 'react-bootstrap';
import Comment from '../components/Comment';
import { useSelector } from 'react-redux';

const MovieDetail = () => {

    const { id } = useParams();
    const { comments } = useSelector(state => state.comment);

    const [movie, setMovie] = useState(null);


    useEffect(() => {
        fetchFromAPI(`movie/${id}`).then(res => {
            if (res.status === 200) {
                setMovie(res.data);
                // console.log(res.data);
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
                                <Comment movieId={id} />
                            </Tab>
                        }
                        <Tab eventKey="cast" title="Cast">
                            2
                        </Tab>
                        <Tab eventKey="images" title="Images">
                            3
                        </Tab>
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