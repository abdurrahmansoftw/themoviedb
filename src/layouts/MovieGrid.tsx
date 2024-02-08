import { Box, Grid } from '@mui/material'
import MovieCard from '../components/MovieCard'
import useMovies from '../hooks/useMovies'

const MovieGrid = () => {
  const { movies, error } = useMovies()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {movies.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3} xl={2}>
            <MovieCard movie={movie}>{movie.title}</MovieCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default MovieGrid
