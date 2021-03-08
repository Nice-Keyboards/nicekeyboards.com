import {
  Box,
  chakra,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useUpdateEffect,
  Link as ChakraLink,
  InputLeftElement,
  InputGroup,
  Input,
  HStack,
  VStack
} from "@chakra-ui/react"
import { useViewportScroll } from "framer-motion"
import { Link } from "gatsby";
import React from "react"
import { faBars, faMoon, faSearch, faSun, faTimes } from "@fortawesome/pro-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
//import { MobileNavButton, MobileNavContent } from "./mobile-nav"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "./logo";
import { css } from "@emotion/react";

const NavItem = ({ to, children }) => {
  return (
    <Box mr=".5rem" fontSize="0.875rem">
      <Link to={to}>
        <Flex align="center" justify="center" h="100%" p="1rem">
          {children}
        </Flex>
      </Link>
    </Box>
  );
}

function HeaderContent() {
  const mobileNav = useDisclosure();

  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(
    <FontAwesomeIcon icon={faMoon} />,
    <FontAwesomeIcon icon={faSun} />
  );

  return (
    <>
      <Flex w="100%" h="100%" px="6" align="center" justify="space-between">
        <Flex
          align="center"
          flexShrink={0}
          color={useColorModeValue("gray.700", "gray.200")}
        >
          <Link to="/">
            <Box
              display="flex"
              aria-label="Chakra UI, Back to homepage"
              height="2em"
            >
              <Logo />
            </Box>
          </Link>
        </Flex>
        <Flex
          justify="flex-start"
          align="stretch"
          h="100%"
          w="100%"
          ml="2rem"
          display={{ base: "none", md: "flex" }}
        >
          <NavItem to="/nice-nano">nice!nano</NavItem>
          <NavItem to="/nice-60">nice!60</NavItem>
          <NavItem to="/docs">Documentation</NavItem>
          <NavItem to="/about">About</NavItem>
        </Flex>
        <Flex justify="flex-end" align="center" color="gray.400">
          <ChakraLink
            href="https://discord.gg/CHd6hUy"
            rel="noopener"
            rel="noreferrer"
            target="_blank"
          >
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${text} mode`}
              variant="ghost"
              color="current"
              mr={{ base: "1", md: "3" }}
              icon={<FontAwesomeIcon icon={faDiscord} />}
            />
          </ChakraLink>
          <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            color="current"
            mr={{ base: "1", md: "3" }}
            onClick={toggleMode}
            icon={SwitchIcon}
          />
          <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Open nav`}
            variant="ghost"
            color="current"
            mr={{ base: "1", md: "3" }}
            display={{ base: "block", md: "none"}}
            onClick={mobileNav.onToggle}
            icon={mobileNav.isOpen ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars}/>}
          />
        </Flex>
      </Flex>
      {mobileNav.isOpen && <MobileNav />}
    </>
  );
}

function MobileNav() {
  return (
    <VStack
      justify="flex-start"
      align="flex-start"
      w="100%"
      mt="4.5rem"
      left={0}
      top={0}
      position="absolute"
      bgColor={useColorModeValue("white", "gray.800")}
      px="1rem"
      pb="1rem"
      shadow="md"
    >
      <NavItem to="/nice-nano">nice!nano</NavItem>
      <NavItem to="/nice-60">nice!60</NavItem>
      <NavItem to="/docs">Documentation</NavItem>
      <NavItem to="/about">About</NavItem>
    </VStack>
  );
}

function Header(props) {
  const ref = React.useRef<HTMLHeadingElement>();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {};
  const bgColor = useColorModeValue("white", "gray.800");
  const bg = y > height ? bgColor : "transparent";

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  return (
    <chakra.header
      ref={ref}
      shadow={y > height ? "md" : undefined}
      transition="box-shadow 0.2s"
      pos="fixed"
      top="0"
      zIndex="3"
      bg={bg}
      left="0"
      right="0"
      borderTop="6px solid"
      borderTopColor="cyan.400"
      width="full"
      {...props}
    >
      <chakra.div height="4.5rem" mx="auto" maxW="1200px">
        <HeaderContent />
      </chakra.div>
    </chakra.header>
  );
}

export default Header;
