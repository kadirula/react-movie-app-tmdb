import React from 'react';
import MovieBanner from '../components/section/MovieBanner';
import NowPlayingMovie from '../components/section/NowPlayingMovie';
import PopularMovie from '../components/section/PopularMovie';
import TopRatedMovie from '../components/section/TopRatedMovie';
import Slider from '../components/sliders/Slider';



const Home = () => {
  return (
    <>
      <Slider />
      
      <section className="section">
        <TopRatedMovie />
      </section>

      <section className="section section-movie-banner py-0">
        <MovieBanner type='popular' />
      </section>

      <section className="section">
        <PopularMovie />
      </section>

      <section className="section section-movie-banner py-0">
        <MovieBanner type='upcoming' />
      </section>

      <section className="section">
        <NowPlayingMovie/>
      </section>
    </>
  )
}

export default Home