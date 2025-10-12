import './index.css'
import './App.css'
import MovieSearchComponent  from './components/SearchMovies'


export default function App() {
  return (
    <div className='container'>
    <p className='title'>React Movie Search</p>
      <MovieSearchComponent />
    </div>
  )
}