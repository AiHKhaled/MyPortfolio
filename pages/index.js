import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import Paragraph from '../components/layouts/paragraph'
import Section from '../components/layouts/section'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/layouts/Bio'
import Layout from '../components/layouts/article'
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius={'lg'}
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          nb={'6'}
          p={'3'}
          align={'center'}
        >
          Hello, I&apos;m a full stack Developer Based in Algeria
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              name
            </Heading>
            <p> Artist Developer Designer</p>
          </Box>
          <Box flexShrink={0} mt="4" ml={{ md: 6 }} align="center">
            <Image
              borderColor={'whiteAlpha.800'}
              borderWidth={2}
              borderStyle="solid"
              maxWidth="120px"
              display="inline-block"
              borderRadius="full"
              boxSize="100px"
              objectFit="cover"
              src={'/images/pic.jpg'}
              alt="alt"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as={'h3'} variant={'section-title'}>
            Work
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            praesentium atque in libero iste laboriosam eaque quidem, quos,
            obcaecati doloribus accusantium? Reprehenderit dignissimos quam
            dolorum quia eligendi mollitia vitae called&nbsp;
            <NextLink href={'/works/nextlist'} passHref>
              <Link>Inkdrop</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align={'center'} my={4}>
            <NextLink href={'/works'} passHref>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as={'h3'} variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1997</BioYear>Born in Tiaret, Algeria
          </BioSection>
          <BioSection>
            <BioYear>
              2015-2019 License degree in Math & Computer Science
            </BioYear>
            I picked this specialty as it was a continuation for my
            bachelor&apos;s and it also combined two of my favorite fields math
            and computer science, hitting two birds with one stone.
          </BioSection>
          <BioSection>
            <BioYear>
              2019-2021 Master&apos;s Degree in Computer Science (Networking &
              Telecommunications) Ibn Khaldoun University.
            </BioYear>
            I continued with my master, because I had a passion for learning new
            things, I was always curious and motivated, but I dropped a year
            since I felt like I didn&apos;t belong to this field, but sometimes
            you have to stick with somethings in order to find value in them,
            and I&apos;m glad I did.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as={'h3'} variant={'section-title'}>
            I ❤
          </Heading>
          <Paragraph>
            Art, Music, Reading Books,{' '}
            <Link href="https://www.instagram.com/s0m3b0dy_once/">
              Photography
            </Link>{' '}
            & <Link href="https://github.com/AiHKhaled"> Programming </Link>
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as={'h3'} variant={'section-title'}>
            Contact Me
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/AiHKhaled" target="_blank">
                <Button
                  variant={'ghost'}
                  colorScheme="cyan"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @AiHKhaled
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/s0m3b0dy_once/"
                target="_blank"
              >
                <Button
                  variant={'ghost'}
                  colorScheme="cyan"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  s0m3b0dy_once
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
