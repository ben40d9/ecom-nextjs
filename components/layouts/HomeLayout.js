import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { Flex } from "@chakra-ui/react";

export default function HomeLayout(props) {
  return (
    <>
      <Flex
        direction="column"
        align="stretch"
        maxW={{ xl: "1200px" }}
        m="0 auto"
        {...props}
      >
        <Header />
        {props.children}
        <Footer />
      </Flex>
    </>
  );
}
