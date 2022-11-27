import React from 'react';
import TopRatedSection from '../components/section/TopRatedSection';
import Slider from '../components/sliders/Slider';



const Home = () => {
  return (
    <>
      <Slider />
      <section className="section section-top-rated">
        <TopRatedSection />
        
      </section>
    </>
  )
}

export default Home