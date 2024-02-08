import { Card, styled } from '@mui/material'
import { ReactNode } from 'react'

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

interface Props {
  children: ReactNode
}

const MovieCardContainer = ({ children }: Props) => {
  return <ModernCard>{children}</ModernCard>
}

export default MovieCardContainer
