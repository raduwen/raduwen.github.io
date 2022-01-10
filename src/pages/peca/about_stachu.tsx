import Head from 'next/head'
import {
  Box,
  Heading,
  Text,
  Link,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'

import { MainLayout } from '@/layouts/MainLayout'

const PecaAboutStachuPage = () => {
  return (
    <>
      <Head>
        <title>すたちゅーって何? | ラドウェンのラボ</title>
      </Head>
      <Box border="2px" bg="orange.50" p="8" minW="480px" w="80%" minH="320px">
        <Heading textAlign="center">すたちゅーって何?</Heading>

        <Box mt="16" px="16">
          <Text>すたちゅーはすたちゅーやろ？</Text>
          <UnorderedList>
            <ListItem>
              <Link
                color="red"
                href="https://mouneyou.rgx6.com/"
                target="_blank"
              >
                てゆうかもう寝よう。
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </>
  )
}

PecaAboutStachuPage.getLayout = (page: JSX.Element) => {
  return <MainLayout>{page}</MainLayout>
}

export default PecaAboutStachuPage
