import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom'
import { fetchFromAPI } from './api/fetch';
import { router } from './routes/router';
import { useDispatch, useSelector } from 'react-redux';
import { setGenres } from './redux/reducers/genresReducer'
import Modal from './components/modal/Modal';
import VideoCard from './components/VideoCard';
import ModalContent from './components/modal/ModalContent';

const App = () => {

  const { movieModal } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  // Film Türlerini Yakalar
  useEffect(() => {
    fetchFromAPI(`genre/movie/list`).then(res => {
      // console.log(res.data.genres);
      if (res.status === 200) {
        dispatch(setGenres(res.data.genres));
      }
    })
  }, [])


  return (
    <>
      <RouterProvider router={router} />
      {
        movieModal.modal &&
        <ModalContent>
          <VideoCard/>
        </ModalContent>
      }
    </>
  );
}

export default App;
