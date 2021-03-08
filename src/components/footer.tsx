import { Box, HStack, useColorModeValue, VStack } from "@chakra-ui/react"
import React from "react"

export default function Footer() {
  return (
    <VStack
      alignSelf="flex-end"
      width="100%"
      position="absolute"
      left={0}
      bottom={0}
      py="2rem"
    >
      <HStack></HStack>
      <Box fontSize=".875rem" color={useColorModeValue("gray.500", "gray.400")}>Copyright © Nice Technologies LLC</Box>
    </VStack>
  );
}