import { format } from 'date-fns-tz'
import Head from 'next/head'
import Image from 'next/image'
import { MainLayout } from '@/layouts/MainLayout'
import { Box, Heading, Text } from '@chakra-ui/react'
import { Board } from '@/components/Board'
import { PostRepository } from '@/domain/gamedev-diary/repository'
import type { PostEntity, PostElement } from '@/domain/gamedev-diary/entity'

const GameDevPostPage = ({ post }) => {
  return (
    <>
      <Head>
        <title>ゲーム開発日記 | ラドウェンのラボ</title>
      </Head>

      <Box mb="16">
        <Board>
          <Heading textAlign="center">{post.title}</Heading>
          <Text fontSize="xs" textAlign="right" mt={4}>
            {format(new Date(post.date), 'yyyy/MM/dd HH:mm', {
              timeZone: 'Asia/Tokyo',
            })}
          </Text>

          <Box mt="16" px="16" display="flex" flexDirection="column">
            {post.body.map((elem: PostElement, i: number) => {
              switch (elem.type) {
                case 'text':
                  return (
                    <Text key={i} {...elem.attributes}>
                      {elem.body}
                    </Text>
                  )
                case 'h2':
                  return (
                    <Heading
                      key={i}
                      as="h2"
                      size="md"
                      mt="8"
                      mb="4"
                      {...elem.attributes}
                    >
                      {elem.body}
                    </Heading>
                  )
                case 'image':
                  return <Image key={i} {...elem.attributes} />
                default:
                  return null
              }
            })}
          </Box>
        </Board>
      </Box>
    </>
  )
}

GameDevPostPage.getLayout = (page: JSX.Element) => {
  return <MainLayout>{page}</MainLayout>
}

const getStaticPaths = async () => {
  const repo = new PostRepository()
  const posts = await repo.getIDs()
  const paths = posts.map((id: string) => ({ params: { id } }))
  return { paths, fallback: false }
}

const getStaticProps = async ({ params }) => {
  const repo = new PostRepository()
  const post: PostEntity = await repo.get(params.id)

  return {
    props: {
      post: {
        title: post.title,
        date: post.date.getTime(),
        body: post.body,
      },
    },
  }
}

export default GameDevPostPage
export { getStaticPaths, getStaticProps }
