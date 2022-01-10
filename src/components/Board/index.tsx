import { Box } from '@chakra-ui/react'

const Board = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <Box border="2px" bg="board.bg" p="16" minW="480px" w="80%" minH="320px">
      {children}
    </Box>
  )
}

export { Board }
