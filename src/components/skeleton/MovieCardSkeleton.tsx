import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from '@mui/material'

const MovieCardSkeleton = () => {
  return (
    <Card sx={{ height: '100%', overflow: 'hidden' }}>
      <CardActionArea>
        <CardMedia>
          <Skeleton />
        </CardMedia>
        <CardContent>
          <Typography>
            <Skeleton />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button>
          <Skeleton />
        </Button>
      </CardActions>
    </Card>
  )
}

export default MovieCardSkeleton
