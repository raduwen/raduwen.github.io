import Head from 'next/head'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'

import { MainLayout } from '@/layouts/MainLayout'
import { Board } from '@/components/Board'
import { News } from '@/components/News'

const TopPage = () => {
  return (
    <>
      <Head>
        <title>トップ | ラドウェンのラボ</title>
      </Head>
      <Board>
        <Box display="flex" justifyContent="center">
          <Image alt="logo" src="/images/logo.png" width="332" height="32" />
        </Box>

        <Box mt="16">
          <News />
        </Box>
      </Board>
    </>
  )
}

TopPage.getLayout = (page: JSX.Element) => {
  return <MainLayout>{page}</MainLayout>
}

export default TopPage
