import { Container } from '@mui/material'
import Navbar from './components/Navbar'
import MovieGrid from './layouts/MovieGrid'

const App = () => {
  return (
    <div>
      <Navbar />

      <Container className='my-5 '>
        <MovieGrid />
      </Container>
    </div>
  )
}

export default App
