import { Button, Flex, Text } from '@radix-ui/themes'

const App = () => {
  return (
    <Flex direction='column' gap='2'>
      <Text>Hello from Radix Themes :)</Text>
      <h1 className='text-3xl font-bold underline'>Hello akaid!</h1>
      <Button>Let's go</Button>
    </Flex>
  )
}

export default App
