import { 
  Flex, 
  Text,
  Box,
  Heading,
  Button,
  Spacer,
  ButtonGroup
} from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex 
      bgGradient='linear(to-r, green.200, red.400)' 
      justifyContent={'center'} 
      alignItems={'center'}
    >
      {/* <Text fontSize={'4xl'}>
        BCA eShop
      </Text> */}
      <Box p={'4'}>
        <Heading size={'lg'}>
          BCA Eshop
        </Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap={'2'}>
        <Button colorScheme={'alphaWhite'} variant={'outline'}>Sign up</Button>
        <Button mr={'4'} colorScheme={'alphaWhite'} variant={'outline'}>Log In</Button>
      </ButtonGroup>
    </Flex>
  )
}
