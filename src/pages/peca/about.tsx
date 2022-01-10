import Head from 'next/head'
import { Box, Heading, Text, Link } from '@chakra-ui/react'

import { MainLayout } from '@/layouts/MainLayout'
import { Board } from '@/components/Board'

const PecaAboutPage = () => {
  return (
    <>
      <Head>
        <title>ピアキャストって何? | ラドウェンのラボ</title>
      </Head>
      <Board>
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
      </Board>
    </>
  )
}

PecaAboutPage.getLayout = (page: JSX.Element) => {
  return <MainLayout>{page}</MainLayout>
}

export default PecaAboutPage
