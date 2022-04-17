import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Heading, Link, Image, Badge } from '@chakra-ui/react'
import NextLink from 'next/link'

export const Title = ({ children }) => {
  return (
    <Box>
      <NextLink href="/works">
        <Link>Works</Link>
      </NextLink>
      <span>
        <ChevronRightIcon />
      </span>
      <Heading display={'inline-block'} as="h3" fontSize={20} mb={4}>
        {children}
      </Heading>
    </Box>
  )
}

export const WorkImage = ({ src, alt }) => {
  return <Image borderRadius="lg" src={src} alt={alt} w="full" mb={4} />
}

export const Meta = ({ children }) => {
  return (
    <Badge borderRadius={'md'} p={1} colorScheme={'green'} mr={4}>
      {children}
    </Badge>
  )
}
