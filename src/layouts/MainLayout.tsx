import { Grid, GridItem, Container } from '@chakra-ui/react'

import { Footer } from '@/components/Footer'
import { SubMenu } from '@/components/SubMenu'

const MainLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <Grid templateRows="44px 1fr 64px" templateColumns="134px 1fr" minH="100vh">
      <GridItem gridRow={1} gridColumnStart={1} gridColumnEnd={3}>
        <header>header</header>
      </GridItem>
      <GridItem gridRowStart={2} gridRowEnd={4} gridColumn={1}>
        <SubMenu />
      </GridItem>
      <GridItem gridRow={2} gridColumn={2}>
        <main>
          main
          <Container maxW="container.lg">{children}</Container>
        </main>
      </GridItem>
      <GridItem gridRow={3} gridColumn={2}>
        <Footer />
      </GridItem>
    </Grid>
  )
}

export { MainLayout }
