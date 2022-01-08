import { Box } from '@chakra-ui/react'

const Topic = ({ text }: { text: string }) => (
  <Box
    m={0}
    p={0}
    border="1px solid black"
    fontSize="xs"
    fontWeight="bold"
    color="subMenu.topic.text"
    bg="subMenu.topic.bg"
    whiteSpace="pre-line"
  >
    {text}
  </Box>
)

export { Topic }
