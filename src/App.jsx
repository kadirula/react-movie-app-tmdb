import { useEffect, useRef } from 'react';
import { RouterProvider, useNavigate } from 'react-router-dom'
import { fetchFromAPI } from './api/fetch';
import { router } from './routes/router';
import { useDispatch, useSelector } from 'react-redux';
import { setGenres } from './redux/reducers/genresReducer'
import VideoCard from './components/VideoCard';
import ModalContent from './components/modal/ModalContent';
import { setError, setSearchStatus } from './redux/reducers/siteReducer';

const App = () => {

  const { movieModal } = useSelector(state => state.modal);

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
      <RouterProvider router={router} />

      {
        movieModal.modal &&
        <ModalContent>
          <VideoCard />
        </ModalContent>
      }
    </>
  );
}

export default App;
