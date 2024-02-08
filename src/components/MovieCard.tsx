import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import styled from 'styled-components'
import { Movie } from '../hooks/useMovies'

const ModernCard = styled(Card)({
  borderRadius: 16,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform .2s ease-in',
  '&:hover': {
    boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
    transform: 'scale(1.05)',
  },
})

const ModernCardMedia = styled(CardMedia)({
  paddingTop: '56.25%', // 16:9 aspect ratio
})

const ModernCardContent = styled(CardContent)({
  flexGrow: 1,
})

interface Props {
  movie: Movie
}

const MovieCard = ({ movie }: Props) => {
  return (
    <ModernCard>
      <CardActionArea>
        <ModernCardMedia
          image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        />
        <ModernCardContent>
          <Typography gutterBottom variant='h6' component='h6'>
            {movie.title}
          </Typography>
        </ModernCardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          {movie.release_date}
        </Button>
      </CardActions>
    </ModernCard>
  )
}

export default MovieCard
