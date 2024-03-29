import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  ListItem,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import { graphql, Link, StaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import React from "react";
import Layout from "./layout";
import MDXComponents from "./mdx-components";
import { Location } from "@reach/router";

interface NavNode {
  title?: string;
  description?: string;
  order?: number;
  slug?: string;
  children?: {
    [dir: string]: NavNode;
  };
}

const NavItem = ({ location, title, description, slug, children }) => {
  const activePage =
    location.pathname === "/" + slug ||
    location.pathname + "/" === "/" + slug ||
    location.pathname === "/" + slug + "/";

  return (
    <>
      <Link to={"/" + slug}>
        <Box
          px=".75rem"
          py=".25rem"
          mb=".5rem"
          borderRadius="4px"
          bgColor={
            activePage ? useColorModeValue("cyan.100", "cyan.900") : null
          }
        >
          {title}
        </Box>
      </Link>
      <UnorderedList listStyleType="none" fontSize=".875em">
        {children &&
          Object.keys(children)
            .sort((a, b) => children[a].order - children[b].order)
            .map((p) => (
              <ListItem key={p}>
                <NavItem location={location} {...children[p]} />
              </ListItem>
            ))}
      </UnorderedList>
    </>
  );
};

const DocsLayout = ({ children }) => {
  return (
    <Location>
      {({ location }) => (
        <StaticQuery
          query={graphql`
            query DocsSidebarQuery {
              allMdx {
                edges {
                  node {
                    slug
                    frontmatter {
                      title
                      description
                      order
                    }
                  }
                }
              }
            }
          `}
          render={(data) => {
            const nav: NavNode = {
              title: "Nice Keyboards",
              description: "Cutting edge wireless keyboard solutions",
            };

            let currentPage = nav;
            let parentPage: NavNode | null = null;

            for (const page of data.allMdx.edges) {
              const path = page.node.slug.split("/");

              if (path[path.length - 1] === "") {
                path.pop();
              }

              let currentDir = nav;
              let parentDir: NavNode | null = null;

              for (const dir of path) {
                if (!currentDir.children) {
                  currentDir.children = {};
                }

                if (!currentDir.children[dir]) {
                  currentDir.children[dir] = {};
                }

                parentDir = currentDir;
                currentDir = currentDir.children[dir];
              }

              currentDir.title = page.node.frontmatter.title;
              currentDir.description = page.node.frontmatter.description;
              currentDir.order = page.node.frontmatter.order;
              currentDir.slug = page.node.slug;

              const activePage =
                location.pathname === "/" + page.node.slug ||
                location.pathname + "/" === "/" + page.node.slug ||
                location.pathname === "/" + page.node.slug + "/";

              if (activePage) {
                currentPage = currentDir;
                parentPage = parentDir;
              }
            }

            const docsNav = Object.keys(nav.children.docs.children)
              .sort(
                (a, b) =>
                  nav.children.docs.children[a].order -
                  nav.children.docs.children[b].order
              )
              .map((p) => (
                <NavItem
                  key={p}
                  location={location}
                  {...nav.children.docs.children[p]}
                />
              ));

            return (
              <MDXProvider components={{ ...MDXComponents }}>
                <Layout>
                  <Helmet defer={false}>
                    <title>
                      {currentPage.title}
                      {parentPage ? ` - ${parentPage.title}` : null}
                    </title>
                    <meta
                      name="description"
                      content={currentPage.description}
                    />
                    <html lang="en" />
                  </Helmet>
                  <Box as="section" pt={{ base: "5rem", md: "6rem" }} pb="5rem">
                    <Container maxW="1280px">
                      <Flex flexDir={{ base: "column", md: "row" }}>
                        <Box
                          w="17rem"
                          pr="1rem"
                          pt="1rem"
                          borderRight="solid 1px"
                          borderRightColor={useColorModeValue(
                            "gray.100",
                            "gray.700"
                          )}
                          display={{ base: "none", md: "block" }}
                        >
                          {/* <Input
                            placeholder="Search"
                            variant="filled"
                            focusBorderColor="cyan.400"
                            colorScheme="cyan"
                            size="md"
                            mb="1rem"
                          /> */}
                          {docsNav}
                        </Box>
                        <Accordion
                          display={{ base: "block", md: "none" }}
                          allowToggle
                        >
                          <AccordionItem>
                            <AccordionButton justifyContent="space-between">
                              <Breadcrumb>
                                {parentPage && parentPage.slug && (
                                  <BreadcrumbItem>
                                    <BreadcrumbLink
                                      as={Link}
                                      to={"/" + parentPage.slug}
                                    >
                                      {parentPage.title}
                                    </BreadcrumbLink>
                                  </BreadcrumbItem>
                                )}
                                <BreadcrumbItem>
                                  <BreadcrumbLink
                                    as={Link}
                                    to={"/" + currentPage.slug}
                                    isCurrentPage
                                  >
                                    {currentPage.title}
                                  </BreadcrumbLink>
                                </BreadcrumbItem>
                              </Breadcrumb>
                              <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>{docsNav}</AccordionPanel>
                          </AccordionItem>
                        </Accordion>
                        <Container maxW="48rem" mb="1rem" px="1.5rem">
                          {children}
                        </Container>
                      </Flex>
                    </Container>
                  </Box>
                </Layout>
              </MDXProvider>
            );
          }}
        />
      )}
    </Location>
  );
};

export default DocsLayout;
