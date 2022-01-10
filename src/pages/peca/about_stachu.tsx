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
import { Board } from '@/components/Board'

const PecaAboutStachuPage = () => {
  return (
    <>
      <Head>
        <title>すたちゅーって何? | ラドウェンのラボ</title>
      </Head>
      <Board>
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
      </Board>
    </>
  )
}

PecaAboutStachuPage.getLayout = (page: JSX.Element) => {
  return <MainLayout>{page}</MainLayout>
}

export default PecaAboutStachuPage
