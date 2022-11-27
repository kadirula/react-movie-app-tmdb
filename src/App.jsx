import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom'
import { fetchFromAPI } from './api/fetch';
import { router } from './routes/router';

const App = () => {

  // 829799
  // Paradise City
  useEffect(() => {
    fetchFromAPI(`movie/829799/reviews`).then(data => {

    })
  }, [])
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
