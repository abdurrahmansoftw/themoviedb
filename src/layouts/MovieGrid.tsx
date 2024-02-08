import { useEffect, useState } from 'react'
import apiClient from '../services/apiClient'

interface Movie {
  id: number
  original_title: string
}

interface FetchMovieRespose {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

const MovieGrid = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    apiClient
      .get<FetchMovieRespose>('/popular')
      .then((res) => res.data.results)
      .catch((err) => setError(err.message))
  }, [])

  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.original_title}</li>
        ))}
      </ul>
    </div>
  )
}

export default MovieGrid
