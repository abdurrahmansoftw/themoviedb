import { Box, Grid } from '@mui/material'
import MovieCard from '../components/MovieCard'
import MovieCardContainer from '../components/MovieCardContainer'
import MovieCardSkeleton from '../components/skeleton/MovieCardSkeleton'
import useMovies from '../hooks/useMovies'

const MovieGrid = () => {
  const { data, error, isLoading } = useMovies()

  const skeletons = [1, 2, 3, 4, 5, 6]

  return (
    <Box sx={{ flexGrow: 1 }}>
      {error && <p>{error}</p>}
      <Grid container spacing={2}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={skeleton}>
              <MovieCardContainer>
                <MovieCardSkeleton />
              </MovieCardContainer>
            </Grid>
          ))}

        {data.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3} xl={2}>
            <MovieCardContainer>
              <MovieCard movie={movie} />
            </MovieCardContainer>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default MovieGrid
