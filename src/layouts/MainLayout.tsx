import { useState } from 'react'
import { Grid, GridItem, Box } from '@chakra-ui/react'

import { Header } from '@/components/Header'
import { MainMenu } from '@/components/MainMenu'
import { SubMenu } from '@/components/SubMenu'
import { UserProfile } from '@/components/UserProfile'
import { Footer } from '@/components/Footer'

const MainLayout = ({ children }: { children: JSX.Element }) => {
  const [currentSubMenu, setCurrentSubMenu] = useState('top')

  return (
    <Grid templateRows="44px 1fr 64px" templateColumns="134px 1fr" minH="100vh">
      <GridItem gridRow={1} gridColumnStart={1} gridColumnEnd={3}>
        <Header>
          <MainMenu
            onSelected={(v) => {
              setCurrentSubMenu(v)
            }}
          />
        </Header>
      </GridItem>
      <GridItem gridRowStart={2} gridRowEnd={4} gridColumn={1}>
        <UserProfile />
        <SubMenu current={currentSubMenu} />
      </GridItem>
      <GridItem gridRow={2} gridColumn={2}>
        <Box as="main" bg="bg" minH="100%">
          <Box p="4">{children}</Box>
        </Box>
      </GridItem>
      <GridItem gridRow={3} gridColumn={2}>
        <Footer />
      </GridItem>
    </Grid>
  )
}

export { MainLayout }
