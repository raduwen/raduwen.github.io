import { useState, useEffect } from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { format } from 'date-fns'

import type { NewsEntity } from '@/repositories/NewsRepository'
import { NewsRepository } from '@/repositories/NewsRepository'

const NewsRecord = ({ date, topic }: { date: string, topic: string }) => (
  <Box display="flex" fontSize="md">
    <Box>{date}</Box>
    <Box ml={4}>{topic}</Box>
  </Box>
)

const News = () => {
  const [news, setNews] = useState<NewsEntity[]>([]);

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
        {news.map((r) => <NewsRecord key={r.date.getTime()} date={format(r.date, 'yyyy/MM/dd')} topic={r.topic} />)}
      </Box>
    </Box>
  );
};

export { News }
