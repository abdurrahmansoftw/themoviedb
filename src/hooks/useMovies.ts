import { useEffect, useState } from 'react'
import { Movie } from '../layouts/MovieGrid'
import apiClient from '../services/apiClient'

interface Genre {
  genre_ids: number
}

export interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: Genre[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

interface FetchMovieRespose {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    apiClient
      .get<FetchMovieRespose>('/popular')
      .then((res) => setMovies(res.data.results))
      .catch((err) => setError(err.message))
  }, [])

  return { movies, error }
}

export default useMovies
