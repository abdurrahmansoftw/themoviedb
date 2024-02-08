import { Box, Grid } from '@mui/material'
import MovieCard from '../components/MovieCard'
import MovieCardSkeleton from '../components/skeleton/MovieCardSkeleton'
import useMovies from '../hooks/useMovies'

const MovieGrid = () => {
  const { movies, error, isLoading } = useMovies()

  const skeletons = [1, 2, 3, 4, 5, 6]

  return (
    <Box sx={{ flexGrow: 1 }}>
      {error && <p>{error}</p>}
      <Grid container spacing={2}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <MovieCardSkeleton key={skeleton} />
            </Grid>
          ))}

        {movies.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3} xl={2}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default MovieGrid
