import { Container, Flex } from '@radix-ui/themes'
import NavLinks from './NavLinks'

const Navbar = () => {
  return (
    <nav className='border-b-2  mb-5 px-5 py-5'>
      <Container>
        <Flex justify='between'>
          <Flex align='center' gap='5'>
            <NavLinks />
          </Flex>
        </Flex>
      </Container>
    </nav>
  )
}

export default Navbar
