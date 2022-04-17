import Logo from './logo'
import NextLink from 'next/link'
import {
  useColorModeValue,
  Link,
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggle from './theme-toggle-button'

const LinkItem = ({ href, path, children }) => {
  const active = href === path
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        passHref
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position={'fixed'}
      as="nav"
      w={'100%'}
      bg={useColorModeValue('#ffffff40', '20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display={'flex'}
        p={2}
        maxWidth={'container.md'}
        wrap={'wrap'}
        align={'center'}
        justifyContent={'space-between'}
      >
        <Flex align={'center'} mr={5}>
          <Heading as={'h1'} size={'lg'} letterSpacing={'tight'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={['column', 'row']}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          align={'center'}
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href={'/works'} path={path}>
            work
          </LinkItem>
          <LinkItem href={'/posts'} path={path}>
            posts
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggle />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href={'/'} passHref>
                  <MenuItem as={Link}>about</MenuItem>
                </NextLink>
                <NextLink href={'/works'} passHref>
                  <MenuItem as={Link}>works</MenuItem>
                </NextLink>
                <NextLink href={'/posts'} passHref>
                  <MenuItem as={Link}>posts</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
