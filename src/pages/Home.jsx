import React from 'react';
import MovieBanner from '../components/section/MovieBanner';
import MovieSliderSection from '../components/section/MovieSliderSection';
import Slider from '../components/sliders/Slider';



const Home = () => {
  return (
    <>
      <Slider />
      <section className="section" id='top-rated'>
        <MovieSliderSection
          title='TOP RATED'
          desc='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga hic nihil voluptate doloremque atque. Culpa.'
          type='top_rated'
        />
      </section>
      <section className="section section-movie-banner py-0">
        <MovieBanner type='popular' />
      </section>
      <section className="section">
        <MovieSliderSection
          title='POPULAR'
          desc='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga hic nihil voluptate doloremque atque. Culpa.'
          type='popular'
        />
      </section>
      <section className="section section-movie-banner py-0">
        <MovieBanner type='upcoming' />
      </section>
      <section className="section">
        <MovieSliderSection
          title='MOVIES IN THE CINEMA'
          desc='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga hic nihil voluptate doloremque atque. Culpa.'
          type='now_playing'
        />
      </section>
    </>
  )
}

export default Home