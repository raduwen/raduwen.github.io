import type { NextPage } from 'next'
import Link from 'next/link'
import { Heading, Text, Box, Container } from '@chakra-ui/react'

const IndexPage: NextPage = () => {
  return (
    <Container size="container.lg">
      <Box my={16} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Heading my={8}>ラドウェンのラボ</Heading>
        <Text fontSize="xl">
          <Link href="/top">
            - ENTER -
          </Link>
        </Text>
      </Box>
    </Container>
  )
}

export default IndexPage
