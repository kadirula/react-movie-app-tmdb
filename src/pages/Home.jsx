import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchFromAPI } from '../api/fetch';
import MovieBanner from '../components/section/MovieBanner';
import NowPlayingMovie from '../components/section/NowPlayingMovie';
import PopularMovie from '../components/section/PopularMovie';
import TopRatedMovie from '../components/section/TopRatedMovie';
import Slider from '../components/sliders/Slider';
import { setGenres } from '../redux/reducers/genresReducer';
import { setError } from '../redux/reducers/siteReducer';



const Home = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Film Türlerini Yakalar
  useEffect(() => {
    fetchFromAPI(`genre/movie/list`).then(res => {
      if (res.status === 200) {
        dispatch(setGenres(res.data.genres));
      }
      else {
        dispatch(setError(res))
        navigate('/error');
      }
    })
  }, [])

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
        <NowPlayingMovie />
      </section>
    </>
  )
}

export default Home