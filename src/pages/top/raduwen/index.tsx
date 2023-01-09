import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'
import {
  Box,
  Heading,
  UnorderedList,
  ListItem,
  Text,
  Link,
} from '@chakra-ui/react'

import { MainLayout } from '@/layouts/MainLayout'
import { Board } from '@/components/Board'

const RaduwenPage = () => {
  return (
    <>
      <Head>
        <title>管理人? | ラドウェンのラボ</title>
      </Head>

      <Board>
        <Heading textAlign="center">管理人?</Heading>

        <Box mt="16" px="16" display="flex" justifyContent="space-between">
          <Box>
            <UnorderedList>
              <ListItem>名前 : ラドウェン(raduwen)</ListItem>
              <ListItem>血液型 : O型</ListItem>
              <ListItem>誕生日 : 12月14日</ListItem>
              <ListItem>出身 : 京都</ListItem>
              <ListItem>好きな食べ物 : 甘い物</ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Image
              alt="ラドウェン(raduwen)"
              src="/images/raduwen.png"
              width={112}
              height={112}
            />
          </Box>
        </Box>
        <Box mt="16" px="16" display="flex" justifyContent="space-between">
          <Text>
            わしの環境は
            <NextLink passHref href="/top/raduwen/env">
              <Link color="red">ここ</Link>
            </NextLink>
            じゃ
          </Text>
        </Box>
      </Board>
    </>
  )
}

RaduwenPage.getLayout = (page: JSX.Element) => {
  return <MainLayout>{page}</MainLayout>
}

export default RaduwenPage
