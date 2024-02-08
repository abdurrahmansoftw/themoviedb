import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
  styled,
} from '@mui/material'

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

const MovieCardSkeleton = () => {
  return (
    <ModernCard>
      <CardActionArea>
        <ModernCardMedia>
          <Skeleton />
        </ModernCardMedia>
        <ModernCardContent>
          <Typography>
            <Skeleton />
          </Typography>
        </ModernCardContent>
      </CardActionArea>
      <CardActions>
        <Button>
          <Skeleton />
        </Button>
      </CardActions>
    </ModernCard>
  )
}

export default MovieCardSkeleton
