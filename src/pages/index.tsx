import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  Stack,
  Text,
  useColorModeValue,
  color,
  useToken,
  Wrap
} from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/pro-solid-svg-icons";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { jsx, css, keyframes } from "@emotion/react";
import Layout from "../components/layout";
import theme from '../@chakra-ui/gatsby-plugin/theme';
import { Helmet } from "react-helmet";

const gray900 = theme.colors.gray[900];
const gray600 = theme.colors.gray[600];

const float = keyframes`
  0% {
    transform: translateY(-20px);
    filter: drop-shadow(0px 25px 30px ${gray600});
  }
  100% {
    transform: translateY(0px);
    filter: drop-shadow(0px 5px 15px ${gray600});
  }
`;

const slideIn = keyframes`
  0% {
    transform: translateY(-15%) translateX(15%);
  }
  100% {
    transform: translateY(0px) translateX(0px);
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <Helmet>
      <title>Nice Keyboards</title>
      <meta name="description" content="Cutting edge wireless mechanical keyboard solutions" />
    </Helmet>
    <Box mb={20}>
      <Box as="section" pt={{ base: "8rem", md: "10rem" }} pb="5rem" backgroundImage={`url('/nicenanobg-${useColorModeValue('light', 'dark')}.svg')`} backgroundSize="cover" backgroundPosition="center">
        <Container maxW="1280px" my="2rem">
          <Wrap justify="center">
            <Box
              css={css`
                animation: ${float} 5s ease-in-out infinite alternate;
              `}
              mr="1em"
              maxHeight="50vh"
              maxWidth="275px"
              w="100%"
              ml="1rem"
            >
              <Img fadeIn={false} loading="eager" fluid={data.nicenano.childImageSharp.fluid} imgStyle={{ objectFit: 'contain', maxHeight: '50vh' }} draggable={false} />
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
                Free yourself of wires.
                <Box
                  as="span"
                  color={useColorModeValue("cyan.500", "cyan.300")}
                >
                  {" "}
                  nice!nano
                </Box>
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
              <Button
                h="4rem"
                px="2rem"
                fontSize="1.2rem"
                as="a"
                size="lg"
                colorScheme="cyan"
                mt="10"
                rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
              >
                Learn More
              </Button>
            </Box>
          </Wrap>
        </Container>
      </Box>
      <Box
        as="section"
        pb={{ base: "4rem", md: "6rem"}}
        background={useColorModeValue("gray.100", "gray.700")}
        overflow="hidden"
        backgroundImage={`url('/nice60bg-${useColorModeValue('light', 'dark')}.svg')`} backgroundSize="cover" backgroundPosition="bottom"
      >
        <Container maxW="1280px">
          <Flex direction="column" align="center">
            <Box
              css={css`
                filter: drop-shadow(0px 15px 30px ${useColorModeValue(gray600, gray900)});
                transform: translateY(-15%) translateX(15%);
                animation: ${slideIn} 2s 1s cubic-bezier(0.65, 0, 0.35, 1) forwards;
              `}
              mb={{ base: "3rem", md: "4rem"}}
              maxW="900px"
              w="100%"
              minW="450px"
            >
              <Img fadeIn={false} loading="eager" fluid={data.nice60.childImageSharp.fluid} draggable={false} />
            </Box>
            <Box textAlign="center">
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
                Months of battery.
                <Box
                  as="span"
                  fontSize={{ base: "xl", lg: "2xl" }}
                  lineHeight="2"
                  verticalAlign="top"
                >
                  *
                </Box>
                <Box
                  as="span"
                  color={useColorModeValue("cyan.500", "cyan.300")}
                >
                  {" "}
                  nice!60
                </Box>
              </chakra.h1>

              <Text
                maxW="560px"
                mx="auto"
                opacity={0.7}
                fontSize={{ base: "lg", lg: "xl" }}
                mt="6"
              >
                The nice!60 is a wireless standard 60% PCB with hotswap sockets 
                and underglow with unbelievable battery life.
              </Text>

              <Button
                h="4rem"
                px="2rem"
                fontSize="1.2rem"
                as="a"
                size="lg"
                colorScheme="cyan"
                mt="10"
                rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
              >
                Learn More
              </Button>
              <Text
                maxW="560px"
                mx="auto"
                opacity={0.7}
                fontSize={{ base: "sm", lg: "sm" }}
                decoration="italic"
                mt="6"
              >
                * With normal usage, underglow off, and >200mAh battery
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  </Layout>
);

export const query = graphql`
  query {
    nicenano: file(relativePath: { eq: "nicenano.png" }) {
      childImageSharp {
        fluid(maxHeight: 400, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    nice60: file(relativePath: { eq: "nice60home.png" }) {
      childImageSharp {
        fluid(maxWidth: 900, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

export default IndexPage;
