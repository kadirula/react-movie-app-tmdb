import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Images = () => {

    const { images } = useSelector(state => state.movie);

    return (
        <Container>
            <Row>
                {
                    images.map((image, index) => (
                        <Col sm={4}>
                            <img src={`https://image.tmdb.org/t/p/w780${image.file_path}`} className='img-fluid' alt="" />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Images