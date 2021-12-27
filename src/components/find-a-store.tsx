import { Box, chakra, Flex, Heading, Link, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Flags from "country-flag-icons/react/3x2";

interface StoreRegion {
  region: string;
  stores: { name: string; url: string; country: string}[];
}

const shuffleArray = (arr: Array<any>): Array<any> => {
  let array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default function FindAStore({stores}: {stores: StoreRegion[]}) {
  return (
    <Box textAlign="center" pt="3rem" id="find-a-store">
      <chakra.h1
        maxW="20ch"
        mx="auto"
        fontSize={{ base: "2.25rem", sm: "3rem", lg: "4rem" }}
        fontFamily="heading"
        letterSpacing="tight"
        fontWeight="bold"
        mb="16px"
        lineHeight="1.2"
        css={{ scrollMarginBlock: "6rem" }}
        data-group=""
        pl="1.5rem"
      >
        Find a Store
        <chakra.a
          aria-label="anchor"
          color="cyan.500"
          fontWeight="normal"
          outline="none"
          _focus={{ opacity: 1, boxShadow: "outline" }}
          opacity={0}
          _groupHover={{ opacity: 1 }}
          ml="0.375rem"
          href={`#find-a-store`}
        >
          #
        </chakra.a>
      </chakra.h1>

      {stores.map((region) => (
        <React.Fragment key={region.region}>
          <Heading
            color={useColorModeValue("gray.600", "cyan.300")}
            pt="1.5rem"
            pb="0.5rem"
          >
            {region.region}
          </Heading>
          <Flex justify="center" alignItems="center" wrap="wrap" maxW="460px">
            {shuffleArray(region.stores).map((store) => {
              const Flag = Flags[store.country];
              return (
                <Link
                  target="_blank"
                  href={store.url}
                  rel="noopener"
                  py="0.5rem"
                  px="1rem"
                  key={store.name}
                  textDecor="underline"
                  color={useColorModeValue("cyan.500", "gray.100")}
                  fontSize="1.25rem"
                  display="flex"
                  alignItems="center"
                >
                  <Flag width="2rem" style={{ marginRight: "0.25rem" }} />
                  {store.name}
                </Link>
              );
            })}
          </Flex>
        </React.Fragment>
      ))}
    </Box>
  );
}