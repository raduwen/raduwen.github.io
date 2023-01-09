import Head from 'next/head'
import { Box, Heading, UnorderedList, ListItem } from '@chakra-ui/react'

import { MainLayout } from '@/layouts/MainLayout'
import { Board } from '@/components/Board'

const EnvironmentPage = () => {
  return (
    <>
      <Head>
        <title>環境 | ラドウェンのラボ</title>
      </Head>

      <Box mb="16">
        <Board>
          <Heading textAlign="center">PC</Heading>

          <Box mt="16" px="16" display="flex" flexDirection="column">
            <Heading as="h2" size="md">
              ほぼゲーム用
            </Heading>
            <UnorderedList mt="4">
              <ListItem>OS : Windows 11 Pro</ListItem>
              <ListItem>Mother : ASRock B550 Phatom Gaming 4</ListItem>
              <ListItem>CPU : AMD Ryzen 9 5900X</ListItem>
              <ListItem>Memory : 64GB</ListItem>
              <ListItem>GPU : GeForce RTX 3070</ListItem>
            </UnorderedList>
          </Box>

          <Box mt="16" px="16" display="flex" flexDirection="column">
            <Heading as="h2" size="md">
              開発用
            </Heading>
            <UnorderedList mt="4">
              <ListItem>Mac mini (2018)</ListItem>
              <ListItem>OS : macOS Monterey</ListItem>
              <ListItem>CPU : Intel Core i5-8500B</ListItem>
              <ListItem>Memory : 32GB</ListItem>
              <ListItem>GPU : Intel UHD Graphics 630</ListItem>
            </UnorderedList>
          </Box>

          <Box mt="16" px="16" display="flex" flexDirection="column">
            <Heading as="h2" size="md">
              サーバ用
            </Heading>
            <UnorderedList mt="4">
              <ListItem>Raspberry Pi 4B 8GB</ListItem>
              <ListItem>Raspberry Pi 3B+</ListItem>
              <ListItem>Raspberry Pi 3B+</ListItem>
            </UnorderedList>
          </Box>
        </Board>
      </Box>

      <Box mb="16">
        <Board>
          <Heading textAlign="center">音響</Heading>

          <Box mt="16" px="16" display="flex" flexDirection="column">
            <UnorderedList mt="4">
              <ListItem>I/F : Steinberg UR242</ListItem>
              <ListItem>マルチエフェクタ : Line 6 POD X3</ListItem>
              <ListItem>ギターシンセ : Roland GR-55</ListItem>
              <ListItem>キーボード : Casio CTK-571</ListItem>
              <ListItem>アコギ : Taylor Academy10e</ListItem>
              <ListItem>エレキ : Epiphone Les Paul Special II White</ListItem>
            </UnorderedList>
          </Box>
        </Board>
      </Box>
    </>
  )
}

EnvironmentPage.getLayout = (page: JSX.Element) => {
  return <MainLayout>{page}</MainLayout>
}

export default EnvironmentPage
