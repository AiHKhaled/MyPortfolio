import Layout from '../../components/layouts/article'
import React from 'react'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { Meta, Title, WorkImage } from '../../components/layouts/work'
import P from '../../components/layouts/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import nextjslist from '../../public/images/nextjslist.png'

const Work = () => {
  return (
    <Layout title={'NextjsList'}>
      <Container>
        <Title>
          NextJs List <Badge>2022</Badge>
        </Title>
        <P>
          A simple List items using NextJs & the fake json placeholder API to
          fetch data from
        </P>
        <List ml={4} my={4}>
          <ListItem mb={4}>
            <Meta>Website</Meta>
            <Link href="https://nextjs-seven-tawny-54.vercel.app/">
              nextjs-seven-tawny-54.vercel.app/
              <ExternalLinkIcon mx={'2px'} />
            </Link>
          </ListItem>
          <ListItem mb={4}>
            <Meta>Platforms</Meta>
            <span>Web Browser</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NextJs, JSONPlaceholder</span>
          </ListItem>
          <WorkImage src={'/images/nextjslist.png'} />
        </List>
      </Container>
    </Layout>
  )
}

export default Work
