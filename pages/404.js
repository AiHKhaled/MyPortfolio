import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text
} from '@chakra-ui/react'
import React from 'react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not Found</Heading>
      <Text>the page you&apos;ve been looking for doesn&apos;t exist</Text>
      <Divider my={6} />
      <Box my={6} align={'center'}>
        <NextLink href="/">
          <Button colorScheme={'teal'}>Go Home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
