import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router';
import VideoCard from './components/VideoCard';
import ModalContent from './components/modal/ModalContent';
import { useSelector } from 'react-redux';

const App = () => {

  const { movieModal } = useSelector(state => state.modal);

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
