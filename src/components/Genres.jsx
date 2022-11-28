import { useSelector } from 'react-redux'

const Genre = ({ movieGenres }) => {

  const { genres } = useSelector(state => state.genres);

  return (
    <div className="tag">
      {
        movieGenres.map(movieGenre => {
          return (
            <div className="tag__item">
              #{genres?.filter(genre => genre.id === movieGenre)[0].name}
            </div>
          )
        })
      }
    </div>
  )
}

export default Genre