import Head from 'next/head'
import Image from 'next/image'
import { Box, Heading, UnorderedList, ListItem } from '@chakra-ui/react'

import { MainLayout } from '@/layouts/MainLayout'

const RaduwenPage = () => {
  return (
    <>
      <Head>
        <title>管理人? | ラドウェンのラボ</title>
      </Head>

      <Box border="2px" bg="orange.50" p="8" minW="480px" w="80%" minH="320px">
        <Heading textAlign="center">管理人?</Heading>

        <Box mt="16" px="16" display="flex" justifyContent="space-between">
          <Box>
            <UnorderedList fontSize="lg">
              <ListItem>名前 : ラドウェン(raduwen)</ListItem>
              <ListItem>血液型 : O型</ListItem>
              <ListItem>誕生日 : 12月14日</ListItem>
              <ListItem>出身 : 京都</ListItem>
              <ListItem>好きな食べ物 : 甘い物</ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Image src="/images/raduwen.png" width={112} height={112} />
          </Box>
        </Box>
      </Box>
    </>
  )
}

RaduwenPage.getLayout = (page: JSX.Element) => {
  return <MainLayout>{page}</MainLayout>
}

export default RaduwenPage