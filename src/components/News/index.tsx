import { useState, useEffect, FormEvent } from 'react'
import { Box, Stack, Heading, Input, Button } from '@chakra-ui/react'
import { format } from 'date-fns'

import type { NewsEntity } from '@/repositories/NewsRepository'
import { NewsRepository } from '@/repositories/NewsRepository'
import { useUser } from '@/hooks/useUser'

const CreateNewsForm = ({ onCreated }) => {
  const [topic, setTopic] = useState("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (topic !== "") {
      const repo = new NewsRepository()
      await repo.create({ topic, date: new Date() })
      onCreated()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row">
        <Input
          type="text"
          name="topic"
          bg="white"
          onChange={(e) => {
            setTopic(e.currentTarget.value)
          }}
        />
        <Button type="submit">create</Button>
      </Stack>
    </form>
  )
}

const NewsRecord = ({ date, topic }: { date: string; topic: string }) => (
  <Box display="flex">
    <Box>{date}</Box>
    <Box ml={4}>{topic}</Box>
  </Box>
)

const News = () => {
  const [news, setNews] = useState<NewsEntity[]>([])
  const { user } = useUser();

  const handleOnCreated = async () => {
    const repo = new NewsRepository()
    const data = await repo.getLatest(10, true)
    setNews(data)
  }

  useEffect(() => {
    (async () => {
      const repo = new NewsRepository()
      const data = await repo.getLatest()
      setNews(data)
    })()
  }, [])

  return (
    <Box>
      <Heading>NEWS</Heading>
      <Box mt={2}>
        {user?.isAdmin && (<CreateNewsForm onCreated={handleOnCreated} />)}
        {news.map((r) => (
          <NewsRecord
            key={r.date.getTime()}
            date={format(r.date, 'yyyy/MM/dd')}
            topic={r.topic}
          />
        ))}
      </Box>
    </Box>
  )
}

export { News }
