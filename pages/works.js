import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/layouts/section'
import nextjslist from '../public/images/nextjslist.png'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <Heading as={'h3'} fontSize={20} mb={4}>
          <SimpleGrid columns={[1, 1, 2]} gap={8}>
            <Section>
              <WorkGridItem
                id="nextlist"
                title="Nextjs List"
                thumbnail={nextjslist}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                laborum iure iusto voluptatem tempora tempore quis animi,
                officia veniam mollitia.
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={nextjslist}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                laborum iure iusto voluptatem tempora tempore quis animi,
                officia veniam mollitia.
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={nextjslist}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                laborum iure iusto voluptatem tempora tempore quis animi,
                officia veniam mollitia.
              </WorkGridItem>
            </Section>
          </SimpleGrid>
        </Heading>
      </Container>
    </Layout>
  )
}

export default Works
