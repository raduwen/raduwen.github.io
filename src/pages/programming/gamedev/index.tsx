import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import Head from 'next/head'
import Link from 'next/link'
import { Box, Stack, Heading } from '@chakra-ui/react'

import { MainLayout } from '@/layouts/MainLayout'
import { Board } from '@/components/Board'
import { PostRepository } from '@/domain/gamedev-diary/repository'
import type { PostWithoutBodyEntity } from '@/domain/gamedev-diary/entity'

const GameDevPage = () => {
  const repo = new PostRepository()
  const [posts, setPosts] = useState<PostWithoutBodyEntity[]>([])

  useEffect(() => {
    repo.getLatestPostInfo().then((ps: PostWithoutBodyEntity[]) => {
      setPosts(ps)
    })
  }, [])

  return (
    <>
      <Head>
        <title>ゲーム開発日記 | ラドウェンのラボ</title>
      </Head>

      <Board>
        <Heading textAlign="center">ゲーム開発日記</Heading>

        <Box mt="16" px="16" display="flex" justifyContent="space-between">
          <Stack direction="column">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={{
                  pathname: `/programming/gamedev/[id]`,
                  query: { id: post.id },
                }}
              >
                <a>
                  {format(post.date, 'yyyy/MM/dd')} {post.title}
                </a>
              </Link>
            ))}
          </Stack>
        </Box>
      </Board>
    </>
  )
}

GameDevPage.getLayout = (page: JSX.Element) => {
  return <MainLayout>{page}</MainLayout>
}

export default GameDevPage
