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
  useColorMode,
} from "@chakra-ui/react";
import { css, keyframes } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";
import theme from "../@chakra-ui/gatsby-plugin/theme";
import FindAStore from "../components/find-a-store";
import Layout from "../components/layout";
import { ShopNow } from "../components/shop-now";

const stores = [
  {
    region: "North America",
    stores: [
      {
        name: "Clickety Split",
        url: "https://clicketysplit.ca/products/nice-view",
        country: "CA",
        type: "shopify",
      },
      {
        name: "Typeractive.xyz",
        url: "https://typeractive.xyz/products/nice-view",
        country: "US",
        type: "shopify",
      },
      {
        name: "PrismaKBD",
        url: "https://prismakbd.com/product/niceview/",
        country: "US",
        type: "woocommerce",
      },
      {
        name: "Boardsource.xyz",
        url: "https://boardsource.xyz/store/6355aa61b932b3573dae7f55",
        country: "US",
        type: "custom",
        stock: {
          tag: ".status__tag",
          inStock: "In Stock",
          outOfStock: "Just Ran Out",
        },
      },
    ],
  },
  {
    region: "Europe",
    stores: [
      {
        name: "42. Keebs",
        url: "https://42keebs.eu/shop/parts/niceview-power-efficient-lcd-display/",
        country: "CZ",
        type: "custom",
        stock: {
          tag: ".single_add_to_cart_button",
          inStock: "Add to basket",
          outOfStock: undefined,
        },
      },
      {
        name: "Keycapsss",
        url: "https://keycapsss.com/keyboard-parts/parts/219/nice-view-1.08-e-paper-display",
        country: "DE",
        type: "custom",
        stock: {
          tag: ".buy-btn--cart-add",
          inStock: "Add to",
          outOfStock: undefined,
        },
      },
      {
        name: "splitkb.com",
        url: "https://splitkb.com/products/nice-view",
        country: "NL",
        type: "shopify",
      },
      {
        name: "Mechboards",
        url: "https://mechboards.co.uk/collections/components/products/nice-view-display",
        country: "GB",
        type: "shopify",
      },
    ],
  },
  {
    region: "Asia",
    stores: [
      {
        name: "beekeeb",
        url: "https://shop.beekeeb.com/product/nice-view-with-sockets-power-saving-display-for-wireless-split-keyboard/",
        country: "HK",
        type: "woocommerce",
      },
      {
        name: "Ergo Keyboards",
        url: "https://ergokeyboard.sg/products/nice-view-oled-display",
        country: "SG",
        type: "shopify",
      },
    ],
  },
  {
    region: "Australia",
    stores: [
      {
        name: "KEEBD",
        url: "https://keebd.com/products/nice-view",
        country: "AU",
        type: "shopify",
      },
    ],
  },
];

const gray900 = theme.colors.gray[900];
const gray600 = theme.colors.gray[600];

const disappear = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const fadeMoveDown = keyframes`
  0%   { transform:translate(0,-20px); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { transform:translate(0,20px); opacity: 0; }
`;

const niceView = () => {
  return (
    <Layout>
      <Helmet>
        <title>nice!view - Nice Keyboards</title>
        <meta
          name="description"
          content="The nice!view is a low-power, high refresh rate, premium display for wireless keyboards."
        />
      </Helmet>
      <Box mb={20}>
        <Box
          as="section"
          py={{ base: "4rem", md: "6rem" }}
          css={css`
            background-image: radial-gradient(
                circle at center center,
                ${useColorModeValue(
                  theme.colors.white,
                  theme.colors.gray[800]
                )},
                ${useColorModeValue(theme.colors.white, theme.colors.gray[800])}
              ),
              repeating-radial-gradient(
                circle at center center,
                ${useColorModeValue(theme.colors.gray[100], "#090c10")},
                ${useColorModeValue(theme.colors.gray[100], "#090c10")},
                20px,
                transparent 40px,
                transparent 20px
              );
            background-blend-mode: ${useColorModeValue("multiply", "screen")};
          `}
          height="100vh"
          maxHeight="100vw"
          position="relative"
        >
          <Container
            maxW="1280px"
            py="2rem"
            height="100%"
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box style={{ position: "relative", display: "flex" }}>
              <StaticImage
                src="../images/niceview-front.png"
                alt="nice!view"
                height={352}
                placeholder="none"
                loading="eager"
                draggable={false}
                formats={["auto", "webp", "avif"]}
                quality={90}
              />
              <video
                height={272}
                style={{
                  height: "272px",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translateX(-53.25%) translateY(-50%)",
                  filter: "brightness(80%)",
                  maxWidth: "72%",
                  zIndex: 2,
                }}
                autoPlay
                playsInline
                loop
                muted
              >
                <source src="/niceview.webm" type={`video/webm; codecs=vp9`} />
                <source src="/niceview.mp4" type={`video/mp4`} />
              </video>
            </Box>
          </Container>
          <Box
            css={css`
              background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2hldnJvbl90aGluX2Rvd24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiBmaWxsPSJ3aGl0ZSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTE3LjQxOCw2LjEwOWMwLjI3Mi0wLjI2OCwwLjcwOS0wLjI2OCwwLjk3OSwwYzAuMjcsMC4yNjgsMC4yNzEsMC43MDEsMCwwLjk2OWwtNy45MDgsNy44M2MtMC4yNywwLjI2OC0wLjcwNywwLjI2OC0wLjk3OSwwbC03LjkwOC03LjgzYy0wLjI3LTAuMjY4LTAuMjctMC43MDEsMC0wLjk2OWMwLjI3MS0wLjI2OCwwLjcwOS0wLjI2OCwwLjk3OSwwTDEwLDEzLjI1TDE3LjQxOCw2LjEwOXoiLz48L3N2Zz4=);
              background-size: contain;
              background-repeat: no-repeat;
              position: absolute;
              height: 60px;
              width: 80px;
              margin: 0px 0 0 -40px;
              line-height: 60px;
              left: 50%;
              bottom: 10px;
              filter: ${useColorModeValue('brightness(30%)', 'brightness(70%)')};
              text-align: center;
              font-size: 70px;
              text-decoration: none;
              animation: ${fadeMoveDown} 2s ease-in-out infinite;
            `}
          />
          <Box
            width="100%"
            height="100%"
            backgroundColor="#0d0d0d"
            position="absolute"
            top="0"
            left="0"
            visibility={{ base: 'hidden', lg: 'visible'}}
            css={css`
              animation: ${disappear} 1s ease-in-out 1.5s forwards;
            `}
          />
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
              <Box
                mx="1rem"
                mt="3rem"
                maxHeight="50vh"
                maxWidth="600px"
                w="100%"
                css={css`
                  filter: drop-shadow(
                    0px 10px 20px ${useColorModeValue(gray600, gray900)}
                  );
                `}
              >
                <StaticImage
                  src="../images/niceview-angle.png"
                  alt="nice!view"
                  width={600}
                  placeholder="none"
                  imgStyle={{ objectFit: "contain", maxHeight: "50vh" }}
                  loading="eager"
                  draggable={false}
                  formats={["auto", "webp", "avif"]}
                  quality={90}
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
                  <Box
                    as="span"
                    color={useColorModeValue("cyan.500", "cyan.300")}
                  >
                    Have your cake{" "}
                  </Box>
                  <br />
                  and eat it too.
                </chakra.h1>

                <Text
                  maxW="560px"
                  mx="auto"
                  opacity={0.7}
                  fontSize={{ base: "lg", lg: "xl" }}
                  my="6"
                >
                  Using Sharp's cutting edge Memory-in-Pixel technology, the
                  nice!view maintains 30Hz at e-paper level power draw.
                </Text>
                <ShopNow />
              </Box>
            </Flex>
          </Container>
        </Box>
        <Box as="section">
          <Container maxW="1280px" my="2rem">
            <Flex justify="space-evenly" alignItems="center" wrap="wrap">
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
                  Stay
                  <Box
                    as="span"
                    color={useColorModeValue("cyan.500", "cyan.300")}
                  >
                    {" "}
                    Informed
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
                  See the status of your keyboard at a glance
                  including current profile, output, layer, battery, and more.
                </Text>
              </Box>
              <Box
                mx="1em"
                mt="2rem"
                height="450"
                maxHeight="50vh"
                css={css`
                  filter: drop-shadow(
                    0px 10px 20px ${useColorModeValue(gray600, gray900)}
                  );
                `}
              >
                <StaticImage
                  src="../images/niceview-slide.png"
                  alt="nice!view"
                  height={450}
                  placeholder="none"
                  imgStyle={{ objectFit: "contain", maxHeight: "50vh" }}
                  loading="eager"
                  draggable={false}
                  formats={["auto", "webp", "avif"]}
                  quality={90}
                />
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
              <Box
                mx="1em"
                mt="2rem"
                maxHeight="50vh"
                maxWidth="500px"
                w="100%"
                css={css`
                  filter: drop-shadow(
                    0px 10px 20px ${useColorModeValue(gray600, gray900)}
                  );
                `}
              >
                <StaticImage
                  src="../images/niceview-sockets.png"
                  alt="nice!view sockets"
                  height={400}
                  placeholder="none"
                  imgStyle={{ objectFit: "contain", maxHeight: "50vh" }}
                  loading="eager"
                  draggable={false}
                  formats={["auto", "webp", "avif"]}
                  quality={90}
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
                  <Box
                    as="span"
                    color={useColorModeValue("cyan.500", "cyan.300")}
                  >
                    Sockets{" "}
                  </Box>
                  Included.
                </chakra.h1>

                <Text
                  maxW="560px"
                  mx="auto"
                  opacity={0.7}
                  fontSize={{ base: "lg", lg: "xl" }}
                  mt="6"
                >
                  Installation made easy with included sockets.
                  With sockets adding up to a height of 7mm, the nice!view fits
                  perfectly over the top of a socketed nice!nano.
                </Text>
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
                      <Td>Resolution</Td>
                      <Td isNumeric>160 x 68 (1.08")</Td>
                    </Tr>
                    <Tr>
                      <Td>Dimensions</Td>
                      <Td isNumeric>36 x 14 x 2.9mm</Td>
                    </Tr>
                    <Tr>
                      <Td>Refresh Rate</Td>
                      <Td isNumeric>30Hz</Td>
                    </Tr>
                    <Tr>
                      <Td>Typical Power Draw</Td>
                      <Td isNumeric>~10μA</Td>
                    </Tr>
                    <Tr>
                      <Td>Protocol</Td>
                      <Td isNumeric>3-wire SPI</Td>
                    </Tr>
                    <Tr>
                      <Td>Voltage</Td>
                      <Td isNumeric>3.3V</Td>
                    </Tr>
                    <Tr>
                      <Td>Display</Td>
                      <Td isNumeric>Sharp LS011B7DH03</Td>
                    </Tr>
                    <Tr>
                      <Td>PCB</Td>
                      <Td isNumeric>Conformal Coat, ENIG, FR-4</Td>
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

export default niceView;
