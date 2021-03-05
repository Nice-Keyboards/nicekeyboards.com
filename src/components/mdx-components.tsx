import React, { useState } from "react";
import BaseHighlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import {
  Alert,
  Box,
  Button,
  chakra,
  HTMLChakraProps,
  Kbd,
  useClipboard,
  useColorModeValue,
} from "@chakra-ui/react";

interface HighlightProps {
  codeString: string
  language: Language
  metastring?: string
}

function Highlight({
  codeString,
  language,
  metastring,
  ...props
}: HighlightProps) {

  return (
    <BaseHighlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
      {...props}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div data-language={language}>
          <pre className={className} style={style}>
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i })
              return (
                <chakra.div
                  px="5"
                  whiteSpace="normal"
                  {...lineProps}
                >
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </chakra.div>
              )
            })}
          </pre>
        </div>
      )}
    </BaseHighlight>
  )
}

const CopyButton = (props) => (
  <Button
    size="sm"
    position="absolute"
    textTransform="uppercase"
    colorScheme="cyan"
    fontSize="xs"
    height="24px"
    top={0}
    zIndex="1"
    right="1.25em"
    opacity="0.5"
    _hover={{opacity: 1}}
    {...props}
  />
)

const CodeContainer = (props) => (
  <Box padding="5" rounded="8px" my="8" bg="#011627" {...props} />
);

function CodeBlock(props) {
  const {
    className,
    live = true,
    manual,
    render,
    children,
    viewlines,
    ln,
    ...rest
  } = props
  const [editorCode, setEditorCode] = useState(children.trim())

  const language = className?.replace(/language-/, "")
  const { hasCopied, onCopy } = useClipboard(editorCode)

  return (
    <Box position="relative" zIndex="0">
      <CodeContainer px="0">
        <Highlight
          codeString={editorCode}
          language={language}
          metastring={ln}
        />
      </CodeContainer>
      <CopyButton top="4" onClick={onCopy}>
        {hasCopied ? "copied" : "copy"}
      </CopyButton>
    </Box>
  )
}

const Pre = (props) => <chakra.div my="2em" borderRadius="sm" {...props} />;

const Table = (props) => (
  <chakra.div overflowX="auto">
    <chakra.table textAlign="left" mt="32px" width="full" {...props} />
  </chakra.div>
);

const THead = (props) => (
  <chakra.th
    bg={useColorModeValue("gray.50", "whiteAlpha.100")}
    fontWeight="semibold"
    p={2}
    fontSize="sm"
    {...props}
  />
);

const TData = (props) => (
  <chakra.td
    p={2}
    borderTopWidth="1px"
    borderColor="inherit"
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
);

const LinkedHeading = (props: HTMLChakraProps<"h2">) => (
  <chakra.h2 data-group="" css={{ scrollMarginBlock: "6rem" }} {...props}>
    <span className="content">{props.children}</span>
    {props.id && (
      <chakra.a
        aria-label="anchor"
        color="cyan.500"
        fontWeight="normal"
        outline="none"
        _focus={{ opacity: 1, boxShadow: "outline" }}
        opacity={0}
        _groupHover={{ opacity: 1 }}
        ml="0.375rem"
        href={`#${props.id}`}
      >
        #
      </chakra.a>
    )}
  </chakra.h2>
)

const InlineCode = (props: any) => (
  <chakra.code
    apply="mdx.code"
    color={useColorModeValue("blue.600", "blue.100")}
    bgColor={useColorModeValue("gray.100", "gray.700")}
    rounded="md"
    {...props}
  />
)

const MDXComponents = {
  h1: (props) => <chakra.h1 apply="mdx.h1" {...props} />,
  h2: (props) => <LinkedHeading apply="mdx.h2" {...props} />,
  h3: (props) => <LinkedHeading as="h3" apply="mdx.h3" {...props} />,
  h4: (props) => <LinkedHeading as="h4" apply="mdx.h4" {...props} />,
  hr: (props) => <chakra.hr apply="mdx.hr" {...props} />,
  strong: (props) => <Box as="strong" fontWeight="semibold" {...props} />,
  inlineCode: InlineCode,
  code: CodeBlock,
  pre: Pre,
  kbd: Kbd,
  br: (props) => <Box height="24px" {...props} />,
  table: Table,
  th: THead,
  td: TData,
  a: (props) => <chakra.a apply="mdx.a" {...props} />,
  p: (props) => <chakra.p apply="mdx.p" {...props} />,
  ul: (props) => <chakra.ul apply="mdx.ul" {...props} />,
  ol: (props) => <chakra.ol apply="mdx.ul" {...props} />,
  li: (props) => <chakra.li pb="4px" {...props} />,
  blockquote: (props) => (
    <Alert
      mt="4"
      role="none"
      status="warning"
      variant="left-accent"
      as="blockquote"
      rounded="4px"
      my="1.5rem"
      {...props}
    />
  ),
};

export default MDXComponents;