import { 
  Flex, 
  Text,
  Box,
  Heading,
  Button,
  Spacer,
  ButtonGroup,
  Grid,
  GridItem
} from '@chakra-ui/react';

export default function Home() {
  return (
    <Grid
  templateAreas={`
    "header header"
    "hero banner"
    "nav nav"
    "main lain"
    "footer footer"
  `}
  gridTemplateRows={'50px 1fr 30px 30px'}
  gridTemplateColumns={''}
  h='500px'
  gap='2'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem area={'header'}>
    <Flex 
      bgGradient='linear(to-r, green.200, red.400)' 
      justifyContent={'center'} 
      alignItems={'center'}
    >
      <Box p={'2'}>
        <Heading size={'lg'}>
          BCA Eshop
        </Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap={'2'}>
        <Button colorScheme={'alphaWhite'} variant={'outline'}>Sign up</Button>
        <Button mr={4} colorScheme={'alphaWhite'} variant={'outline'}>Log In</Button>
      </ButtonGroup>
    </Flex>
  </GridItem>
  <GridItem pl='2' bg='yellow.300' colSpan={2} rowSpan={1} area={'hero'}>
    Hero Banner
  </GridItem>
  <GridItem pl='2' bg='pink.300' area={'nav'}>
    <Flex>
      <Box p={'2'}>
        wallet
      </Box>
      <Box p={'2'}>
        cup
      </Box>
      <Box p={'2'}>
        tshirt
      </Box>
    </Flex>
  </GridItem>
  <GridItem pl='2' bg='green.300' area={'main'}>
    div_box#1
  </GridItem>
  <GridItem pl='2' bg='green.300' area={'lain'}>
    div_box#2
  </GridItem>
  <GridItem pl='2' bg='blue.300' area={'footer'}>
    Footer
  </GridItem>
</Grid>
  )
}
