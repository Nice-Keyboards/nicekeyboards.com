import { Box, chakra, Flex, Heading, Link, Tooltip, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Flags from "country-flag-icons/react/3x2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBadgeCheck,
  faCheckCircle,
  faQuestionCircle,
  faTimesCircle,
} from "@fortawesome/pro-duotone-svg-icons";



interface StoreRegion {
  region: string;
  stores: {
    name: string;
    url: string;
    country: string;
    type: string;
    stock: {
      tag: string;
      inStock: string;
      outOfStock: string;
      link?: string;
    };
    official?: boolean;
  }[];
}

const shuffleArray = (arr: Array<any>): Array<any> => {
  let array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default function FindAStore({ stores }: { stores: StoreRegion[] }) {
  const [storesState, setStoresState] = useState(stores);
  const [stock, setStock] = useState<{ [url: string]: boolean | undefined }>({});
  const [checkedStock, setCheckedStock] = useState(false);
  const container = useRef(null);
  const officialColor = useColorModeValue("cyan.600", "cyan.400");

  useEffect(() => {
    let regions = [...storesState];

    regions.forEach(r => {
      r.stores = shuffleArray(r.stores);
    });

    setStoresState(regions);
  }, []);

  const checkStock = async () => {
    let stockCopy = { ...stock };

    await Promise.all(storesState.map(async (r) => await Promise.all(r.stores.map(async (s) => {
      try {
        switch (s.type) {
          case 'shopify':
            const json = await (await fetch(s.url + ".js")).json();
            stockCopy[s.url] = json.available;
            break;
          case 'klaviyo':
            const json2 = await (await fetch(s.stock.link!)).json();
            stockCopy[s.url] = json2.data.variants[0].inventory_quantity > 0;
            break;
          case 'keebsupply':
            stockCopy[s.url] = await fetch(s.stock.link!).then(resp => resp.json()).then(json => json.available).catch(() => undefined);
            break;
          case 'squarespace':
            if (!s.stock) {
              s.stock = {
                tag: ".product-mark.sold-out",
                inStock: undefined,
                outOfStock: "Sold Out",
              };
            }
          case 'woocommerce':
            if (!s.stock) {
              s.stock = {
                tag: ".single_add_to_cart_button",
                inStock: "Add to cart",
                outOfStock: undefined,
              };
            }
          case 'wix':
            if (!s.stock) {
              s.stock = {
                tag: "[data-hook='add-to-cart']",
                inStock: "Add to Cart",
                outOfStock: "Out of Stock",
              };
            }
          case 'custom':
            const res = await fetch("https://cors.nicell.workers.dev/?" + s.url);
            if (res.status >= 400) {
              break;
            }
            const parser = new DOMParser();
            const doc = parser.parseFromString(
              await res.text(),
              "text/html"
            );
            const stockText = doc.querySelector(s.stock.tag)?.textContent.trim();
            if (stockText === s.stock.inStock) {
              stockCopy[s.url] = true;
            } else if (stockText === s.stock.outOfStock) {
              stockCopy[s.url] = false;
            }
            break;
          default:
            stockCopy[s.url] = undefined;
        }
        setStock({ ...stockCopy });
      } catch {
        stockCopy[s.url] = undefined;
      }
    }))));

    setStock({ ...stockCopy });

  }

  const stockIcon = (available: boolean) => {
    switch (available) {
      case true:
        return (
          <Tooltip label="In stock" openDelay={300}>
            <Box pl="0.25rem">
              <FontAwesomeIcon color="#4caf50" icon={faCheckCircle} />
            </Box>
          </Tooltip>
        );
      case false:
        return (
          <Tooltip label="Out of stock" openDelay={300}>
            <Box pl="0.25rem">
              <FontAwesomeIcon color="#f44336" icon={faTimesCircle} />
            </Box>
          </Tooltip>
        );
      default:
        return (
          <Tooltip label="Stock Unknown" openDelay={300}>
            <Box pl="0.25rem">
              <FontAwesomeIcon color="#ffb300" icon={faQuestionCircle} />
            </Box>
          </Tooltip>
        );
    }
  }

  const callbackFunction = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting && !checkedStock) {
      setCheckedStock(true);
      checkStock();
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.01,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (container.current) observer.observe(container.current);

    return () => {
      if (container.current) observer.unobserve(container.current);
    };
  }, [container, options]);

  return (
    <Box textAlign="center" pt="3rem" id="find-a-store" ref={container}>
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
          <Flex justify="center" alignItems="center" wrap="wrap" maxW="500px">
            {region.stores.map((store) => {
              const Flag = Flags[store.country];
              const isOfficial =
                store.official || store.url.includes("typeractive.xyz");
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
                  {isOfficial ? (
                    <Tooltip label="Official Nice Keyboards store" openDelay={300}>
                      <Box pl="0.35rem">
                        <FontAwesomeIcon color={officialColor} icon={faBadgeCheck} />
                      </Box>
                    </Tooltip>
                  ) : null}
                  {stockIcon(stock[store.url])}
                </Link>
              );
            })}
          </Flex>
        </React.Fragment>
      ))}
    </Box>
  );
}
