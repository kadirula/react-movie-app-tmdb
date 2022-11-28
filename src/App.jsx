import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom'
import { fetchFromAPI } from './api/fetch';
import { router } from './routes/router';
import { useDispatch } from 'react-redux';
import { setGenres } from './redux/reducers/genresReducer'

const App = () => {

  const dispatch = useDispatch();

  // Film Türlerini Yakalar
  useEffect(() => {
    fetchFromAPI(`genre/movie/list`).then(res => {
      // console.log(res.data.genres);
      if(res.status === 200){
        dispatch(setGenres(res.data.genres));
      }
    })
  }, [])
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
