import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'
import { useColorModeValue, Text } from '@chakra-ui/react'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 19px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: scale(1.2);
  }
`
//${useColorModeValue('', '-dark')}

const Logo = () => {
  const logoimg = `/images/logo.svg`
  return (
    <Link href={'/'}>
      <a>
        <LogoBox>
          <Image src={logoimg} width={40} height={40} alt={'logo'} />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight={'bold'}
            ml={3}
          >
            Parzival Elijah
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
