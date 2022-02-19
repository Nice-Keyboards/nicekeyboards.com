import {
  Box,
  useColorModeValue,
  Container,
  Flex,
  chakra,
  Text,
  Table,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";
import theme from "../@chakra-ui/gatsby-plugin/theme";
import FindAStore from "../components/find-a-store";
import Layout from "../components/layout";

const stores = [
  {
    region: "North America",
    stores: [
      {
        name: "Boardsource.xyz",
        url: "https://boardsource.xyz/store/5f4a1733bbaa5c635b83ed67",
        country: "US",
        type: "custom",
        stock: {
          tag: ".status__tag",
          inStock: "In Stock",
          outOfStock: "Just Ran Out",
        },
      },
      {
        name: "Clawsome Boards",
        url: "https://www.clawboards.xyz/shop/p/nicenano",
        country: "US",
        type: "squarespace",
      },
      {
        name: "Clickety Split",
        url: "https://clicketysplit.ca/products/nice-nano-v2",
        country: "CA",
        type: "shopify",
      },
      {
        name: "KeyHive",
        url: "https://keyhive.xyz/shop/nicenano",
        country: "US",
        type: "squarespace",
      },
      {
        name: "Little Keyboards",
        url: "https://www.littlekeyboards.com/products/nice-nano",
        country: "US",
        type: "shopify",
      },
      {
        name: "MKUltra Corp.",
        url: "https://mkultra.click/nice-nano-v2/",
        country: "US",
        type: "klaviyo",
        stock: {
          link: "https://fast.a.klaviyo.com/api/v1/catalog/bigcommerce/product-variants?a=WfsDAk&p=298",
        },
      },
      {
        name: "Typeractive.xyz",
        url: "https://typeractive.xyz/products/nice-nano",
        country: "US",
        type: "shopify",
      },
      {
        name: "1upkeyboards",
        url: "https://1upkeyboards.com/shop/controllers/nicenano-ble-controller/",
        country: "US",
        type: "woocommerce",
      },
    ],
  },
  {
    region: "Europe",
    stores: [
      {
        name: "Mechboards",
        url: "https://mechboards.co.uk/products/nice-nano-v2",
        country: "GB",
        type: "shopify",
      },
      {
        name: "splitkb.com",
        url: "https://splitkb.com/collections/keyboard-parts/products/nice-nano",
        country: "NL",
        type: "shopify",
      },
      {
        name: "42. Keebs",
        url: "https://42keebs.eu/shop/parts/controllers/nicenano-v2-wireless-controller/",
        country: "CZ",
        type: "woocommerce",
      },
    ],
  },
  {
    region: "Australia",
    stores: [
      {
        name: "Daily Clack",
        url: "https://dailyclack.com/products/nice-nano-v2-0",
        country: "AU",
        type: "shopify",
      },
      {
        name: "Custom KBD",
        url: "https://customkbd.com/collections/other-components/products/nice-nano",
        country: "AU",
        type: "shopify",
      },
    ],
  },
  {
    region: "Asia",
    stores: [
      {
        name: "Rectangles.Store",
        url: "https://rectangles.store/products/nice-nano-v2-0",
        country: "IN",
        type: "shopify",
      },
      {
        name: "Next Keyboard Club",
        url: "https://nextkeyboard.club/product/nicenano/",
        country: "PH",
        type: "woocommerce",
      },
    ],
  },
];

const gray900 = theme.colors.gray[900];
const gray600 = theme.colors.gray[600];

const niceNano = () => {
  return (
    <Layout>
      <Helmet>
        <title>nice!nano - Nice Keyboards</title>
        <meta
          name="description"
          content="The nice!nano is a Pro Micro drop-in replacement board that makes building wireless keyboards a breeze."
        />
      </Helmet>
      <Box mb={20}>
        <Box
          as="section"
          pt={{ base: "4rem", md: "6rem" }}
          pb="0.01rem"
          backgroundImage={`url('/nicenanobg-${useColorModeValue(
            "light",
            "dark"
          )}.svg')`}
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Container maxW="1280px" my="2rem">
            <Flex justify="space-evenly" alignItems="center" wrap="wrap">
              <Box
                mr="1em"
                maxHeight="50vh"
                maxWidth="275px"
                w="100%"
                ml="1rem"
              >
                <StaticImage
                  src="../images/nicenano-v2.png"
                  alt="nice!nano"
                  height={400}
                  placeholder="none"
                  imgStyle={{ objectFit: "contain", maxHeight: "50vh" }}
                  loading="eager"
                  draggable={false}
                  formats={["auto", "webp", "avif"]}
                  quality={80}
                />
              </Box>
              <Box textAlign="center" pt="2rem">
                <chakra.h1
                  maxW="20ch"
                  mx="auto"
                  fontSize={{ base: "2.25rem", sm: "3rem", lg: "4rem" }}
                  fontFamily="heading"
                  letterSpacing="tight"
                  fontWeight="bold"
                  mb="16px"
                  lineHeight="1.2"
                >
                  Meet the
                  <Box
                    as="span"
                    color={useColorModeValue("cyan.500", "cyan.300")}
                  >
                    {" "}
                    nice!nano
                  </Box>
                  .
                </chakra.h1>

                <Text
                  maxW="560px"
                  mx="auto"
                  opacity={0.7}
                  fontSize={{ base: "lg", lg: "xl" }}
                  mt="6"
                >
                  The nice!nano is a Pro Micro drop-in replacement board that
                  makes building wireless keyboards a breeze.
                </Text>
              </Box>
            </Flex>
          </Container>
        </Box>
        <Box
          as="section"
          background={useColorModeValue("gray.100", "gray.700")}
          py="0.01rem"
        >
          <Container maxW="1280px" my="2rem">
            <Flex
              justify="space-evenly"
              alignItems="center"
              wrap="wrap-reverse"
              minH="30rem"
            >
              <Box textAlign="center" pt="2rem">
                <chakra.h1
                  maxW="20ch"
                  mx="auto"
                  fontSize={{ base: "2.25rem", sm: "3rem", lg: "4rem" }}
                  fontFamily="heading"
                  letterSpacing="tight"
                  fontWeight="bold"
                  mb="16px"
                  lineHeight="1.2"
                >
                  <Box
                    as="span"
                    color={useColorModeValue("cyan.500", "cyan.300")}
                  >
                    Ultra{" "}
                  </Box>
                  Low Power.
                </chakra.h1>

                <Text
                  maxW="560px"
                  mx="auto"
                  opacity={0.7}
                  fontSize={{ base: "lg", lg: "xl" }}
                  mt="6"
                >
                  Built using power-conscious design and parts, the nice!nano
                  stretches battery life to its limits.
                </Text>
              </Box>
              <Box
                mr="1em"
                maxHeight="50vh"
                maxWidth="350px"
                w="100%"
                ml="1rem"
                css={css`
                  filter: drop-shadow(
                    0px 10px 20px ${useColorModeValue(gray600, gray900)}
                  );
                `}
              >
                <StaticImage
                  src="../images/nicenano-v2-2.png"
                  alt="nice!nano"
                  height={400}
                  placeholder="none"
                  imgStyle={{ objectFit: "contain", maxHeight: "50vh" }}
                  loading="eager"
                  draggable={false}
                  formats={["auto", "webp", "avif"]}
                  quality={80}
                />
              </Box>
            </Flex>
          </Container>
        </Box>
        <Box as="section">
          <Container maxW="1280px" my="2rem">
            <Flex justify="space-evenly" alignItems="center" wrap="wrap">
              <Box mr="1em" height="450" maxHeight="50vh" ml="1rem">
                <video
                  height={450}
                  style={{ maxHeight: "50vh", height: "450px" }}
                  autoPlay
                  playsInline
                  loop
                  muted
                >
                  <source
                    src="/nicenano-thin.mov"
                    type={`video/quicktime; codecs=hvc1`}
                  />
                  <source
                    src="/nicenano-thin.webm"
                    type={`video/webm; codecs=vp9`}
                  />
                </video>
              </Box>
              <Box textAlign="center" pt="2rem">
                <chakra.h1
                  maxW="20ch"
                  mx="auto"
                  fontSize={{ base: "2.25rem", sm: "3rem", lg: "4rem" }}
                  fontFamily="heading"
                  letterSpacing="tight"
                  fontWeight="bold"
                  mb="16px"
                  lineHeight="1.2"
                >
                  Super
                  <Box
                    as="span"
                    color={useColorModeValue("cyan.500", "cyan.300")}
                  >
                    {" "}
                    Thin
                  </Box>
                  .
                </chakra.h1>

                <Text
                  maxW="560px"
                  mx="auto"
                  opacity={0.7}
                  fontSize={{ base: "lg", lg: "xl" }}
                  mt="6"
                >
                  With a mid-mount USB-C port, the nice!nano is only 3.2mm
                  thick. That's thinner than a Pro Micro.
                </Text>
              </Box>
            </Flex>
          </Container>
        </Box>
        <Box
          as="section"
          background={useColorModeValue("gray.100", "gray.700")}
          py="0.01rem"
        >
          <Container maxW="1280px" my="2rem">
            <Flex
              justify="space-evenly"
              alignItems="center"
              wrap="wrap-reverse"
              minH="30rem"
            >
              <Box textAlign="center" pt="2rem">
                <chakra.h1
                  maxW="20ch"
                  mx="auto"
                  fontSize={{ base: "2.25rem", sm: "3rem", lg: "4rem" }}
                  fontFamily="heading"
                  letterSpacing="tight"
                  fontWeight="bold"
                  mb="16px"
                  lineHeight="1.2"
                >
                  Drag and Drop
                  <Box
                    as="span"
                    color={useColorModeValue("cyan.500", "cyan.300")}
                  >
                    {" "}
                    Programming
                  </Box>
                  .
                </chakra.h1>

                <Text
                  maxW="560px"
                  mx="auto"
                  opacity={0.7}
                  fontSize={{ base: "lg", lg: "xl" }}
                  mt="6"
                >
                  The included UF2 bootloader makes updating the firmware as
                  easy as dragging and dropping a file. No extra software
                  required.
                </Text>
              </Box>
              <Box
                mr="1em"
                maxHeight="50vh"
                maxWidth="500px"
                w="100%"
                ml="1rem"
                css={css`
                  filter: drop-shadow(
                    0px 10px 20px ${useColorModeValue(gray600, gray900)}
                  );
                `}
              >
                <StaticImage
                  src="../images/drag-n-drop.png"
                  alt="nice!nano"
                  height={400}
                  placeholder="none"
                  imgStyle={{ objectFit: "contain", maxHeight: "50vh" }}
                  loading="eager"
                  draggable={false}
                  formats={["auto", "webp", "avif"]}
                  quality={80}
                />
              </Box>
            </Flex>
          </Container>
        </Box>
        <Box as="section">
          <Container maxW="1280px" my="2rem">
            <Flex justify="space-evenly" alignItems="center" wrap="wrap">
              <FindAStore stores={stores} />
              <Box textAlign="center" pt="3rem">
                <chakra.h1
                  maxW="20ch"
                  mx="auto"
                  fontSize={{ base: "2.25rem", sm: "3rem", lg: "4rem" }}
                  fontFamily="heading"
                  letterSpacing="tight"
                  fontWeight="bold"
                  mb="16px"
                  lineHeight="1.2"
                >
                  Tech Specs
                </chakra.h1>

                <Table variant="simple">
                  <Tbody>
                    <Tr>
                      <Td>Microcontroller</Td>
                      <Td isNumeric>Nordic nRF52840</Td>
                    </Tr>
                    <Tr>
                      <Td>Flash</Td>
                      <Td isNumeric>1MB</Td>
                    </Tr>
                    <Tr>
                      <Td>RAM</Td>
                      <Td isNumeric>256KB</Td>
                    </Tr>
                    <Tr>
                      <Td>GPIO Pins</Td>
                      <Td isNumeric>21</Td>
                    </Tr>
                    <Tr>
                      <Td>Battery Charger</Td>
                      <Td isNumeric>4.2V Lithium @ 100/500mA rate</Td>
                    </Tr>
                    <Tr>
                      <Td>Voltage</Td>
                      <Td isNumeric>3.3V</Td>
                    </Tr>
                    <Tr>
                      <Td>Quiescent Current</Td>
                      <Td isNumeric>~20μA</Td>
                    </Tr>
                    <Tr>
                      <Td>PCB</Td>
                      <Td isNumeric>2U" ENIG, Tg 170 FR4</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
            </Flex>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
};

export default niceNano;
