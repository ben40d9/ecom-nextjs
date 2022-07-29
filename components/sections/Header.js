import {
  Flex,
  Box,
  Heading,
  Button,
  ButtonGroup,
  Spacer,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      bgGradient="linear(to-r, cyan.800, blackAlpha.800)"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box p={"4"}>
        <Heading size={"lg"}>BCA Eshop</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap={"2"}>
        <Button colorScheme={"whiteAlpha"} variant={"outline"}>
          Sign up
        </Button>
        <Button mr={"4"} colorScheme={"whiteAlpha"}>
          Log in
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
