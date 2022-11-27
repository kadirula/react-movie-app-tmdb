import { Container } from 'react-bootstrap';
import Heading from '../Heading';
import TopRatedSlider from '../sliders/TopRatedSlider';

const TopRatedSection = () => {
    return (
        <Container>
            <Heading
                title='TOP RATED'
                desc='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga hic nihil voluptate doloremque atque. Culpa.'
            />
            <TopRatedSlider />

        </Container>
    )
}

export default TopRatedSection