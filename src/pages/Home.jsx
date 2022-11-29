import React from 'react';
import MovieBanner from '../components/section/MovieBanner';
import PopularSection from '../components/section/PopularSection';
import TopRatedSection from '../components/section/TopRatedSection';
import Slider from '../components/sliders/Slider';



const Home = () => {
  return (
    <>
      <Slider />
      <section className="section section-top-rated" id='top-rated'>
        <TopRatedSection />
      </section>
      <div className="section section-movie-banner py-0">
        <MovieBanner />
      </div>
      <section className="section section-popular">
        <PopularSection />
      </section>
    </>
  )
}

export default Home