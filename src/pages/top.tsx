import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'

import { MainLayout } from '@/layouts/MainLayout'
import { News } from '@/components/News'

const TopPage = () => {
  return (
    <Box border="2px" bg="orange.50" p="8" minW="480px" w="80%" minH="320px">
      <Box display="flex" justifyContent="center">
        <Image alt="logo" src="/images/logo.png" width="332" height="32" />
      </Box>

      <Box mt="16">
        <Text fontSize="xl" textAlign="center">
          工事中だよ
        </Text>
      </Box>

      <Box mt="16">
        <News />
      </Box>
    </Box>
  )
}

TopPage.getLayout = (page: JSX.Element) => {
  return <MainLayout>{page}</MainLayout>
}

export default TopPage
