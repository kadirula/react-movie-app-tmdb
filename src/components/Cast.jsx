import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import UserMan from '../assets/user-man.jpg';
import UserWoman from '../assets/user-woman.jpg';

const Cast = () => {

    const { cast } = useSelector(state => state.movie);

    return (
        <>
            <Container>
                <Row>
                    {
                        cast?.map((item, index) => (
                            <Col md={4} lg={3} key={index}>
                                <div className='cast'>
                                    <div className="cast__image">
                                        <img src={
                                            item.profile_path ?
                                            `https://image.tmdb.org/t/p/original${item.profile_path}`
                                            :
                                            item.gender == 2 ? UserMan : UserWoman
                                            } alt={item.name} />
                                    </div>
                                    <div className="cast__info">
                                        <div className="cast__name">{item.name}</div>
                                        <div className="cast__character">Character: <span>{item.character}</span></div>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>

        </>
    )
}

export default Cast