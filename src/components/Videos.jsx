import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';

const Videos = () => {

    const { videos } = useSelector(state => state.movie);
    return (
        <Container>
            <Row>
                {
                    videos.map((video, index) => (
                        <Col sm={6} key={index}>
                            <ReactPlayer
                                url={`https://www.youtube.com/watch?v=${video?.key}`}
                                controls
                                className='w-100'
                                style={{minHeight: '40rem'}}
                            />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Videos