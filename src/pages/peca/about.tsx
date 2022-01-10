import Head from 'next/head'
import { Box, Heading, Text, Link } from '@chakra-ui/react'

import { MainLayout } from '@/layouts/MainLayout'

const PecaAboutPage = () => {
  return (
    <>
      <Head>
        <title>ピアキャストって何? | ラドウェンのラボ</title>
      </Head>
      <Box border="2px" bg="orange.50" p="8" minW="480px" w="80%" minH="320px">
        <Heading textAlign="center">ピアキャストって何?</Heading>

        <Box mt="16" px="16">
          <Text>
            ピアキャスト(PeerCast)とは、動画・音楽などのメディアをストリーミング配信する為のツールの一つです。
          </Text>
          <Text>
            YouTubeやTwitchなどと異なり、ホスティングサーバーを持ちません。
            P2P(Peer To
            Peer構築されており、配信者から視聴者、視聴者から更に視聴者へとリレー方式で配信します。
          </Text>
          <Text>
            詳しくは
            <Link
              color="red"
              href="http://www.pecastation.org/"
              target="_blank"
            >
              PeerCastStation
            </Link>
            を御覧ください。
          </Text>
        </Box>
      </Box>
    </>
  )
}

PecaAboutPage.getLayout = (page: JSX.Element) => {
  return <MainLayout>{page}</MainLayout>
}

export default PecaAboutPage
