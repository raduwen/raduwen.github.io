import { Box } from '@chakra-ui/react'
import { BrandLogo } from './BrandLogo'

const Header = ({ children }: { children: JSX.Element }) => {
  return (
    <Box as="header" bg="bg" h="100%">
      <nav>
        <section style={{ display: 'flex' }}>
          <BrandLogo />
          {children}
        </section>
      </nav>
    </Box>
  )
}

export { Header }
